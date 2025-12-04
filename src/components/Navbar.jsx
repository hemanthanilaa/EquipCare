// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // keep this import if you use the CSS file below

function NavLink({ to, children, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={isActive ? "nav-item active" : "nav-item"}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const containerRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => setOpen(false), [location.pathname]);

  // close on Escape key
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // close when clicking outside the nav-links panel (useful on mobile)
  useEffect(() => {
    function onDocClick(e) {
      if (!containerRef.current) return;
      // if menu is open and the click target is outside the container => close
      if (open && !containerRef.current.contains(e.target) && !btnRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  return (
    <nav className="app-nav" role="navigation" ref={containerRef}>
      <div className="container">
        <div className="brand">
          <Link to="/" className="title">Carewel Agency</Link>
          <span className="tag">Lab Equipment · Supplies · Chemicals</span>
        </div>

        <div className={`nav-links ${open ? "open" : ""}`} id="main-nav" aria-hidden={!open && window.innerWidth < 860}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="mobile-area">
          <button
            ref={btnRef}
            className={`mobile-btn ${open ? "open" : ""}`}
            onClick={() => setOpen(s => !s)}
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="burger" aria-hidden>
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
