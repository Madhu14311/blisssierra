import React from "react";


import {

  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  
} from "react-icons/fa";
import bslogo from "./bslogo.png";
import img8 from "./img8.png";
import img9 from "./img9 (2).jpg";
import img10 from "./img10.jpg";

const Insights = () => {
  return (
    <div>
      {/* CSS */}
      <style>{`
        body {
          margin: 0;
          background: #ffffff;
          color: #333;
          overflow-x: hidden;
        }

        /* ===== GLOBAL ANIMATION CLASSES ===== */

        .fade-in { opacity: 0; animation: fadeIn 1.2s forwards; }
        .fade-up { opacity: 0; transform: translateY(25px); animation: fadeUp 1.2s forwards; }
        @keyframes fadeIn { to { opacity: 1; } 
        }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } 
        }

        /* HEADER */
        .header-hero {
          background-color: #022158;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 40px;
          animation: fadeDown 1s forwards;
        }
        @keyframes fadeDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }

        .header-left { display: flex; align-items: center; gap: 15px; transition: 0.3s; 
        }
        .header-left:hover { transform: scale(1.05); 
        }
        .header-left img { width: 60px; height: auto; border-radius: 30px; transition: 0.3s; }
        .header-left img:hover { transform: rotate(8deg) scale(1.08); 
        }

        /* PAGE INTRO PARAGRAPH */
        .intro-insights { padding: 10px 10px; text-align: center; background: #f9fafc; 
        }
        .intro-insights h2 { font-size: 36px; color: #1e3a8a; margin-bottom: 15px; animation: fadeUp 1s forwards; 
        }
        .intro-insights p { max-width: 850px; margin: 0 auto; font-size: 17px; line-height: 1.8; color: #555; animation: fadeUp 1.3s forwards; 
        }

        /* LATEST UPDATES */
        .latest-updates { width: 90%; max-width: 1000px; 
        margin: 40px auto; background: #eef6ff; padding: 10px; border-radius: 12px; 
        animation: fadeUp 1.3s forwards; 
        }
        .latest-updates h3 { font-size: 28px; color: #1e3a8a; margin-bottom: 20px; 
        }
        .latest-updates ul { padding-left: 20px; 
        }
        .latest-updates ul li { font-size: 17px; color: #444; margin-bottom: 12px; line-height: 1.6; cursor: pointer; transition: 0.3s; 
        }
        .latest-updates ul li:hover { color: #1e3a8a; transform: translateX(8px); font-weight: 600; }

        /* MAGAZINES SECTION */
        .magazines-section { width: 80%; max-width: 1200px; margin: 60px auto; animation: fadeUp 1.5s forwards; }
        .magazines-section h2 { text-align: center; color: #1e3a8a; font-size: 32px; margin-bottom: 30px; }

        .magazine-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; 
        }
        .magazine-card { background: #f8f8f8; border-radius: 12px; overflow: hidden; 
        box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: 0.35s; 
        transform: translateY(0); }
        .magazine-card:hover { transform: translateY(-10px) scale(1.03); box-shadow: 0 12px 25px rgba(0,0,0,0.18); 
        }
        .magazine-card img { width: 90%; height: 450px; object-fit: cover; transition: 0.4s; 
        }
        .magazine-card:hover img { transform: scale(1.08); 
        }
        .magazine-content { padding: 20px; }
        .magazine-content h4 { color: #1e3a8a; margin-bottom: 10px; transition: 0.3s; 
        }
        .magazine-card:hover h4 { color: #1e40af; }
        .magazine-content p { color: #555; font-size: 15px; line-height: 1.6; 
        }

        /* FOOTER */
        
        footer { background-color:#022158; color:#fff; padding:40px 20px;  
        }
        .footer-container { display:flex; flex-wrap:wrap; max-width:1200px; margin:0 auto; 
        }
        .footer-col { flex:1 1 0; min-width:200px; padding:10px; box-sizing:border-box; 
        }
        .footer-col h3 { margin-bottom:15px; font-size:22px; 
        }
        .footer-col p { font-size:16px; }
        .footer-col ul { list-style:none; padding:0; }
        .footer-col ul li { margin-bottom:10px; font-size:16px; 
        }
        .footer-col ul li a { color:#fff; text-decoration:none; }
        .footer-col ul li a:hover { text-decoration:underline; 
        }
        .footer-col p a { color:#fff; text-decoration:none; font-size:16px; }
        .footer-col p a:hover { text-decoration:underline; 
        }
        .social-links { margin-top:15px; }
        .social-links a { color:#fff; font-size:18px; margin-right:15px; text-decoration:none; transition:color 0.3s; }
        .social-links a:hover { color:#1da1f2; 
        }
        @media(max-width:1024px){ .footer-container{ flex-direction:column; text-align:center; gap:30px; 
        } 
        }

      `}</style>

      {/* HEADER */}
      <header className="header-hero fade-in">
        <div className="header-left">
          <img src={bslogo} alt="BlissSierra Logo" />
          <h1>BlissSierra</h1>
        </div>
      </header>

      {/* INTRO PARAGRAPH */}

      <section className="intro-insights fade-up">
        <h2>Insights & Ideas</h2>
        <p>
          Explore the latest insights, ideas, and strategic perspectives shaping the future of businesses today. Our expert-driven content helps you 
          understand industry trends, new technologies, and effective business strategies to stay ahead in a competitive market.
        </p>
      </section>

      {/* LATEST UPDATES */}

      <section className="latest-updates fade-up">
        <h3>Latest Updates</h3>
        <ul>
          <li>New AI-driven solutions launched for enterprise automation.</li>
          <li>Bliss Sierra partners with global tech innovators for enhanced cloud support.</li>
          <li>Upcoming webinar: "Future of Digital Strategy – 2025 & Beyond".</li>
          <li>Latest research report on user behavior analytics now available.</li>
          <li>Enhanced customer support features added to our service dashboard.</li>
          <li>New career opportunities added in development and design teams.</li>
          <li>Monthly industry roundup featuring market growth insights.</li>
        </ul>
      </section>

      {/* MAGAZINES SECTION */}
      <section className="magazines-section fade-up">
        <h2>Magazines</h2>

        <div className="magazine-grid">
          <div className="magazine-card">
            <img src={img8} alt="Magazine 1" />
            <div className="magazine-content">
              <h4>Tech Innovation Magazine</h4>
              <p>Explore breakthroughs in AI, automation, and digital ecosystems across industries.</p>
            </div>
          </div>

          <div className="magazine-card">
            <img src={img9} alt="Magazine 2" />
            <div className="magazine-content">
              <h4>Business Strategy Guide</h4>
              <p>Insights on leadership, growth planning, and competitive market positioning.</p>
            </div>
          </div>

          <div className="magazine-card">
            <img src={img10} alt="Magazine 3" />
            <div className="magazine-content">
              <h4>Design & Creativity</h4>
              <p>A deep dive into UI/UX trends and the role of creativity in modern branding.</p>
            </div>
          </div>
        </div>
      </section>

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
            <p>Email: <a href="mailto:blisssierra177@gmail.com">blisssierra177@gmail.com</a></p>
            <p>Phone: <a href="tel:+919848532222">+91-9848532222</a></p>

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

export default Insights;
