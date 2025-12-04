// src/data/companies.js
const companies = [
  {
    id: "c1",
    name: "Horiba",
    slug: "horiba",
    logo: "/src/assets/companies/horiba.png",
    sections: [
      { id: "hematology", title: "Hematology" },
      { id: "clinical-chemistry", title: "Clinical Chemistry" },
      { id: "hemostasis", title: "Hemostasis" }
    ]
  },
  {
    id: "c2",
    name: "bioMérieux",
    slug: "biomerieux",
    logo: "/mnt/data/84c0938e-828c-4a73-adc8-1fa380c899bb.png",
    sections: [
      { id: "hospital-laboratory", title: "Hospital & Laboratory" },
      { id: "point-of-care", title: "Point of Care" },
      { id: "quality-safety", title: "Product Quality & Safety" }
    ]
  },
  {
    id: "c3",
    name: "Molbio",
    slug: "molbio", // <-- IMPORTANT: slug must be "molbio"
    logo: "/src/assets/companies/molibio.png",
    sections: [
      { id: "truenat", title: "Truenat" },
      { id: "truenat-assays", title: "Truenat Assays" },
      { id: "prorad-atlas", title: "ProRad Atlas Ultraportable" }
    ]
  },
  {
    id: "c4",
    name: "Tulip",
    slug: "tulip",
    logo: "/src/assets/companies/tulip.png",
    sections: [
      { id: "blood-banking", title: "Blood Banking" },
      { id: "coagulation", title: "Coagulation" },
      { id: "serology", title: "Serology" },
      { id: "rapid-tests", title: "Rapid Tests" },
      { id: "elisa", title: "ELISA" },
      { id: "chemiluminescence", title: "Chemiluminescence" },
      { id: "fluorescence-ia", title: "Fluorescence Immunoassays" }
    ]
  }
];

export default companies;
