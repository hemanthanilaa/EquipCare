// src/data/products_by_company.js
// Products grouped by company -> section
// Images reference your uploaded file path (your build will transform it)
const productsByCompany = {
  horiba: {
    hematology: [
      { id: "h1", name: "Microsemi CRP LC-767G", subtitle: "Discover cutting-edge performance and reliability with our flagship product.", tags: ["poct"], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "h2", name: "ABX Pentra XL 80", subtitle: "Hematology Analyzer", tags: ["tracking"], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "h3", name: "HELO 2.0", subtitle: "High Throughput Modular Hematology Platform with Advanced Automation", tags: ["tracking", "benchtop"], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "h4", name: "Microsemi CRP LC-667G", subtitle: "Hematology Analyzer", tags: ["poct"], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "h5", name: "Yumizen D20", subtitle: "Digital Cell Morphology System", tags: ["tracking"], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "h6", name: "Yumizen H2500", subtitle: "Hematology Analyzer", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "h7", name: "Yumizen H550E/H500E", subtitle: "Hematology and ESR Analyzer", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "h8", name: "Yumizen H500/H550", subtitle: "Hematology Analyzer", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "h9", name: "ABX Micros ES 60", subtitle: "Hematology Analyzer", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "h10", name: "Yumizen H60", subtitle: "Benchtop Hematology Analyzer", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "h11", name: "Yumizen H1500", subtitle: "Hematology Analyzer", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "h12", name: "Pentra XLR", subtitle: "Hematology Analyzer", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "h13", name: "RAL StainBox", subtitle: "Blood Slide Stainer", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "h14", name: "RAL Stainer", subtitle: "Blood Slide Stainer", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "h15", name: "Yumizen SPS", subtitle: "Slide Preparation System", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "h16", name: "Yumizen T6000", subtitle: "Yumizen T6000 Automated Conveyor", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "h17", name: "Yumizen P8000", subtitle: "Middleware & Expert Validation Station", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "h18", name: "CellaVision® DM9600", subtitle: "Digital Cell Morphology System", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "h19", name: "CellaVision® DM1200", subtitle: "Digital Cell Morphology System", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" }
    ],

    clinical_chemistry: [
      { id: "c1", name: "Yumizen C600", subtitle: "Automated Clinical Chemistry Analyzer", tags: ["floor-standing", "automated"], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "c2", name: "Yumizen C150", subtitle: "Automated Clinical Chemistry Analyzer", tags: ["benchtop", "automated"], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "c3", name: "Yumizen CA40", subtitle: "Semi-automated Clinical Chemistry Analyzer", tags: ["benchtop", "semi-automated"], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "c4", name: "Yumizen E60", subtitle: "Electrolyte Analyzer", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "c5", name: "Pentra C400", subtitle: "Clinical Chemistry Analyzer", tags: ["benchtop", "automated"], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "c6", name: "Yumizen CA60", subtitle: "Clinical Chemistry Analyzer", tags: ["benchtop", "semi-automated"], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" }
    ],

    hemostasis: [
      { id: "hs1", name: "Yumizen G200", subtitle: "Semi Automated Hemostasis Analyzer", tags: ["benchtop"], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "hs2", name: "Yumizen G405", subtitle: "Hemostasis Analyzer", tags: ["benchtop"], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "hs3", name: "Yumizen G800", subtitle: "Automatic benchtop hemostasis analyzer", tags: ["benchtop"], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "hs4", name: "Yumizen G400 DDi", subtitle: "Semi-automated Hemostasis Instrument", tags: ["semi-automated"], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" }
    ]
  },

  biomerieux: {
    hospital_laboratory: [
      { id: "bio1", name: "ARGENE® SOLUTION", subtitle: "Automation from extraction to Real-Time PCR assays supporting rapid detection of viral infections.", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "bio2", name: "BACT/ALERT® Solutions", subtitle: "Automated microbial detection for faster, reliable sepsis and bloodstream infection management.", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "bio3", name: "BIOFIRE® Solutions", subtitle: "Simple, fast syndromic testing delivering accurate diagnostic results in minutes.", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" }
    ],
    point_of_care: [],
    quality_safety: []
  },

  molbio: {
    truenat: [
      { id: "m1", name: "Truelab® Uno Dx", subtitle: "Compact, single-module real-time micro PCR analyzer.", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "m2", name: "Truelab® Duo", subtitle: "Dual-module PCR system allowing parallel testing.", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "m3", name: "Truelab® Quattro", subtitle: "High-throughput four-module real-time micro PCR platform.", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" }
    ],
    "truenat-assays": [],
    "prorad-atlas": [
      { id: "m4", name: "Atlas Ultraportable", subtitle: "Portable diagnostic platform for rapid molecular testing.", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "m5", name: "Atlas Ultraportable Plus", subtitle: "Enhanced portable analyzer with improved workflow capacity.", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" },
      { id: "m6", name: "Atlas Ultraportable Ultima", subtitle: "Next-generation ultraportable molecular testing system.", tags: [], image: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png" }
    ]
  },

  tulip: {
    "blood-banking": [],
    coagulation: [],
    serology: [],
    "rapid-tests": [],
    elisa: [],
    chemiluminescence: [],
    "fluorescence-ia": []
  }
};

export default productsByCompany;
