import React, { useEffect } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "./bslogo.png";

import image5 from "./image5.jpg";
import image6 from "./image6.jpg";
import img1 from "./img1.jpg";
import image7 from "./image7.jpg";


const WhoWeAre = () => {

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight;
      sections.forEach((sec) => {

        const content = sec.querySelector(".section-content");
        const collab = sec.querySelector(".collab-images");
        const offsetTop = sec.offsetTop + 100;
        if (scrollY > offsetTop) {

          content?.classList.add("visible");
          collab?.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="who-we-are-page">
      {/* Inline CSS */}
      <style>{`

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #f3f4f6; color: #111827; }
        a { text-decoration: none; color: inherit; }

        .header-hero {
          background-color: #022158;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 40px;
          flex-wrap: wrap;
          transform: translateY(-40px);
          opacity: 0;
          animation: slideDown 1.2s ease forwards 0.3s;
        }
        @keyframes slideDown { to { transform: translateY(0); opacity: 1; } }

        .header-left { display: flex; align-items: center; gap: 15px; }

        .header-left img { width: 60px; height: auto; border-radius: 30px; transition: 0.4s ease; }
        .header-left img:hover { transform: scale(1.1) rotate(2deg); }

        .header-left h1 { font-family: 'Montserrat', sans-serif; font-size: 28px; margin: 0; transition: 0.3s ease; }
        .header-left h1:hover { letter-spacing: 1px; }

        .section { display: flex; justify-content: space-between; align-items: flex-start; max-width: 1200px; margin: 60px auto; gap: 20px; flex-wrap: wrap; padding: 0 20px; }
        .section-content, .collab-images { transform: translateY(30px); opacity: 0; transition: all 1s ease; }

        .section-content.visible, .collab-images.visible { transform: translateY(0); opacity: 1; }
        .section-content h2, .section-content h3 { font-family: 'Montserrat', sans-serif; color: #022158; margin-bottom: 15px; }

        .section-content h2 { font-size: 36px; } .section-content h3 { font-size: 28px; }
        .section-content p { font-size: 18px; line-height: 1.8; color: #333; margin-bottom: 10px; }


        .collab-images { flex: 1; display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; justify-items: center; }

        .collab-images img { width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.4s ease, box-shadow 0.4s ease; }

        .collab-images img:hover { transform: scale(1.08); box-shadow: 0 8px 20px rgba(0,0,0,0.2); 
        }

        .values-cards { display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; max-width: 1200px; margin: 60px auto; }

        .value-card { background: #fff; flex: 1 1 250px; max-width: 280px; padding: 30px 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); text-align: center; transition: all 0.3s ease; cursor: default; }
        .value-card:hover { transform: translateY(-12px) scale(1.02); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }

        .value-card h3 { font-family: 'Montserrat', sans-serif; font-size: 22px; margin-bottom: 10px; color: #022158; }
        .value-card p { font-size: 16px; color: #333; 
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
        .social-links a:hover { color: #1da1f2; 
        }

      `}</style>

      {/* HEADER */}
      <header className="header-hero">
        <div className="header-left">
          <img src={logo} alt="BlissSierra Logo" />
          <h1>BlissSierra</h1>
        </div>
      </header>

      {/* COMPANY OVERVIEW */}
      <section className="section">

        <div className="section-content visible" style={{ flex: 1 }}>
          <h2>Who we Are</h2>
          <p>
            BlissSierra is a forward-thinking technology company dedicated to
            securing digital ecosystems and providing innovative software
            solutions. We strive to deliver excellence in cybersecurity, web
            development, and advanced digital services.
          </p>

          <p>
            Our mission is to empower businesses to operate securely,
            efficiently, and confidently in a rapidly evolving digital world.
          </p>

        </div>
        <div className="collab-images visible">
          <img src={image5} alt="Collaboration 1" />
          <img src={image6} alt="Collaboration 2" />
          <img src={img1} alt="Collaboration 3" />
          <img src={image7} alt="Collaboration 4" />
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="values-cards">
        {[
          { title: "Integrity", desc: "We uphold the highest standards of honesty, transparency, and ethical behavior in everything we do." },
          { title: "Innovation", desc: "We continuously embrace new ideas and technologies to deliver cutting-edge solutions for our clients." },
          { title: "Collaboration", desc: "Working together as a team, we create value and foster long-term relationships with clients and partners." },
          { title: "Sustainability", desc: "We are committed to sustainable practices that positively impact communities, clients, and the environment." },
        ].map((value, idx) => (

          <div className="value-card" key={idx}>
            <h3>{value.title}</h3>
            <p>{value.desc}</p>

          </div>
        ))}

      </section>


      {/* LEADERSHIP */}
      <section className="section">
        <div className="section-content visible" style={{ flex: 1 }}>
          <h3>Leadership, Vision & Future Goals</h3>
          <p>
            BlissSierra is guided by visionary leadership focused on innovation, growth, and excellence. We aim to anticipate challenges
            in digital security and provide proactive solutions for our clients worldwide. Our strategic approach ensures our services are always
            cutting-edge, reliable, and scalable for businesses of all sizes. We aspire to be a global leader in digital security, trusted by enterprises worldwide to safeguard their digital assets. By
            investing in talent, technology, and sustainable practices, we aim to make a lasting positive impact in the digital world.
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

export default WhoWeAre;
