// src/components/ProductCard.jsx
import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { name, category, price, desc, image } = product;

  // mailto link for enquiries (replace email later)
  const mailto = `mailto:carewellagency@example.com?subject=Product%20Enquiry%20-%20${encodeURIComponent(
    name
  )}&body=Hello%2C%0AI%20am%20interested%20in%20${encodeURIComponent(name)}.%20Please%20share%20more%20details.`;

  return (
    <article className="pcard">
      <div className="pcard-media">
        <img src={image} alt={name} />
      </div>

      <div className="pcard-body">
        <div className="pcard-top">
          <h3 className="pcard-title">{name}</h3>
          <span className="pcard-category">{category}</span>
        </div>

        <p className="pcard-desc">{desc}</p>

        <div className="pcard-footer">
          <div className="pcard-price">{price}</div>
          <div className="pcard-actions">
            <a className="btn-outline small" href={mailto}>Enquire</a>
          </div>
        </div>
      </div>
    </article>
  );
}
