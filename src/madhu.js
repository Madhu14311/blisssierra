import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./index.css";

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

/* ---------- IMAGES ---------- */
import bslogo from "./bslogo.png";
import img1 from "./img1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import csimg from "./csimg.jpg";
import dsimg from "./dsimg.jpg";
import feimg from "./feimg.jpg";
/* ---------------------------- */

function BlissSierra() {
  const [activeBlock, setActiveBlock] = useState(null);
  const [zoomSrc, setZoomSrc] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  // Contact form state
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  // Contact form handlers
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContact((s) => ({ ...s, [name]: value }));
  };

  const handleSubmitContact = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contact", contact);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      setContact({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Error sending message. Check console for details.");
    }
  };

  const handleBlockClick = (idx) => setActiveBlock(idx);
  const handleZoomClick = (src) => setZoomSrc(src);
  const closeZoom = () => setZoomSrc(null);

  // Load fonts and FontAwesome
  useEffect(() => {
    const g = document.createElement("link");
    g.rel = "stylesheet";
    g.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto&display=swap";
    document.head.appendChild(g);

    const fa = document.createElement("link");
    fa.rel = "stylesheet";
    fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(fa);

    return () => {
      if (g && g.parentNode) document.head.removeChild(g);
      if (fa && fa.parentNode) document.head.removeChild(fa);
    };
  }, []);

  // Scroll reveal
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".section"));
    const aboutContent = document.querySelector(".about-content");

    function revealOnScroll() {
      const windowHeight = window.innerHeight;

      if (aboutContent && aboutContent.getBoundingClientRect().top < windowHeight - 100) {
        aboutContent.classList.add("visible");
      }

      sections.forEach((section) => {
        const content = section.querySelector(".section-content");
        const leftImg = section.querySelector(".section-image-left");
        const rightImg = section.querySelector(".section-image-right");
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
          if (content) content.classList.add("visible");
          if (leftImg) leftImg.classList.add("visible");
          if (rightImg) rightImg.classList.add("visible");
        }
      });
    }

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);
    revealOnScroll();

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      window.removeEventListener("load", revealOnScroll);
    };
  }, []);

  // Close zoom on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeZoom();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="page-root">
      {/* HERO */}
      <section className="hero">
        <div className="hero-header">
          <img src={bslogo} className="logo" alt="BlissSierra Logo" />
          <h1>BlissSierra</h1>
        </div>
        <p>Securing Your Digital Horizon</p>
      </section>

      {/* NAV BLOCKS */}
      <section className="nav-blocks">
        {[
          { title: "Who We Are →", path: "/who-we-are" },
          { title: "What We Do →", path: "/what-we-do" },
          { title: "Services →", path: "/Services" },
          { title: "Insights →", path: "/Insights" },
          { title: "Careers →", path: "/Careers" },
        ].map((b, i) => (
          <Link
            key={i}
            to={b.path}
            className={`block glass ${activeBlock === i ? "active" : ""}`}
            onClick={() => handleBlockClick(i)}
          >
            <h2>{b.title}</h2>
          </Link>
        ))}
      </section>

      {/* ABOUT */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src={img1} alt="About BlissSierra" onClick={() => handleZoomClick(img1)} />
          </div>
          <div className="about-content">
            <h2>About BlissSierra</h2>
            <p>
              BlissSierra is a forward-thinking technology company dedicated to securing digital ecosystems and building innovative software
              solutions. We combine rigorous security practices with modern software engineering to deliver products that are both resilient
              and user-friendly.
            </p>
            <p>
              Our mission is to empower businesses with secure, efficient, and scalable digital tools. We specialize in cybersecurity, web
              development, cloud-native architectures, and bespoke software solutions that enable organizations to stay ahead in an evolving
              digital landscape.
            </p>
            <p>
              We strongly believe in innovation, integrity, and collaboration. Every project is executed with precision, care, and a focus on
              long-term client success — from initial discovery and architecture to testing, deployment, and ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE ZOOM */}
      {zoomSrc && (
        <div className="zoom-overlay" onClick={closeZoom}>
          <div className="zoom-box" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={closeZoom}>✕</button>
            <img src={zoomSrc} alt="Zoom" style={{ maxWidth: "100%", maxHeight: "80vh" }} />
          </div>
        </div>
      )}

      {/* VALUES */}
      <section className="values-cards">
        <div className="value-card">
          <h3>Integrity</h3>
          <p>Upholding honesty, transparency, and ethical behavior in every action.</p>
        </div>
        <div className="value-card">
          <h3>Innovation</h3>
          <p>Continuously embracing new ideas and technologies to deliver cutting-edge solutions.</p>
        </div>
        <div className="value-card">
          <h3>Collaboration</h3>
          <p>Building strong relationships internally and externally to achieve mutual growth.</p>
        </div>
        <div className="value-card">
          <h3>Sustainability</h3>
          <p>Committing to environmentally responsible practices and long-term social impact.</p>
        </div>
      </section>

      {/* LEADERSHIP / VISION */}
      <section className="section">
        <div className="section-content">
          <h3>Leadership, Vision & Future Goals</h3>
          <p>
            BlissSierra is led by a team of seasoned professionals with deep experience across cybersecurity, software engineering, and
            cloud operations. Our leadership combines strategic thinking with hands-on technical expertise to guide projects from concept to
            scale.
          </p>
          <p>
            Our vision is to create a secure and intelligent digital world where businesses can focus on growth while technology handles the
            heavy lifting. We are investing in automation, AI-assisted threat detection, and developer-friendly security tooling to make that
            vision real.
          </p>
          <p>
            Over the coming years we plan to extend our services globally, partner with industry leaders, and continue innovating in security,
            observability, and cloud-native application development.
          </p>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="why-work">
        <div className="why-container">
          <div className="why-text">
            <h2>Why Work With Us</h2>
            <p>
              At BlissSierra, we foster an environment that encourages experimentation, learning, and professional growth. Our teams use
              modern tech stacks and work on real problems that impact customers around the world.
            </p>
            <p>
              Employees are encouraged to learn continuously, explore new technologies, and contribute to a positive work culture that values
              creativity and excellence. We provide mentorship, hands-on experience, and opportunities to grow into leadership roles.
            </p>
          </div>
          <div className="why-image">
            <img src={image2} alt="Work With Us" />
          </div>
        </div>
      </section>

      {/* WHAT WE DO (Individual sections per service) */}
      <section className="section">
        <div className="section-content">
          <h2>What We Do</h2>
        </div>

        {/* Cybersecurity */}
        <div className="section">
          <div className="section-image-left">
            <img src={csimg} alt="Cybersecurity" />
          </div>
          <div className="section-content">
            <h3>Cybersecurity</h3>
            <p>
              BlissSierra delivers advanced cybersecurity solutions to protect businesses from modern digital threats. Our services include
              threat intelligence, penetration testing, secure architecture reviews, and incident response. We implement automated security
              measures to reduce risk and operational overhead.
            </p>
          </div>
        </div>

        {/* Web Development */}
        <div className="section">
          <div className="section-image-right">
            <img src={dsimg} alt="Web Development" />
          </div>
          <div className="section-content">
            <h3>Web Development</h3>
            <p>
              Our web development team builds fast, responsive, and scalable applications using modern frameworks. We create e-commerce
              platforms, CMS solutions, and custom portals optimized for performance, accessibility, and SEO.
            </p>
          </div>
        </div>

        {/* Frontend Development */}
        <div className="section">
          <div className="section-image-left">
            <img src={feimg} alt="Frontend Development" />
          </div>
          <div className="section-content">
            <h3>Frontend Development</h3>
            <p>
              Using HTML, CSS, and JavaScript, we craft interactive and accessible interfaces. Our front-end work ensures smooth animations,
              responsive layouts, and delightful user experiences.
            </p>
          </div>
        </div>

        {/* Programming & JS */}
        <div className="section">
          <div className="section-image-right">
            <img src={image3} alt="Programming & JS" />
          </div>
          <div className="section-content">
            <h3>Programming & JavaScript</h3>
            <p>
              We leverage advanced programming techniques and modern JavaScript frameworks to build dynamic and maintainable applications.
              Our engineering approach emphasizes testability, modularity, and clean APIs so teams can ship faster and maintain software at scale.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <div className="contact-map-container">
        <div className="contact-box">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmitContact}>
            <input type="text" name="name" placeholder="Enter your name" value={contact.name} onChange={handleContactChange} required />
            <input type="email" name="email" placeholder="Enter your email" value={contact.email} onChange={handleContactChange} required />
            <input type="tel" name="phone" placeholder="Enter your phone number" value={contact.phone} onChange={handleContactChange} required />
            <textarea name="message" placeholder="Your message..." value={contact.message} onChange={handleContactChange} />
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="map">
          <iframe
            title="Madhapur, Hyderabad"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.228460684893!2d78.39455049562608!3d17.44877603426105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910020106065%3A0x7e5210259f542568!2zS1NSIE5lc3Twn5ON!5e0!3m2!1sen!2sus!4v1764229051388!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="success-popup">
          <div className="success-box">
            <h3>✔ Message Sent!</h3>
            <p>We will get back to you shortly.</p>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer>
        <div className="footer-container">
          <div className="footer-col">
            <h3>BlissSierra</h3>
            <p>We are committed to delivering the best services for your business.</p>
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
            <p>Phone: +91-1234567890</p>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="https://wa.me/919848532222" ><FaWhatsapp /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BlissSierra;
