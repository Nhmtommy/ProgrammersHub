import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "../Header files/footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faPaperPlane,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faTiktok,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [text, setText] = useState("");
  const Tell = () => {
    setText("Please Use The LInks To Contact, Form Not Yet Active.");
  };
  const socialLinks = {
    whatsapp: "https://wa.me/256703884346",
    facebook: "https://facebook.com/programmershubbukasa",
    tiktok: "https://tiktok.com/@programmershubbukasa",
    instagram: "https://instagram.com/programmershubbukasa",
    twitter: "https://twitter.com/programmershub",
  };

  const contactInfo = {
    email: "contact@programmershubbukasa.com",
    phone: "+256 703 884 346",
    address: "Bukasa, Wakiso, Uganda",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("");
  };

  return (
    <div id="contact-page">
      {/* ==================== CUSTOM STYLES ==================== */}
      <style>{`
        /* ========== CSS VARIABLES / DESIGN TOKENS ========== */
        .tell{
        color:red;
        }
        :root {
          --primary: #0066cc;
          --primary-dark: #0052a3;
          --primary-light: #3d8eff;
          --secondary: #00a859;
          --dark: #1a1a1a;
          --light: #f8f9fa;
          --text: #333;
          --muted: #666;
          --border: #e0e0e0;
        }

        /* ========== NAVBAR STYLING ========== */
        .site-navbar {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          border-bottom: 2px solid var(--border);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          padding: 1rem 0;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1030;
        }

        /* ========== BRAND/LOGO STYLING ========== */
        .site-brand {
          color: var(--primary);
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: -0.015em;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: transform 0.2s ease;
        }

        .site-brand:hover {
          color: var(--primary-dark);
          transform: translateY(-2px);
        }

        /* ========== NAVIGATION LINKS STYLING ========== */
        .navbar-nav .nav-link {
          color: var(--text);
          font-weight: 600;
          font-size: 0.95rem;
          padding: 0.65rem 1.25rem;
          transition: all 0.3s ease;
          position: relative;
          margin: 0 0.35rem;
          border-radius: 6px;
        }

        /* Top gradient line on hover */
        .navbar-nav .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 0;
          height: 2.5px;
          background: linear-gradient(90deg, var(--primary-light), var(--primary));
          transform: translateX(-50%);
          transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 2px;
        }

        /* Bottom gradient line on hover */
        .navbar-nav .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2.5px;
          background: linear-gradient(90deg, var(--primary), var(--primary-light));
          transform: translateX(-50%);
          transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 2px;
        }

        /* Animate lines on hover */
        .navbar-nav .nav-link:hover::before {
          width: 85%;
        }

        .navbar-nav .nav-link:hover::after {
          width: 85%;
        }

        .navbar-nav .nav-link:hover {
          color: var(--primary);
          background: rgba(0, 102, 204, 0.08);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 102, 204, 0.12);
        }

        /* ========== PRIMARY BUTTON STYLING ========== */
        .btn-primary-nav {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          color: #fff;
          border: 0;
          border-radius: 8px;
          padding: 0.6rem 1.5rem;
          font-weight: 700;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
          letter-spacing: 0.02em;
        }

        .btn-primary-nav:hover {
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
          box-shadow: 0 8px 25px rgba(0, 102, 204, 0.4);
          transform: translateY(-3px);
          color: #fff;
        }

        /* ========== HERO SECTION ========== */
        .contact-hero {
          background: linear-gradient(135deg, #0066cc 0%, #02284eff 100%);
          color: #fff;
          min-height: 40vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 1.5rem 2rem 1.5rem;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .contact-hero-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          line-height: 1.15;
          margin-bottom: 1rem;
          font-weight: 800;
          letter-spacing: -0.025em;
        }

        .contact-hero-lead {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: rgba(255, 255, 255, 0.95);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* ========== CONTACT CONTENT ========== */
        .contact-content {
          padding: 5rem 1.5rem;
          background: #fff;
        }

        /* ========== MOBILE MENU OVERLAY ========== */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          z-index: 1040;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .mobile-menu-overlay.active {
          opacity: 1;
          pointer-events: all;
        }

        /* ========== MOBILE MENU PANEL ========== */
        .mobile-menu-panel {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          max-width: 100%;
          height: 100vh;
          background: linear-gradient(180deg, #fff 0%, var(--light) 100%);
          z-index: 1050;
          transition: right 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow-y: auto;
          box-shadow: -6px 0 30px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
        }

        .mobile-menu-panel.active {
          right: 0;
        }

        /* ========== MOBILE MENU HEADER ========== */
        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.75rem;
          border-bottom: 2px solid var(--border);
          background: linear-gradient(to right, var(--primary), var(--primary-light));
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(0, 102, 204, 0.15);
        }

        .mobile-menu-header h5 {
          margin: 0;
          color: #fff;
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: -0.01em;
        }

        /* ========== MOBILE MENU CLOSE BUTTON ========== */
        .mobile-menu-close {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.3);
          font-size: 1.75rem;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0.4rem;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
        }

        .mobile-menu-close:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.3);
          border-color: #fff;
          transform: rotate(90deg);
        }

        /* ========== MOBILE MENU BODY ========== */
        .mobile-menu-body {
          padding: 2.5rem 1.75rem;
          flex: 1;
          overflow-y: auto;
        }

        /* ========== MOBILE MENU SECTIONS ========== */
        .mobile-menu-section {
          margin-bottom: 2.75rem;
        }

        .mobile-menu-section:last-child {
          margin-bottom: 1.5rem;
        }

        .mobile-menu-section-title {
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--primary);
          margin-bottom: 1.5rem;
          padding-left: 1rem;
        }

        /* ========== MOBILE NAVIGATION LINKS ========== */
        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .mobile-nav a {
          color: var(--text);
          text-decoration: none;
          padding: 1.1rem 1rem;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          position: relative;
          background: transparent;
        }

        .mobile-nav a:hover {
          background: linear-gradient(90deg, rgba(0, 102, 204, 0.1), transparent);
          color: var(--primary);
          padding-left: 1.35rem;
        }

        .mobile-nav a::before {
          content: '';
          position: absolute;
          left: 0;
          width: 4px;
          height: 0;
          background: linear-gradient(180deg, var(--primary), var(--primary-light));
          border-radius: 2px;
          transition: height 0.2s ease;
        }

        .mobile-nav a:hover::before {
          height: 100%;
        }

        /* ========== MOBILE MENU FOOTER ========== */
        .mobile-menu-footer {
          border-top: 2px solid var(--border);
          padding: 2rem 1.75rem;
          background: linear-gradient(180deg, var(--light), rgba(0, 102, 204, 0.02));
          margin-top: auto;
          flex-shrink: 0;
          box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.05);
        }

        .mobile-menu-footer .btn {
          width: 100%;
          padding: 1rem 1.5rem;
          font-weight: 700;
          border-radius: 10px;
          font-size: 0.95rem;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(0, 102, 204, 0.25);
        }

        /* ========== MOBILE HAMBURGER BUTTON ========== */
        .mobile-hamburger {
          border: 2px solid var(--primary);
          background: transparent;
          color: var(--primary);
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .mobile-hamburger:hover {
          background: var(--primary);
          color: #fff;
          transform: scale(1.05);
        }

        .mobile-hamburger.active {
          color: var(--primary-dark);
          border-color: var(--primary-dark);
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 768px) {
          .contact-hero {
            padding: 100px 1rem 1rem 1rem;
            min-height: 35vh;
          }
          
          .contact-content {
            padding: 3rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .contact-hero-title {
            font-size: 2rem;
          }
        }
      `}</style>

      {/* ==================== NAVBAR ==================== */}
      <nav className="navbar site-navbar">
        <div className="container">
          <Link className="navbar-brand site-brand" to="/">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              aria-hidden
              focusable="false"
            >
              <defs>
                <linearGradient
                  id="brandGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#0066cc" />
                  <stop offset="100%" stopColor="#3d8eff" />
                </linearGradient>
              </defs>
              <rect width="32" height="32" rx="8" fill="url(#brandGrad)"></rect>
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                fill="#fff"
                dy=".35em"
                fontWeight="800"
                fontSize="18"
              >
                P
              </text>
            </svg>
            Programmer's Hub <br /> <sub>Bukasa</sub>
          </Link>

          <div className="d-none d-lg-flex align-items-center ms-auto gap-4">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About Us
            </Link>
            <Link className="nav-link" to="/courses">
              Courses
            </Link>
            <Link className="nav-link active" to="#">
              Contact
            </Link>
            <div
              style={{
                width: "1px",
                height: "24px",
                background: "var(--border)",
                margin: "0 0.5rem",
              }}
            ></div>
            <button className="btn btn-primary-nav">Get Started</button>
          </div>

          <button
            className={`mobile-hamburger d-lg-none ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* ==================== MOBILE MENU OVERLAY ==================== */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
        role="presentation"
      ></div>

      {/* ==================== MOBILE MENU PANEL ==================== */}
      <div
        className={`mobile-menu-panel ${menuOpen ? "active" : ""}`}
        role="navigation"
        aria-label="Mobile menu"
      >
        <div className="mobile-menu-header">
          <h5>Menu</h5>
          <button
            className="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="mobile-menu-body">
          <div className="mobile-menu-section">
            <div className="mobile-menu-section-title">Navigation</div>
            <nav className="mobile-nav">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/courses" onClick={() => setMenuOpen(false)}>
                Courses
              </Link>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>

          <div className="mobile-menu-section">
            <div className="mobile-menu-section-title">Quick Actions</div>
            <nav className="mobile-nav">
              <Link to="/#courses" onClick={() => setMenuOpen(false)}>
                View Courses
              </Link>
              <Link to="/#community" onClick={() => setMenuOpen(false)}>
                Join Community
              </Link>
              <Link to="#faq" onClick={() => setMenuOpen(false)}>
                FAQ
              </Link>
            </nav>
          </div>
        </div>

        <div className="mobile-menu-footer">
          <button className="btn btn-primary-nav">Get Started Today</button>
          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--muted)",
              marginTop: "1.25rem",
              textAlign: "center",
              fontWeight: "600",
              letterSpacing: "0.05em",
            }}
          >
            PROGRAMMERS HUB v1.0.0
          </p>
        </div>
      </div>

      {/* ==================== HERO SECTION ==================== */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-lead">
            Get in touch with us. We're here to help you start your programming
            journey.
          </p>
        </div>
      </section>

      {/* ==================== CONTACT CONTENT ==================== */}
      <section className="contact-content">
        <div className="container">
          <div className="row g-4">
            {/* Contact Information Column */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body p-4 p-lg-5">
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <FontAwesomeIcon icon={faPhone} size="lg" />
                    </div>
                    <h3 className="h4 fw-bold mb-0">Contact Information</h3>
                  </div>

                  <div className="row g-3">
                    <div className="col-12">
                      <div className="d-flex">
                        <div className="text-primary me-3">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div>
                          <strong className="d-block">Email</strong>
                          <a
                            href={`mailto:${contactInfo.email}`}
                            className="text-decoration-none"
                          >
                            Email US
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="d-flex">
                        <div className="text-primary me-3">
                          <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div>
                          <strong className="d-block">Phone</strong>
                          <a
                            href={`tel:${contactInfo.phone}`}
                            className="text-decoration-none"
                          >
                            Conatct US
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="d-flex">
                        <div className="text-primary me-3">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </div>
                        <div>
                          <strong className="d-block">Address</strong>
                          <span>{contactInfo.address}</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="d-flex">
                        <div className="text-primary me-3">
                          <FontAwesomeIcon icon={faClock} />
                        </div>
                        <div>
                          <strong className="d-block">Business Hours</strong>
                          <span>{contactInfo.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="mt-5">
                    <h4 className="h5 fw-bold mb-4">Connect With Us</h4>
                    <div className="row g-2">
                      <div className="col-12 col-md-6">
                        <a
                          href={socialLinks.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-success d-flex align-items-center justify-content-center w-100 mb-2"
                        >
                          <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
                          WhatsApp
                        </a>
                      </div>
                      <div className="col-12 col-md-6">
                        <a
                          href={socialLinks.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-primary d-flex align-items-center justify-content-center w-100 mb-2"
                        >
                          <FontAwesomeIcon icon={faFacebook} className="me-2" />
                          Facebook
                        </a>
                      </div>
                      <div className="col-12 col-md-6">
                        <a
                          href={socialLinks.tiktok}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-dark d-flex align-items-center justify-content-center w-100 mb-2"
                        >
                          <FontAwesomeIcon icon={faTiktok} className="me-2" />
                          TikTok
                        </a>
                      </div>
                      <div className="col-12 col-md-6">
                        <a
                          href={socialLinks.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-danger d-flex align-items-center justify-content-center w-100 mb-2"
                        >
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="me-2"
                          />
                          Instagram
                        </a>
                      </div>
                      <div className="col-12">
                        <a
                          href={socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-info d-flex align-items-center justify-content-center w-100 mb-2"
                        >
                          <FontAwesomeIcon icon={faTwitter} className="me-2" />
                          Twitter
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}

            <div className="col-lg-6">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body p-4 p-lg-5">
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <FontAwesomeIcon icon={faComments} size="lg" />
                    </div>
                    <h3 className="h4 fw-bold mb-0">Send Us a Message</h3>
                  </div>
                  <h3 className="tell">{text}</h3>
                  <p className="text-muted mb-4">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label fw-semibold">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="name"
                        placeholder="Enter your name"
                        onChange={Tell}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label fw-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        placeholder="Enter your email"
                        onChange={Tell}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="subject"
                        className="form-label fw-semibold"
                      >
                        Subject
                      </label>
                      <select
                        className="form-control form-control-lg"
                        id="subject"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="courses">Course Information</option>
                        <option value="admission">Admission Process</option>
                        <option value="support">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="form-label fw-semibold"
                      >
                        Message
                      </label>
                      <textarea
                        className="form-control form-control-lg"
                        id="message"
                        rows="4"
                        placeholder="Type your message here..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-100"
                    >
                      <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MAP SECTION ==================== */}
      {/* <section className="bg-light py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow">
                <div className="card-body p-4 p-lg-5">
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <FontAwesomeIcon icon={faMap} size="lg" />
                    </div>
                    <h3 className="h4 fw-bold mb-0">Our Location</h3>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">
                      <h5 className="fw-bold mb-3">Address Details</h5>
                      <p className="text-muted mb-4">{contactInfo.address}</p>
                      <div className="bg-white border rounded p-4 text-center h-100 d-flex flex-column justify-content-center">
                        <div className="text-muted mb-3">
                          <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            size="2x"
                            className="text-primary"
                          />
                        </div>
                        <p className="mb-0 fw-semibold">Map View</p>
                        <small className="text-muted">
                          Interactive map would appear here
                        </small>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <h5 className="fw-bold mb-3">Directions</h5>
                      <ul className="list-unstyled">
                        <li className="mb-3">
                          <strong>From City Center:</strong>
                          <p className="text-muted mb-0">
                            Take the main road towards Bukasa. We're located
                            near the community center.
                          </p>
                        </li>
                        <li className="mb-3">
                          <strong>Public Transport:</strong>
                          <p className="text-muted mb-0">
                            Available buses and taxis from Kampala city center
                            directly to Bukasa.
                          </p>
                        </li>
                        <li>
                          <strong>Parking:</strong>
                          <p className="text-muted mb-0">
                            Ample parking space available on site.
                          </p>
                        </li>
                      </ul>

                      <div className="mt-4">
                        <button className="btn btn-outline-primary me-2 mb-2">
                          Get Directions
                        </button>
                        <button className="btn btn-outline-secondary mb-2">
                          Download Location Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     */}
      {/* ==================== FAQ SECTION ==================== */}
      <section id="faq" className="py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-center fw-bold mb-5">
                Frequently Asked Questions
              </h2>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                    >
                      What courses do you offer?
                    </button>
                  </h2>
                  <div
                    id="faq1"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      We offer a range of programming courses including Web
                      Development, WebApp Development and more. Visit our
                      <Link to="/courses"> Courses</Link> page for detailed
                      information.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                    >
                      How can I join your community?
                    </button>
                  </h2>
                  <div
                    id="faq2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      You can join our community by enrolling in any of our
                      courses or by <Link to="/contact"> contacting</Link> us
                      directly through our social media platforms.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                    >
                      Do you offer online classes?
                    </button>
                  </h2>
                  <div
                    id="faq3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, we offer both in-person and online classes to
                      accommodate different learning preferences and locations.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
