import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    id: "s1",
    title: "Installation & Commissioning",
    short: "Professional installation of lab instruments and setup.",
    details:
      "On-site installation, calibration and functional checks to ensure your equipment performs to specification.",
    icon: "install"
  },
  {
    id: "s2",
    title: "Calibration",
    short: "Traceable calibration for balances, pH meters, pipettes and more.",
    details:
      "We provide calibration certificates and adjustments to keep results accurate and audit-ready.",
    icon: "calibrate"
  },
  {
    id: "s3",
    title: "Preventive Maintenance (PMC / AMC)",
    short: "Scheduled preventive maintenance contracts for uptime.",
    details:
      "Custom AMC plans, priority support, spare part management and periodic health checks.",
    icon: "maintenance"
  },
  {
    id: "s4",
    title: "Breakdown & Repair",
    short: "Quick onsite repair for instrument failures.",
    details:
      "Fast response time for critical breakdowns with genuine spare parts and cost estimates.",
    icon: "repair"
  },
  {
    id: "s5",
    title: "Validation & IQ/OQ/PQ",
    short: "Installation/Operational/Performance qualification support.",
    details:
      "Documentation and validation services for regulated environments and accreditation requirements.",
    icon: "validate"
  },
  {
    id: "s6",
    title: "Training & SOPs",
    short: "User training and SOP creation for safe operation.",
    details:
      "Hands-on user training, maintenance guides and standard operating procedures tailored to your lab.",
    icon: "training"
  }
];

function Icon({ name }) {
  // small inline SVG icons — simple, neutral style
  switch (name) {
    case "install":
      return (
        <svg viewBox="0 0 24 24" className="svc-icon" aria-hidden>
          <path d="M3 13h2v6h14v-6h2v8H3v-8zM9 3h6v4H9zM5 9h14v2H5z" />
        </svg>
      );
    case "calibrate":
      return (
        <svg viewBox="0 0 24 24" className="svc-icon" aria-hidden>
          <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm1 5h-2v6l5.2 3.1 1-1.6-4.2-2.5V8z"/>
        </svg>
      );
    case "maintenance":
      return (
        <svg viewBox="0 0 24 24" className="svc-icon" aria-hidden>
          <path d="M21 13v6h-6l-2-2H8l-2 2H2v-6l9-9 10 9z"/>
        </svg>
      );
    case "repair":
      return (
        <svg viewBox="0 0 24 24" className="svc-icon" aria-hidden>
          <path d="M20.7 5.3l-2-2a1 1 0 00-1.4 0l-2.2 2.2 3.4 3.4 2.2-2.2a1 1 0 000-1.4zM3 17.3V21h3.7l9.9-9.9-3.7-3.7L3 17.3z"/>
        </svg>
      );
    case "validate":
      return (
        <svg viewBox="0 0 24 24" className="svc-icon" aria-hidden>
          <path d="M9 12l2 2 4-4 1.4 1.4L11 17.8 7.6 14.4 9 12zM12 2a10 10 0 1010 10A10 10 0 0012 2z"/>
        </svg>
      );
    case "training":
      return (
        <svg viewBox="0 0 24 24" className="svc-icon" aria-hidden>
          <path d="M4 6h16v2H4V6zm0 4h10v2H4v-2zm0 4h16v6H4v-6z"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function Services() {
  return (
    <main className="content services-page">
      <header className="services-header">
        <div>
          <h1>Services</h1>
          <p className="muted">
            Comprehensive services for lab equipment installation, calibration, maintenance and support.
          </p>
        </div>

        <div className="services-hero-ctas">
          <Link to="/contact" className="btn btn-primary">Book Service</Link>
          <a
            className="btn btn-outline"
            href="mailto:Carewelagency@gmail.com?subject=Service%20Enquiry"
          >
            Quick Enquiry
          </a>
        </div>
      </header>

      <section className="services-grid">
        {services.map(s => (
          <article className="svc-card" key={s.id}>
            <div className="svc-top">
              <div className="svc-icon-wrap"><Icon name={s.icon} /></div>
              <h3 className="svc-title">{s.title}</h3>
            </div>

            <p className="svc-short">{s.short}</p>
            <p className="svc-details">{s.details}</p>

            <div className="svc-actions">
              <Link to="/contact" className="link-btn btn-primary">Book Service</Link>
              <a
                className="link-btn btn-outline"
                href={`mailto:Carewelagency@gmail.com?subject=${encodeURIComponent(s.title + " Enquiry")}`}
              >
                Enquire
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
