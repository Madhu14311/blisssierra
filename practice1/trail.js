// src/practice1/Trail.js
import React, { useEffect } from "react";
import "./trail.css"; // We'll create this CSS file for styles

const Trail = () => {
  useEffect(() => {
    // Cursor spotlight effect
    const spotlight = document.createElement("div");
    spotlight.className = "cursor-spotlight";
    document.body.appendChild(spotlight);

    document.addEventListener("mousemove", (e) => {
      spotlight.style.left = e.pageX + "px";
      spotlight.style.top = e.pageY + "px";
    });

    return () => {
      document.body.removeChild(spotlight);
    };
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="hero-header">
          <img src="/bslogo.png" className="logo" alt="BlissSierra Logo" />
          <h1>BlissSierra</h1>
        </div>
        <p>Securing Your Digital Horizon</p>
      </section>

      {/* NAV BLOCKS with GLASS */}
      <section className="nav-blocks">
        <a href="who-we-are2.html" className="block glass">
          <h2>Who We Are →</h2>
        </a>
        <a href="what-we-do2.html" className="block glass">
          <h2>What We Do →</h2>
        </a>
        <a href="services2.html" className="block glass">
          <h2>Services →</h2>
        </a>
        <a href="insights2.html" className="block glass">
          <h2>Insights →</h2>
        </a>
        <a href="career2.html" className="block glass">
          <h2>Careers →</h2>
        </a>
      </section>
    </div>
  );
};

export default Trail;
