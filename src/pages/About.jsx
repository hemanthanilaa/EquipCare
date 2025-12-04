import React from "react";
import "./About.css";

export default function About() {
  return (
    <main className="about-page">
      <h1>About Carewel Agency</h1>

      <p className="about-text">
        Carewel Agency is a trusted supplier of laboratory equipment, medical
        instruments, consumables, and certified lab chemicals. Based in Trichy,
        we support hospitals, diagnostic centers, research labs, and educational
        institutions with reliable, high-quality scientific products.
      </p>

      <h2>Our Mission</h2>
      <p className="about-text">
        To deliver dependable lab solutions, timely service, and quality-assured
        chemicals that help laboratories operate safely, efficiently, and
        accurately.
      </p>

      <h2>What We Offer</h2>
      <ul className="about-list">
        <li>Laboratory equipment (Basic & advanced)</li>
        <li>Medical & diagnostic instruments</li>
        <li>Lab consumables & glassware</li>
        <li>High-purity lab chemicals</li>
        <li>Equipment installation & calibration</li>
        <li>Preventive and breakdown maintenance</li>
      </ul>

      <h2>Why Choose Us?</h2>
      <ul className="about-list">
        <li>Reliable brands and certified products</li>
        <li>Fast delivery & support</li>
        <li>Competitive pricing</li>
      </ul>
    </main>
  );
}