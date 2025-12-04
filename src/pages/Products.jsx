// src/pages/Products.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import companies from "../data/companies";
import "./Products.css";

export default function Products() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return companies.filter(c =>
      c.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <main className="products-page">
      <header className="products-header">
        <div>
          <h1>Products by Company</h1>
          <p className="muted">Select a manufacturer to view their products.</p>
        </div>

        <div className="products-controls">
          <input
            className="search"
            type="search"
            placeholder="Search company..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </header>

      <section className="companies-grid">
        {filtered.map((comp) => (
          <Link
            key={comp.id}
            to={`/products/${comp.slug}`}
            className="company-card"
            title={`View products from ${comp.name}`}
          >
            <div className="company-logo-wrap">
              <img src={comp.logo} alt={`${comp.name} logo`} className="company-logo" />
            </div>

            <div className="company-info">
              <div className="company-name">{comp.name}</div>
              <div className="company-sub">View products</div>
            </div>
          </Link>
        ))}

        {filtered.length === 0 && (
          <div className="empty">No companies found.</div>
        )}
      </section>
    </main>
  );
}