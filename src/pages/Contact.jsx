import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <main className="content contact-page">
      <h1>Contact Us</h1>

      <p className="contact-subtext">
        Get in touch or visit our location for product enquiries and service support.
      </p>

      <div className="contact-grid">

       
        <div className="contact-details">
          <h2>Reach Us</h2>

          <p><strong>Carewel Agency</strong></p>
        
          <p style={{ marginTop: "12px", color: "#475569" }}>
For product inquiries, service requests, or partnership opportunities, feel free to reach out to us. 
Our team is dedicated to providing prompt and reliable support for all 
laboratory equipment and maintenance needs, ensuring professional assistance whenever required.
</p>


          <div className="contact-meta">
            <p><strong>Phone:</strong> <a href="tel:+917904806425">+917904806425</a></p>
            <p><strong>Email:</strong> <a href="mailto:flost5048@gmail.com">flost5048@gmail.com</a></p>
            <p><strong>Hours:</strong> Mon–Sat (9:00 AM – 6:00 PM)</p>
          </div>

          
          <div className="contact-actions">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=CAREWEL+AGENCY"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn btn-primary"
            >
              Get Directions
            </a>

            <a href="tel:+917904806425" className="link-btn btn-outline">
              Call Now
            </a>

            <a
              href="mailto:flost5048@gmail.com"
              className="link-btn btn-outline"
            >
              Email Us
            </a>
          </div>
        </div>

       
        <div className="contact-map">
          <h2>Locate Us</h2>

          <div className="map-container">
            <iframe
              title="Carewel Agency Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1105.8274614258053!2d78.68161314339024!3d10.829390199897855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5bff27aebc9%3A0x2ab97795bf7350d8!2sCAREWEL%20AGENCY!5e0!3m2!1sen!2sin!4v1763175122684!5m2!1sen!2sin" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </main>
  );
}
