// src/data/products.js

import centrifugeImg from "../assets/products/centrifuge.jpeg";
import balanceImg from "../assets/products/balance.jpeg";
import glovesImg from "../assets/products/gloves.jpeg";
import phBufferImg from "../assets/products/ph-buffer.jpeg";
import micropipetteImg from "../assets/products/micropipette.jpeg";
import incubatorImg from "../assets/products/incubator.jpeg";

const products = [
  {
    id: "p1",
    name: "Lab Centrifuge 3000",
    category: "Equipment",
    desc: "Bench-top centrifuge for routine lab sample separation.",
    image: centrifugeImg
  },
  {
    id: "p2",
    name: "Analytical Balance AB-200",
    category: "Equipment",
    desc: "High precision analytical balance, 0.01mg readability.",
    image: balanceImg
  },
  {
    id: "p3",
    name: "Nitrile Gloves (Box of 100)",
    category: "Supplies",
    desc: "Powder-free nitrile gloves for safe handling.",
    image: glovesImg
  },
  {
    id: "p4",
    name: "pH Buffer Solution (500 mL)",
    category: "Chemicals",
    desc: "Certified buffer solution for calibration.",
    image: phBufferImg
  },
  {
    id: "p5",
    name: "Micropipette Set",
    category: "Supplies",
    desc: "Variable volume micropipettes with calibration certificate.",
    image: micropipetteImg
  },
  {
    id: "p6",
    name: "CO₂ Incubator",
    category: "Equipment",
    desc: "Cell culture CO₂ incubator with humidity control.",
    image: incubatorImg
  }
];

export default products;
