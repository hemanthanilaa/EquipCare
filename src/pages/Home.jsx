import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import heroImage from "../assets/hero.png";

export default function Home() {
  return (
    <div>
   
      <section className="hero">
        <div className="hero-inner">
          
         
          <div className="hero-copy">
            <h1>
              Carewel Agency
              <span className="accent"> Reliable lab equipment & trusted service</span>
            </h1>

            <p className="lead">
              Carewel Agency delivers certified laboratory equipment, research-grade consumables, and trusted chemical supplies to institutions across healthcare, diagnostics, pharmaceutical, and academic sectors. Our team also provides end-to-end calibration, equipment maintenance, and onsite technical support to ensure consistent accuracy, compliance, and uninterrupted laboratory operations.
            </p>

            <div className="hero-ctas">
              <Link to="/products" className="btn btn-primary">
                Explore Products
              </Link>
              <Link to="/services" className="btn btn-outline">
                Request Service
              </Link>
            </div>

            <ul className="hero-features" aria-hidden>
              <li>
                <strong>Quality Brands</strong>
                <span>Carefully selected lab-grade equipment.</span>
              </li>
              <li>
                <strong>Fast Support</strong>
                <span>Timely onsite repairs and calibration.</span>
              </li>
              <li>
                <strong>Safe Chemicals</strong>
                <span>Properly labelled and handled reagents.</span>
              </li>
            </ul>
          </div>

          <div className="hero-visual" aria-hidden>
            <div className="visual-card">
              <img
                src={heroImage}
                alt="Laboratory equipment and medical storage"
                className="hero-img"
              />
            </div>
          </div>

        </div>
      </section>

      
    </div>
  );
}
