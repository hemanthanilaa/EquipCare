// src/pages/CompanySection.jsx
import React from "react";
import { useParams } from "react-router-dom";
import companies from "../data/companies";

export default function CompanySection() {
  const { company, section } = useParams();
  const comp = companies.find((c) => c.slug === company);

  // friendly title mapping (keeps URL slugs but shows readable text)
  const titleMap = {
    "hospital-laboratory": "Hospital & Laboratory",
    "point-of-care": "Point of Care",
    "quality-safety": "Product Quality & Safety"
  };

  const title = titleMap[section] || section;

  return (
    <div className="company-section-content">
      <h2 className="section-title">{title}</h2>
      <p className="section-description">
        Products for <strong>{comp ? comp.name : company}</strong> under <em>{title}</em>.
      </p>

      <p className="section-placeholder">
        (Placeholder) — you can provide the product list for <strong>{comp ? comp.name : company}</strong> in this section later.
      </p>
    </div>
  );
}