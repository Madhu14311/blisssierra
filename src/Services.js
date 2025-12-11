import React, { useEffect } from "react";
import {

  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} 
from "react-icons/fa";

// IMAGE IMPORTS

import bslogo from "./bslogo.png";
import csimg from "./csimg.jpg";
import dsimg from "./dsimg.jpg";
import feimg from "./feimg.jpg";
import image3 from "./image3.jpg";

const WhatWeDo = () => {
  useEffect(() => {

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      const content = section.querySelector(".section-content");
      const leftImg = section.querySelector(".section-image-left");
      const rightImg = section.querySelector(".section-image-right");

      content?.classList.add("visible");
      leftImg?.classList.add("visible");
      rightImg?.classList.add("visible");
    });

  }, []);

  return (
    <div>

    <style>{`
/* RESET */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
  background: #f3f4f6;
  color: #111827;
}

a { text-decoration: none; color: inherit; 
}

/* HEADER + HERO COMBINED */
.header-hero {
  background-color: #022158;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  flex-wrap: wrap;
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
}

.header-left h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 28px;
  margin: 0;
}

.header-left h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  text-align: center;
  margin-left: 220px;
}

/* WHAT WE DO SECTIONS */
.section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 60px auto;
  gap: 20px;
  flex-wrap: wrap;
  padding: 0 20px;
}


.section-content {
  flex: 1;
  opacity: 0;
  transition: opacity 1s ease;
}

.section-content h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 28px;
  color: #022158;
  margin-bottom: 15px;
}


.section-content p {
  font-size: 18px;
  line-height: 1.8;
  color: #333;
}
  

.section-image-left,
.section-image-right {
  flex: 1;
  max-width: 450px;
  opacity: 0;
  transition: transform 1s ease, opacity 1s ease;
}

.section-image-left img,
.section-image-right img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.5s ease;
}

.section-image-left img:hover,
.section-image-right img:hover {
  transform: scale(1.05);
}

/* Slide Animations */
.section-image-left { transform: translateX(-100%); }
.section-image-right { transform: translateX(100%); }
.section-content.visible,
.section-image-left.visible,
.section-image-right.visible {
  transform: translateX(0);
  opacity: 1;
}

/* FOOTER */
footer {
  background-color: #022158;
  color: #fff;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-col {
  flex: 1 1 0;
  min-width: 200px;
  padding: 10px;
  box-sizing: border-box;
}

.footer-col h3 {
  margin-bottom: 15px;
  font-size: 22px;
}

.footer-col p {
  list-style: none;
}


.footer-col ul {
  list-style: none;
  padding: 0px;
}

.footer-col ul li {
  margin-bottom: 10px;
  font-size: 16px;
}

.footer-col ul li a {
  color: #fff;
}

.social-links a {
  color: #fff;
  font-size: 18px;
  margin-right: 15px;
  transition: color 0.3s;
  padding: 10px;
}

.social-links a:hover {
  color: #1da1f2;
}
      `}</style>

      {/* HEADER */}
      <header className="header-hero">
        <div className="header-left">

          <img src={bslogo} alt="BlissSierra Logo" />
          <h1>BlissSierra</h1>
          <h2>Our Services</h2>
        </div>
      </header>


      {/* SECTION 1 */}
      <section className="section">
        <div className="section-content">
          <h3>Cybersecurity</h3>
        <p>BlissSierra specializes in delivering advanced cybersecurity solutions designed to protect businesses from modern digital threats. Our team works with cutting-edge technologies such as threat intelligence, vulnerability assessment, 
          penetration testing, encryption protocols, cloud security, and security automation.
          We help organizations identify security risks before attackers do, implement strong defensive systems.
        </p>
        </div>
        <div className="section-image-left">
          <img src={csimg} alt="Cybersecurity" />
        </div>

      </section>

      {/* SECTION 2 */}
      <section className="section">

        <div className="section-image-right">
          <img src={dsimg} alt="Web Development" />
        </div>

        <div className="section-content">
          <h3>Web Development</h3>
        <p>Our team builds fast, responsive, and scalable web applications using modern technologies, ensuring high performance, seamless user experience, and tailored solutions for businesses of all sizes.
          Our expertise spans front-end and back-end development, ensuring seamless user experiences and robust functionality. We build e-commerce platforms, content management systems (CMS), and 
          interactive web portals that are fast, secure, and optimized for search engines
        </p>
        </div>

      </section>

      {/* SECTION 3 */}
      <section className="section">
        <div className="section-content">
          <h3>Frontend Development</h3>
        <p>Using HTML, CSS, and JavaScript, we craft beautiful, interactive, and accessible interfaces that engage users and bring designs to life with smooth animations and responsive layouts.
          we ensure that every website and application delivers a seamless user experience across all devices.
        </p>
        </div>
        <div className="section-image-left">
          <img src={feimg} alt="Frontend Development" />
        </div>

      </section>


      {/* SECTION 4 */}
      <section className="section">
        <div className="section-image-right">
          <img src={image3} alt="Programming" />
        </div>
        <div className="section-content">
          <h3>Programming & JavaScript</h3>
        <p>We leverage advanced programming techniques and JavaScript frameworks to create dynamic, interactive web experiences, automate processes, 
          and build robust digital solutions tailored to client needs. At BlissSierra, our programming expertise enables us to develop robust, efficient, and scalable applications
        </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-container">
          <div className="footer-col">
            <h3>BlissSierra</h3>
            <p>
              We are committed to delivering the best services for your business.
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
