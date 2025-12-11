import React, { startTransition } from "react";
import ReactDOM from 'react-dom/client';

import './index.css';
const books = [
    {
    author: 'Gianna Mago',
    title: 'You Got This',
    img: 'https://m.media-amazon.com/images/I/91g4K+FXBLL._AC_UL480_FMwebp_QL65_.jpg',
},
{
    author: 'Frances Garcia',
    title: 'Ikigai',
    img: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg',
}
];

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = () => {
    console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert('handle button click');
  };
  return (
    <section>
      <form>
        <h2> Typical Form</h2>
        <input
        type='text'
        name='example'
        onChange={handleFormInput}
        style={{ margin: '1rem 0'}}
        />
      </form>
    </section>
  );
};

const Book = (props) => {
    const { img, title, author } = props;
    // console.log(props);
     return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            </article> 
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);




// src/Careers.js
import React, { useState } from "react";
import image2 from "./image2.jpg"; // "Why Work With Us" image

const Careers = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState("");
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSe5g1YV3RFGZWpHrW30GdazVdQSbDvDR-OLNmZPzxi2B4FK7A/viewform?embedded=true";

  const openModal = (job) => {
    setCurrentJob(job);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentJob("");
  };

  return (
    <>
      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; font-family:'Roboto',sans-serif; }
        body { background:#f3f4f6; color:#111827; }
        a { text-decoration:none; color:inherit; }

        .hero { background-color: #022158; color:#fff; text-align:center; padding:40px 20px 30px 20px; }
        .hero h1 { font-family:'Montserrat',sans-serif; font-size:36px; margin-bottom:10px; }
        .hero p { font-size:20px; opacity:0.9; }

        .why-container { max-width:1200px; margin:10px auto; display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap; }
        .why-text { flex:1; }
        .why-text h2 { font-family:'Montserrat',sans-serif; font-size:36px; color:#1e3a8a; margin-bottom:10px; }
        .why-text p { font-size:18px; line-height:1.8; color:#333; }
        .why-image { flex:1; text-align:right; }
        .why-image img { width:100%; max-width:450px; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.1); }
        @media(max-width:900px){ .why-container{ flex-direction:column; text-align:center; } .why-image{ text-align:center; } }

        .jobs { text-align:center; font-size:28px; color:#1e3a8a; margin-top:20px; margin-bottom:10px; }
        .open-positions { max-width:1200px; margin:60px auto; display:flex; justify-content:space-around; flex-wrap:wrap; gap:30px; padding:0 20px; }
        .job-card { background:#fff; flex:1 1 300px; max-width:350px; padding:30px 20px; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.1); transition:all 0.3s ease; text-align:center; }
        .job-card:hover { transform:translateY(-8px); box-shadow:0 10px 20px rgba(0,0,0,0.15); }
        .job-card h3 { font-family:'Montserrat',sans-serif; font-size:22px; color:#1e3a8a; margin-bottom:5px; }
        .job-card p { font-size:16px; color:#555; line-height:1.6; margin-bottom:20px; }
        .apply-btn { display:inline-block; padding:10px 25px; background-color:green; color:#fff; font-weight:bold; border-radius:8px; transition:all 0.3s ease; cursor:pointer; }
        .apply-btn:hover { background-color:green; transform:translateY(-3px); }

        .modal { display:${modalOpen ? "block" : "none"}; position:fixed; z-index:1000; left:0; top:0; width:100%; height:100%; overflow:auto; background-color:rgba(0,0,0,0.7); animation:fadeIn 0.3s ease; }
        .modal-content { background:#fff; margin:5% auto; padding:20px; border-radius:12px; max-width:900px; width:90%; position:relative; }
        .modal-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; }
        .modal-header h3 { font-family:'Montserrat',sans-serif; font-size:24px; color:#1e3a8a; }
        .close { font-size:28px; font-weight:bold; cursor:pointer; }
        .modal iframe { width:100%; height:800px; border:none; border-radius:8px; }

        footer { background-color:#022158; color:#fff; padding:40px 20px; font-family:Arial,sans-serif; }
        .footer-container { display:flex; flex-wrap:wrap; max-width:1200px; margin:0 auto; }
        .footer-col { flex:1 1 0; min-width:200px; padding:10px; box-sizing:border-box; }
        .footer-col h3 { margin-bottom:15px; font-size:22px; }
        .footer-col p { font-size:16px; }
        .footer-col ul { list-style:none; padding:0; }
        .footer-col ul li { margin-bottom:10px; font-size:16px; }
        .footer-col ul li a { color:#fff; text-decoration:none; }
        .footer-col ul li a:hover { text-decoration:underline; }
        .footer-col p a { color:#fff; text-decoration:none; font-size:16px; }
        .footer-col p a:hover { text-decoration:underline; }
        .social-links { margin-top:15px; }
        .social-links a { color:#fff; font-size:18px; margin-right:15px; text-decoration:none; transition:color 0.3s; }
        .social-links a:hover { color:#1da1f2; }
        @media(max-width:1024px){ .footer-container{ flex-direction:column; text-align:center; gap:30px; } }

        .why-work { padding:80px 5%; background:#f8f9fc; }
      `}</style>

      {/* HEADER */}
      <section className="hero">
        <h1>Careers at BlissSierra</h1>
        <p>Join our team and help us secure the digital horizon</p>
      </section>

      {/* WHY WORK WITH US */}
      <section className="why-work">
        <div className="why-container">
          <div className="why-text">
            <h2>Why Work With Us</h2>
            <p>
              At BlissSierra, we foster innovation, collaboration, and growth.
              Our employees work on cutting-edge projects in cybersecurity,
              web development, and digital solutions, making an impact globally.
              Join us to be part of a team that values creativity, expertise,
              and integrity.
            </p>
          </div>
          <div className="why-image">
            <img src={image2} alt="Work With Us" />
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="jobs">
        <h2>Open Positions</h2>
        <div className="open-positions">
          {[
            { title: "Cybersecurity Analyst", desc: "Responsible for monitoring and securing clients' digital infrastructure." },
            { title: "Java Developer", desc: "Develop robust and high-performance Java applications for enterprise solutions." },
            { title: "Web Developer", desc: "Build responsive and scalable websites tailored to business needs." },
          ].map((job, idx) => (
            <div key={idx} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.desc}</p>
              <button className="apply-btn" onClick={() => openModal(job.title)}>Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h3>{`Apply for ${currentJob}`}</h3>
            <span className="close" onClick={closeModal}>&times;</span>
          </div>
          <iframe src={formLink} title="Job Application Form"></iframe>
        </div>
      </div>

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
              <li><a href="/services">Services</a></li>
              <li><a href="/insights">Insights</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Us</h3>
            <p>KSR Nest, Kakateeya Hills, madhapur, hyderabad-500081</p>
            <p>Email: <a href="mailto:contact@blisssierra.com">contact@blisssierra.com</a></p>
            <p>Phone: <a href="tel:+911234567890">+91-1234567890</a></p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Careers;





// src/WhatWeDo.js
import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
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
          height: 390px;
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

        footer { background-color: #022158; color: #fff; padding: 40px 20px; font-family: Arial, sans-serif; }
        .footer-container { display: flex; flex-wrap: wrap; max-width: 1200px; margin: 0 auto; }
        .footer-col { flex: 1 1 0; min-width: 200px; padding: 10px; box-sizing: border-box; }
        .footer-col h3 { margin-bottom: 15px; font-size: 22px; }
        .footer-col p, .footer-col ul li { font-size: 16px; }
        .footer-col ul { list-style: none; padding: 0; }
        .footer-col ul li a { color: #fff; text-decoration: none; }
        .footer-col ul li a:hover, .footer-col p a:hover { text-decoration: underline; }
        .social-links { margin-top: 15px; }
        .social-links a { color: #fff; font-size: 18px; margin-right: 15px; text-decoration: none; transition: color 0.3s; }
        .social-links a:hover { color: #1da1f2; }

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
          Every business is unique, and so is our approach. We analyze, understand,
          and design solutions tailored to your specific goals. Our process focuses
          on collaboration, transparency, and efficiency—ensuring every project
          delivers real value. We combine research-driven insights with creative
          thinking and modern technology to help businesses evolve confidently
          and sustainably.
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
              We provided cybersecurity and web development support, helping Loan Era
              build secure online financial services.
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
                  <p>Email: contact@blisssierra.com</p>
                  <p>Phone: +91-1234567890</p>
      
                  <div className="social-links">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaLinkedinIn /></a>
                  </div>
                </div>
              </div>
            </footer>

    </div>
  );
};

export default WhatWeDo;