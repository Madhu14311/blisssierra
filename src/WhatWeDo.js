// src/WhatWeDo.js
import React from "react";


import {

  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} 

from "react-icons/fa";

import bslogo from "./bslogo.png";
import c1 from "./c1.jpg";
import c2 from "./c2.jpg";
import c3 from "./c3.jpg";
import c4 from "./c4.jpg";

const WhatWeDo = () => {

  return (
    <div className="what-we-do-page">
      {/* INLINE STYLES */}
      <style>{`

        body {

          margin: 0;
          font-family: Arial, sans-serif;
          background: #ffffff;
          color: #333;
          overflow-x: hidden;
        }

        @keyframes fadeIn {0% {opacity:0; transform:translateY(20px);} 100% {opacity:1; transform:translateY(0);}}
        @keyframes slideIn {0% {opacity:0; transform:translateX(-30px);} 100% {opacity:1; transform:translateX(0);}}
        @keyframes zoomIn {0% {opacity:0; transform:scale(0.9);} 100% {opacity:1; transform:scale(1);}}

        .header-hero {

          background: #022158;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 40px;
          flex-wrap: wrap;
          animation: slideIn 1.2s ease-in-out;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .header-left img {
          width: 60px;
          height: auto;
          border-radius: 30px;
          transition: transform .4s;
        }

        .header-left img:hover {
          transform: scale(1.1);
        }

        .header-left h1 {
          font-family: 'Montserrat', sans-serif;
          font-size: 28px;
          margin: 0;
        }

        .section {
          width: 90%;
          max-width: 1100px;
          margin: 50px auto;
          text-align: center;
          animation: fadeIn 1.3s ease-in-out;
        }

        .section h2 {
          font-size: 32px;
          color: #022158;
          margin-bottom: 15px;
        }

        .section p {
          font-size: 17px;
          line-height: 1.8;
          color: #444;
        }

        .services-list {
          margin-top: 25px;
          text-align: left;
          display: inline-block;
          animation: fadeIn 1.4s ease-in-out;
        }

        .services-list li {
          margin-bottom: 12px;
          font-size: 17px;
          color: #022158;
          font-weight: 600;
          transition: transform .3s, color .3s;
        }

        .services-list li:hover {
          transform: translateX(5px);
          color: #022158;
        }

        .approach {
          margin-top: 60px;
        }

        .approach h2 {
          text-align: center;
        }
        .clients-section {
          padding: 40px 0;
        }
        .clients-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          margin-top: 30px;
          animation: fadeIn 1.4s ease-in-out;
        }

        .client-card {
          background: #f8f8f8;
          padding: 20px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: transform .4s ease, box-shadow .4s ease;
          animation: zoomIn 1.3s ease-in-out;
        }

        .client-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .client-card img {
          width: 100%;
          height: 290px;
          object-fit: cover;
          border-radius: 8px;
          transition: transform .4s, filter .4s;
        }

        .client-card img:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }

        .client-card h3 {
          margin-top: 10px;
          color: #2b8a2b;
          font-size: 20px;
        }

        .client-card p {
          font-size: 15px;
          color: #555;
        }

        footer { background-color: #022158; color: #fff; padding: 40px 20px; font-family: Arial, sans-serif; 
        }
        .footer-container { display: flex; flex-wrap: wrap; max-width: 1200px; margin: 0 auto; 
        }
        .footer-col { flex: 1 1 0; min-width: 200px; padding: 10px; box-sizing: border-box; 
        }
        .footer-col h3 { margin-bottom: 15px; font-size: 22px; 
        }
        .footer-col p, .footer-col ul li { font-size: 16px; 
        }
        .footer-col ul { list-style: none; padding: 0; 
        }
        .footer-col ul li a { color: #fff; text-decoration: none; 
        }
        .footer-col ul li a:hover, .footer-col p a:hover { text-decoration: underline; 
        }
        .social-links { margin-top: 15px; }
        .social-links a { color: #fff; font-size: 18px; margin-right: 15px; text-decoration: none; transition: color 0.3s; }
        .social-links a:hover { color: #1da1f2; 
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 1024px) {
          .clients-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .header-hero {
            padding: 15px 20px;
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

          .header-left h1 {
            font-size: 24px;
          }

          .section h2 {
            font-size: 26px;
          }

          .section p, .services-list li {
            font-size: 16px;
          }

          .clients-row {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 480px) {
          .header-left img {
            width: 50px;
          }
          .header-left h1 {
            font-size: 20px;
          }
          .section {
            margin: 30px auto;
          }

          .clients-section {
            padding: 20px 0;
          }
          .client-card img {
            height: 400px;
          }

          footer {
            padding: 30px 15px;
          }
          .footer-col h3 {
            font-size: 18px;
          }
          .footer-col p, .footer-col ul li {
            font-size: 14px;
          }

          .social-links a {
            font-size: 16px;
            margin-right: 10px;
          }
        }

      `}</style>


      {/* HEADER */}
      <header className="header-hero">
        <div className="header-left">
          <img src={bslogo} alt="BlissSierra Logo" />
          <h1>BlissSierra</h1>

        </div>
      </header>


      {/* INTRO */}
      <section className="section">

        <h2>What We Do</h2>
        <p>
          At Bliss Sierra, we focus on delivering meaningful solutions that drive
          business growth, improve customer experiences, and strengthen brands
          from the inside out. Our expertise spans strategic planning, technology
          solutions, and creative development to ensure that every business we
          work with becomes more efficient, more visible, and more impactful in
          their market. We don’t just offer services—we build long-term
          partnerships centered on clarity, quality, and trust.
        </p>
        <ul className="services-list">

          <li>✔ Business Strategy & Consulting</li>
          <li>✔ Brand Identity & Communication</li>
          <li>✔ Web & Mobile App Development</li>
          <li>✔ UI/UX Design & Customer Experience</li>
          <li>✔ Digital Transformation Support</li>
          <li>✔ Cloud, Cybersecurity, & Backend Solutions</li>
        </ul>
      </section>

      {/* OUR APPROACH */}
      <section className="section approach">

        <h2>Our Approach</h2>
        <p>
          Every business is unique, and so is our approach. We analyze, understand, and design solutions tailored to your specific goals. Our process focuses
          on collaboration, transparency, and efficiency—ensuring every project delivers real value. We combine research-driven insights with creative
          thinking and modern technology to help businesses evolve confidently and sustainably.
        </p>
      </section>

      {/* CLIENTS */}
      <section className="section clients-section">

        <h2>Our Clients</h2>
        <div className="clients-row">
          <div className="client-card">
            <img src={c1} alt="Loan Era Client Logo" />
            <h3>Loan Era</h3>
            <p>
              We provided cybersecurity and web development support, helping Loan Era build secure online financial services.
            </p>
          </div>
          <div className="client-card">
            <img src={c3} alt="Digital Nexus Logo" />
            <h3>Digital Nexus</h3>
            <p>Delivered scalable web solutions and UI enhancements for better customer engagement.</p>
          </div>
          <div className="client-card">
            <img src={c2} alt="TechHive Logo" />
            <h3>TechHive</h3>
            <p>Assisted in frontend development and performance optimization across their platform.</p>
          </div>
          <div className="client-card">
            <img src={c4} alt="SmartBiz Logo" />
            <h3>SmartBiz</h3>
            <p>Developed secure backend modules and integrated cloud solutions to improve workflow.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-container">
          <div className="footer-col">

            <h3>BlissSierra</h3>
            <p>
              We are committed to delivering the best services for your
              business.
            </p>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>

              <li><a href="/who-we-are">Who We Are</a></li>
              <li><a href="/Services">Services</a></li>
              <li><a href="/insights">Insights</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-col">

            <h3>Contact Us</h3>
            <p>KSR Nest, Kakateeya Hills, Madhapur, Hyderabad-500081</p>
            <p>Email: blisssierra177@gmail.com</p>
            <p>Phone: +91-9848532222</p>

            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61584931498008"><FaFacebookF /></a>
              <a href="https://www.instagram.com/blisssierra1/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/feed/"><FaLinkedin/></a>
              <a href="https://wa.me/919848532222"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

      </footer>
    </div>

  );
};

export default WhatWeDo;


