// src/pages/CompanyProducts.jsx
import React, { useState, useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import companies from "../data/companies";
import productsByCompany from "../data/products_by_company";
import ProductCard from "../components/ProductCard";
import "./Products.css";

export default function CompanyProducts() {
  const { company } = useParams();
  const navigate = useNavigate();
  const comp = companies.find((c) => c.slug === company);

  if (!comp) {
    return (
      <main className="products-page">
        <h1>Company not found</h1>
        <p>The requested company was not found. Go back to <Link to="/products">Products</Link>.</p>
      </main>
    );
  }

  const sections = Array.isArray(comp.sections) && comp.sections.length > 0
    ? comp.sections
    : [{ id: "all", title: "All Products" }];

  const [selected, setSelected] = useState(sections[0].id);

  // products for this company & selected section
  const productsForComp = productsByCompany[company] || {};
  const normalize = (id) => id.replace(/-/g, "_");
  const rawProducts = productsForComp[normalize(selected)] || [];

  // Hematology filters (tracking / benchtop / poct)
  const [filterTracking, setFilterTracking] = useState(false);
  const [filterBenchtop, setFilterBenchtop] = useState(false);
  const [filterPOCT, setFilterPOCT] = useState(false);

  // Clinical-chemistry filters (floor-standing / benchtop / automated / semi-automated)
  const [filterFloor, setFilterFloor] = useState(false);
  const [filterCCBenchtop, setFilterCCBenchtop] = useState(false);
  const [filterAutomated, setFilterAutomated] = useState(false);
  const [filterSemiAuto, setFilterSemiAuto] = useState(false);

  // Hemostasis filters (benchtop, semi-automated)
  const [filterHemBench, setFilterHemBench] = useState(false);
  const [filterHemSemi, setFilterHemSemi] = useState(false);

  // Reset filters helper
  const clearAllFilters = () => {
    setFilterTracking(false);
    setFilterBenchtop(false);
    setFilterPOCT(false);
    setFilterFloor(false);
    setFilterCCBenchtop(false);
    setFilterAutomated(false);
    setFilterSemiAuto(false);
    setFilterHemBench(false);
    setFilterHemSemi(false);
  };

  // reset filters when section changes
  const onSelectSection = (id) => {
    setSelected(id);
    clearAllFilters();
  };

  // determine which filter UI to show
  const showHematologyFilters = (company === "horiba" && selected === "hematology" && rawProducts.length > 0);
  const showClinicalFilters = (company === "horiba" && selected === "clinical_chemistry" && rawProducts.length > 0) || (company === "horiba" && selected === "clinical-chemistry" && rawProducts.length > 0);
  const showHemostasisFilters = (company === "horiba" && selected === "hemostasis" && rawProducts.length > 0);

  // compute filtered products (OR logic across selected checkboxes)
  const filteredProducts = useMemo(() => {
    if (!rawProducts || rawProducts.length === 0) return [];

    // if no filters selected -> show all
    const hematologyActive = filterTracking || filterBenchtop || filterPOCT;
    const clinicalActive = filterFloor || filterCCBenchtop || filterAutomated || filterSemiAuto;
    const hemoActive = filterHemBench || filterHemSemi;

    if (!hematologyActive && !clinicalActive && !hemoActive) return rawProducts;

    return rawProducts.filter((p) => {
      const tags = Array.isArray(p.tags) ? p.tags : [];

      // Hematology filters
      if (showHematologyFilters) {
        if (filterTracking && tags.includes("tracking")) return true;
        if (filterBenchtop && tags.includes("benchtop")) return true;
        if (filterPOCT && tags.includes("poct")) return true;
        return false;
      }

      // Clinical Chemistry filters
      if (showClinicalFilters) {
        if (filterFloor && tags.includes("floor-standing")) return true;
        if (filterCCBenchtop && tags.includes("benchtop")) return true;
        if (filterAutomated && tags.includes("automated")) return true;
        if (filterSemiAuto && tags.includes("semi-automated")) return true;
        return false;
      }

      // Hemostasis filters
      if (showHemostasisFilters) {
        if (filterHemBench && tags.includes("benchtop")) return true;
        if (filterHemSemi && tags.includes("semi-automated")) return true;
        return false;
      }

      // default fallback
      return true;
    });
  }, [
    rawProducts,
    filterTracking, filterBenchtop, filterPOCT,
    filterFloor, filterCCBenchtop, filterAutomated, filterSemiAuto,
    filterHemBench, filterHemSemi,
    showHematologyFilters, showClinicalFilters, showHemostasisFilters
  ]);

  // Fallback card in case ProductCard isn't available
  function FallbackCard({ product }) {
    return (
      <article className="pcard">
        <div className="pcard-media">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="pcard-body">
          <h3 className="pcard-title">{product.name}</h3>
          <div className="pcard-desc">{product.subtitle}</div>
          <div className="pcard-footer" style={{ marginTop: 10 }}>
            <a className="btn-outline small" href={`mailto:carewellagency@example.com?subject=${encodeURIComponent(product.name + " Enquiry")}`}>Learn More</a>
          </div>
        </div>
      </article>
    );
  }

  const productsToShow = (filteredProducts.length === 0) ? rawProducts : filteredProducts;

  return (
    <main className="products-page company-page">
      <header className="company-header">
        <div className="company-header-inner">
          <img src={comp.logo} alt={`${comp.name} logo`} className="company-header-logo" />
          <div>
            <h1>{comp.name}</h1>
            <p className="muted">Select a category on the left to view products for {comp.name}.</p>
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <button className="btn btn-outline" onClick={() => navigate("/products")}>Back to Companies</button>
        </div>
      </header>

      <div className="company-body">
        {/* Sidebar */}
        <aside className="company-sidebar" aria-label={`${comp.name} categories`}>
          <nav>
            <ul className="company-sections">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    className={`section-btn ${selected === s.id ? "active" : ""}`}
                    onClick={() => onSelectSection(s.id)}
                    aria-pressed={selected === s.id}
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Right side */}
        <section className="company-main" aria-live="polite">
          {/* Title + optional filter controls */}
          <div className="section-header">
            <div>
              <h2>{sections.find(s => s.id === selected)?.title || "Products"}</h2>
              <p className="muted">Showing products for {comp.name} › {sections.find(s => s.id === selected)?.title}</p>
            </div>

            <div className="filter-controls">
              {/* Hematology filters */}
              {showHematologyFilters && (
                <>
                  <label className="filter-pill">
                    <input type="checkbox" checked={filterTracking} onChange={(e) => setFilterTracking(e.target.checked)} />
                    <span>Tracking</span>
                  </label>
                  <label className="filter-pill">
                    <input type="checkbox" checked={filterBenchtop} onChange={(e) => setFilterBenchtop(e.target.checked)} />
                    <span>Benchtop</span>
                  </label>
                  <label className="filter-pill">
                    <input type="checkbox" checked={filterPOCT} onChange={(e) => setFilterPOCT(e.target.checked)} />
                    <span>POCT</span>
                  </label>
                  <button className="link-btn btn-outline" onClick={clearAllFilters}>Clear Filters</button>
                </>
              )}

              {/* Clinical-chemistry filters */}
              {showClinicalFilters && (
                <>
                  <label className="filter-pill">
                    <input type="checkbox" checked={filterFloor} onChange={(e) => setFilterFloor(e.target.checked)} />
                    <span>Floor standing</span>
                  </label>
                  <label className="filter-pill">
                    <input type="checkbox" checked={filterCCBenchtop} onChange={(e) => setFilterCCBenchtop(e.target.checked)} />
                    <span>Benchtop</span>
                  </label>
                  <label className="filter-pill">
                    <input type="checkbox" checked={filterAutomated} onChange={(e) => setFilterAutomated(e.target.checked)} />
                    <span>Automated</span>
                  </label>
                  <label className="filter-pill">
                    <input type="checkbox" checked={filterSemiAuto} onChange={(e) => setFilterSemiAuto(e.target.checked)} />
                    <span>Semi-automated</span>
                  </label>
                  <button className="link-btn btn-outline" onClick={clearAllFilters}>Clear Filters</button>
                </>
              )}

              {/* Hemostasis filters */}
              {showHemostasisFilters && (
                <>
                  <label className="filter-pill">
                    <input type="checkbox" checked={filterHemBench} onChange={(e) => setFilterHemBench(e.target.checked)} />
                    <span>Bench top</span>
                  </label>
                  <label className="filter-pill">
                    <input type="checkbox" checked={filterHemSemi} onChange={(e) => setFilterHemSemi(e.target.checked)} />
                    <span>Semi-automated</span>
                  </label>
                  <button className="link-btn btn-outline" onClick={clearAllFilters}>Clear Filters</button>
                </>
              )}
            </div>
          </div>

          {/* Active filter chips */}
          <div className="active-filters">
            {filterTracking && <span className="active-chip">Tracking</span>}
            {filterBenchtop && <span className="active-chip">Benchtop</span>}
            {filterPOCT && <span className="active-chip">POCT</span>}
            {filterFloor && <span className="active-chip">Floor standing</span>}
            {filterCCBenchtop && <span className="active-chip">Benchtop</span>}
            {filterAutomated && <span className="active-chip">Automated</span>}
            {filterSemiAuto && <span className="active-chip">Semi-automated</span>}
            {filterHemBench && <span className="active-chip">Bench top</span>}
            {filterHemSemi && <span className="active-chip">Semi-automated</span>}
          </div>

          {/* Product grid or placeholder */}
          {productsToShow && productsToShow.length > 0 ? (
            <div className="products-grid company-products-grid">
              {productsToShow.map((p) => (
                <div key={p.id}>
                  {ProductCard ? <ProductCard product={p} /> : <FallbackCard product={p} />}
                </div>
              ))}
            </div>
          ) : (
            <div className="no-products-message">
              <p>No products match the selected filters. Try clearing filters.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}