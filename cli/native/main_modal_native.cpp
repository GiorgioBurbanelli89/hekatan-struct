// main nativo para el solver modal de Hekatan.
//
// Lee el binario que genera dump_modal_input.mjs (mismos arrays que arma
// modalCpp.ts para el WASM) y llama a modal() con la MISMA firma C.
// Escribe un JSON con el mismo esquema que modal_headless.mjs:
//   { frequencies, periods, massParticipation, nodes, modeShapes }
//
// Uso: modal_native.exe pm_input.bin pm_modal_native.json
#include <cstdio>
#include <cstdlib>
#include <cstdint>
#include <vector>
#include <string>
#include <cmath>
#include <cstring>

extern "C" void modal(
    double *nodes_flat_ptr, int num_nodes,
    unsigned int *element_indices_ptr, int num_element_indices,
    unsigned int *element_sizes_ptr, int num_elements,
    int *support_keys_ptr, bool *support_values_ptr, int num_supports,
    int *elasticity_keys_ptr, double *elasticity_values_ptr, int num_elasticities,
    int *area_keys_ptr, double *area_values_ptr, int num_areas,
    int *moi_z_keys_ptr, double *moi_z_values_ptr, int num_moi_z,
    int *moi_y_keys_ptr, double *moi_y_values_ptr, int num_moi_y,
    int *shear_mod_keys_ptr, double *shear_mod_values_ptr, int num_shear_mod,
    int *torsion_keys_ptr, double *torsion_values_ptr, int num_torsion,
    int *density_keys_ptr, double *density_values_ptr, int num_densities,
    int *thickness_keys_ptr, double *thickness_values_ptr, int num_thicknesses,
    int *poisson_keys_ptr, double *poisson_values_ptr, int num_poissons,
    int *memmod_keys_ptr, double *memmod_values_ptr, int num_memmods,
    int *bendmod_keys_ptr, double *bendmod_values_ptr, int num_bendmods,
    int *plateForm_keys_ptr, int *plateForm_values_ptr, int num_plateForm,
    int *drillType_keys_ptr, int *drillType_values_ptr, int num_drillType,
    int *drillScale_keys_ptr, double *drillScale_values_ptr, int num_drillScale,
    int *shearY_keys_ptr, double *shearY_values_ptr, int num_shearY,
    int *shearZ_keys_ptr, double *shearZ_values_ptr, int num_shearZ,
    int *locang_keys_ptr, double *locang_values_ptr, int num_locang,
    int *release_keys_ptr, bool *release_values_ptr, int num_releases,
    int *nodemass_keys_ptr, double *nodemass_values_ptr, int num_nodemass,
    int include_elements,
    int *diaph_keys_ptr, double *diaph_values_ptr, int num_diaph,
    double *springs_flat_ptr, int num_springs,
    int num_modes, int lateral_mass, int lump_stories,
    double **frequencies_ptr_out, int *num_frequencies_out,
    double **mode_shapes_ptr_out, int *mode_shapes_rows_out, int *mode_shapes_cols_out,
    double **mass_participation_ptr_out, int *mass_participation_rows_out, int *mass_participation_cols_out);

// La bascula: masa ensamblada por nudo, 6 huecos por nudo (Ux Uy Uz Rx Ry Rz).
extern "C" void assembled_joint_mass(
    double *nodes_flat_ptr, int num_nodes,
    unsigned int *element_indices_ptr, int num_element_indices,
    unsigned int *element_sizes_ptr, int num_elements,
    int *area_keys_ptr, double *area_values_ptr, int num_areas,
    int *density_keys_ptr, double *density_values_ptr, int num_densities,
    int *thickness_keys_ptr, double *thickness_values_ptr, int num_thicknesses,
    int *nodemass_keys_ptr, double *nodemass_values_ptr, int num_nodemass,
    int include_elements, int lateral_mass, int lump_stories,
    double *mass_out);

// ── lector binario ────────────────────────────────────────────────────
struct Reader {
    const uint8_t *p;
    const uint8_t *end;
    bool ok = true;
    template <typename T>
    T get() {
        if (p + sizeof(T) > end) { ok = false; return T(); }
        T v; memcpy(&v, p, sizeof(T)); p += sizeof(T); return v;
    }
    void skip(size_t n) { p += n; if (p > end) { p = end; ok = false; } }
    size_t pos() const { return (size_t)(p - end + (end - p)); }
};

static std::string jsonNumber(double v) {
    char b[64];
    if (std::isfinite(v)) snprintf(b, sizeof(b), "%.15g", v);
    else snprintf(b, sizeof(b), "0");
    return b;
}

int main(int argc, char **argv) {
    const char *inPath  = (argc > 1) ? argv[1] : "pm_input.bin";
    const char *outPath = (argc > 2) ? argv[2] : "pm_modal_native.json";

    FILE *f = fopen(inPath, "rb");
    if (!f) { fprintf(stderr, "no se pudo abrir %s\n", inPath); return 2; }
    fseek(f, 0, SEEK_END); long sz = ftell(f); fseek(f, 0, SEEK_SET);
    std::vector<uint8_t> data(sz);
    if (sz > 0 && fread(data.data(), 1, (size_t)sz, f) != (size_t)sz) {
        fprintf(stderr, "lectura incompleta de %s\n", inPath); fclose(f); return 2;
    }
    fclose(f);
    Reader r{ data.data(), data.data() + data.size() };

    auto readU32vec = [&](const char *name, std::vector<uint32_t> &v) -> bool {
        uint32_t n = r.get<uint32_t>();
        if (n > 100000000u) { fprintf(stderr, "count raro en %s: %u\n", name, n); r.ok = false; return false; }
        v.resize(n);
        for (uint32_t i = 0; i < n; ++i) v[i] = r.get<uint32_t>();
        return true;
    };
    auto readF64vec = [&](const char *name, std::vector<double> &v) -> bool {
        uint32_t n = r.get<uint32_t>();
        if (n > 100000000u) { fprintf(stderr, "count raro en %s: %u\n", name, n); r.ok = false; return false; }
        v.resize(n);
        for (uint32_t i = 0; i < n; ++i) v[i] = r.get<double>();
        return true;
    };

    std::vector<double> nodesFlat;
    std::vector<uint32_t> elementIndices, elementSizes, supportKeys;
    std::vector<uint8_t> supportValues;
    std::vector<uint32_t> eKeys[15]; std::vector<double> eVals[15];
    std::vector<uint32_t> pfKeys, pfVals;
    std::vector<uint32_t> dtKeys, dtVals;      // drilling: tipo
    std::vector<uint32_t> dsKeys; std::vector<double> dsVals;   // drilling: escala
    std::vector<uint32_t> relKeys; std::vector<uint8_t> relVals;
    std::vector<uint32_t> nmKeys; std::vector<double> nmVals;
    std::vector<uint32_t> diaKeys; std::vector<double> diaVals;
    std::vector<double> springs;
    int numModes=0, lateral=0, lump=0, inclElem=0;

    uint32_t nn = r.get<uint32_t>();                 // num_nodes
    nodesFlat.resize((size_t)nn * 3);
    for (auto &v : nodesFlat) v = r.get<double>();
    readU32vec("elemIdx", elementIndices);
    readU32vec("elemSz", elementSizes);
    uint32_t ns = r.get<uint32_t>();
    supportKeys.resize(ns); for (auto &v : supportKeys) v = r.get<uint32_t>();
    supportValues.resize((size_t)ns * 6); for (auto &v : supportValues) v = r.get<uint8_t>();
    for (int i = 0; i < 14; ++i) { readF64vec("evals", eVals[i]); readU32vec("ekeys", eKeys[i]); }
    readU32vec("pfVals", pfVals); readU32vec("pfKeys", pfKeys);
    readU32vec("dtVals", dtVals); readU32vec("dtKeys", dtKeys);
    readF64vec("dsVals", dsVals); readU32vec("dsKeys", dsKeys);
    uint32_t nr = r.get<uint32_t>();
    relKeys.resize(nr); for (auto &v : relKeys) v = r.get<uint32_t>();
    relVals.resize((size_t)nr * 12); for (auto &v : relVals) v = r.get<uint8_t>();
    readF64vec("nmod", nmVals); readU32vec("nmodK", nmKeys);
    readF64vec("diaph", diaVals); readU32vec("diaphK", diaKeys);
    uint32_t nspr = r.get<uint32_t>();
    springs.resize((size_t)nspr * 3); for (auto &v : springs) v = r.get<double>();
    numModes = (int)r.get<uint32_t>();
    lateral  = (int)r.get<uint32_t>();
    lump     = (int)r.get<uint32_t>();
    inclElem = (int)r.get<uint32_t>();
    if (!r.ok) { fprintf(stderr, "binario mal formado\n"); return 2; }

    int numNodes = (int)(nodesFlat.size() / 3);

    fprintf(stderr, "dbg: nodes=%d elemIdx=%zu elemSz=%zu supports=%zu", numNodes,
            elementIndices.size(), elementSizes.size(), supportKeys.size());
    for (int i = 0; i < 14; ++i)
        fprintf(stderr, " e%d(%zu,%zu)", i, eKeys[i].size(), eVals[i].size());
    fprintf(stderr, " drill(t %zu, esc %zu)", dtVals.size(), dsVals.size());
    fprintf(stderr, " pf(%zu,%zu) rel(%zu) nodemass(%zu,%zu) diaph(%zu,%zu) springs(%zu)\n",
            pfKeys.size(), pfVals.size(), relKeys.size(),
            nmKeys.size(), nmVals.size(), diaKeys.size(), diaVals.size(),
            springs.size() / 3);

    auto ptrU32 = [&](std::vector<uint32_t> &v) -> unsigned int * {
        return v.empty() ? nullptr : (unsigned int *)v.data();
    };
    auto ptrI32 = [&](std::vector<uint32_t> &v) -> int * {
        return v.empty() ? nullptr : (int *)v.data();
    };
    auto ptrF64 = [&](std::vector<double> &v) -> double * {
        return v.empty() ? nullptr : v.data();
    };
    auto ptrBool = [&](std::vector<uint8_t> &v) -> bool * {
        return v.empty() ? nullptr : (bool *)v.data();
    };

    // ── modo BASCULA: pesar el modelo nudo a nudo y salir ──────────────
    // `modal_native.exe entrada.bin salida.json masa.csv` NO resuelve los
    // modos: solo escribe la masa ensamblada de cada nudo, que es la tabla
    // AssembledJointMass de ETABS, para poder comparar las dos basculas antes
    // de discutir de frecuencias.
    if (argc > 3) {
        const char *masaPath = argv[3];
        std::vector<double> masa((size_t)numNodes * 6, 0.0);
        assembled_joint_mass(
            ptrF64(nodesFlat), numNodes,
            ptrU32(elementIndices), (int)elementIndices.size(),
            ptrU32(elementSizes), (int)elementSizes.size(),
            ptrI32(eKeys[1]), ptrF64(eVals[1]), (int)eVals[1].size(),   // areas
            ptrI32(eKeys[6]), ptrF64(eVals[6]), (int)eVals[6].size(),   // densidades
            ptrI32(eKeys[7]), ptrF64(eVals[7]), (int)eVals[7].size(),   // espesores
            ptrI32(nmKeys), ptrF64(nmVals), (int)nmVals.size(),         // masa nodal
            inclElem, lateral, lump,
            masa.data());
        FILE *mo = fopen(masaPath, "wb");
        if (!mo) { fprintf(stderr, "no se pudo escribir %s\n", masaPath); return 2; }
        fprintf(mo, "nudo,x,y,z,mUx,mUy,mUz,mRx,mRy,mRz\n");
        double total = 0.0;
        for (int i = 0; i < numNodes; ++i) {
            fprintf(mo, "%d,%s,%s,%s", i,
                    jsonNumber(nodesFlat[i*3+0]).c_str(),
                    jsonNumber(nodesFlat[i*3+1]).c_str(),
                    jsonNumber(nodesFlat[i*3+2]).c_str());
            for (int k = 0; k < 6; ++k) fprintf(mo, ",%s", jsonNumber(masa[(size_t)i*6+k]).c_str());
            fprintf(mo, "\n");
            total += masa[(size_t)i*6+0];
        }
        fclose(mo);
        printf("%s: %d nudos · masa total (Ux) = %.9g · flags lateral=%d lump=%d inclElem=%d\n",
               masaPath, numNodes, total, lateral, lump, inclElem);
        return 0;
    }

    double *freqOut = nullptr; int nFreq = 0;
    double *modesOut = nullptr; int mRows = 0, mCols = 0;
    double *mpOut = nullptr; int mpRows = 0, mpCols = 0;

    modal(
        ptrF64(nodesFlat), numNodes,
        ptrU32(elementIndices), (int)elementIndices.size(),
        ptrU32(elementSizes), (int)elementSizes.size(),
        ptrI32(supportKeys), ptrBool(supportValues), (int)supportKeys.size(),
        ptrI32(eKeys[0]), ptrF64(eVals[0]), (int)eVals[0].size(),
        ptrI32(eKeys[1]), ptrF64(eVals[1]), (int)eVals[1].size(),
        ptrI32(eKeys[2]), ptrF64(eVals[2]), (int)eVals[2].size(),
        ptrI32(eKeys[3]), ptrF64(eVals[3]), (int)eVals[3].size(),
        ptrI32(eKeys[4]), ptrF64(eVals[4]), (int)eVals[4].size(),
        ptrI32(eKeys[5]), ptrF64(eVals[5]), (int)eVals[5].size(),
        ptrI32(eKeys[6]), ptrF64(eVals[6]), (int)eVals[6].size(),
        ptrI32(eKeys[7]), ptrF64(eVals[7]), (int)eVals[7].size(),
        ptrI32(eKeys[8]), ptrF64(eVals[8]), (int)eVals[8].size(),
        ptrI32(eKeys[9]), ptrF64(eVals[9]), (int)eVals[9].size(),
        ptrI32(eKeys[10]), ptrF64(eVals[10]), (int)eVals[10].size(),
        ptrI32(pfKeys), ptrI32(pfVals), (int)pfVals.size(),
        ptrI32(dtKeys), ptrI32(dtVals), (int)dtVals.size(),
        ptrI32(dsKeys), ptrF64(dsVals), (int)dsVals.size(),
        ptrI32(eKeys[11]), ptrF64(eVals[11]), (int)eVals[11].size(),
        ptrI32(eKeys[12]), ptrF64(eVals[12]), (int)eVals[12].size(),
        ptrI32(eKeys[13]), ptrF64(eVals[13]), (int)eVals[13].size(),
        ptrI32(relKeys), ptrBool(relVals), (int)relKeys.size(),
        ptrI32(nmKeys), ptrF64(nmVals), (int)nmVals.size(),
        inclElem,
        ptrI32(diaKeys), ptrF64(diaVals), (int)diaVals.size(),
        ptrF64(springs), (int)(springs.size() / 3),
        numModes, lateral, lump,
        &freqOut, &nFreq, &modesOut, &mRows, &mCols,
        &mpOut, &mpRows, &mpCols);

    FILE *o = fopen(outPath, "wb");
    if (!o) { fprintf(stderr, "no se pudo escribir %s\n", outPath); return 2; }
    fprintf(o, "{\n");
    fprintf(o, "  \"frequencies\": [");
    for (int i = 0; i < nFreq; ++i) fprintf(o, "%s%s", i ? "," : "", jsonNumber(freqOut[i]).c_str());
    fprintf(o, "],\n  \"periods\": [");
    for (int i = 0; i < nFreq; ++i) fprintf(o, "%s%s", i ? "," : "", jsonNumber(1.0 / freqOut[i]).c_str());
    fprintf(o, "],\n  \"massParticipation\": [");
    for (int i = 0; i < mpRows; ++i) {
        fprintf(o, "%s[", i ? "," : "");
        for (int j = 0; j < mpCols; ++j) fprintf(o, "%s%s", j ? "," : "", jsonNumber(mpOut[i * mpCols + j]).c_str());
        fprintf(o, "]");
    }
    fprintf(o, "],\n  \"nodes\": [");
    for (int i = 0; i < numNodes; ++i) {
        fprintf(o, "%s[%s,%s,%s]", i ? "," : "",
                jsonNumber(nodesFlat[i*3+0]).c_str(),
                jsonNumber(nodesFlat[i*3+1]).c_str(),
                jsonNumber(nodesFlat[i*3+2]).c_str());
    }
    fprintf(o, "],\n  \"modeShapes\": [");
    for (int i = 0; i < mRows; ++i) {
        fprintf(o, "%s[", i ? "," : "");
        for (int j = 0; j < mCols; ++j) fprintf(o, "%s%s", j ? "," : "", jsonNumber(modesOut[i * mCols + j]).c_str());
        fprintf(o, "]");
    }
    fprintf(o, "]\n}\n");
    fclose(o);

    printf("%s: %d modos · %d nudos · flags lateral=%d lump=%d inclElem=%d nModos=%d\n",
           outPath, nFreq, numNodes, lateral, lump, inclElem, numModes);

    free(freqOut); free(modesOut); free(mpOut);
    return 0;
}
