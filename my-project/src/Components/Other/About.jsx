import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "../Header files/footer";

function AboutUs() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="all">
      {/* ==================== CUSTOM STYLES ==================== */}
      <style>{`
        /* ========== CSS VARIABLES / DESIGN TOKENS ========== */
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

        /* ========== GLOBAL STYLES ========== */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
          font-size: 1.2rem;
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

        .navbar-nav .nav-link:hover::before,
        .navbar-nav .nav-link:hover::after {
          width: 85%;
        }

        .navbar-nav .nav-link:hover {
          color: var(--primary);
          background: rgba(0, 102, 204, 0.08);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 102, 204, 0.12);
        }

        @media (min-width: 992px) {
          .navbar-nav .nav-link {
            overflow: hidden;
          }
          .navbar-nav .nav-link:hover {
            box-shadow: 0 4px 20px rgba(0, 102, 204, 0.2), inset 0 0 10px rgba(0, 102, 204, 0.05);
          }
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

        /* ========== ABOUT HERO SECTION ========== */
        .about-hero {
          background: linear-gradient(135deg, #0066cc 0%, #02284eff 100%);
          color: #fff;
          min-height: 60vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 1.5rem 2rem 1.5rem;
          position: relative;
          overflow: hidden;
          margin: 0;
        }

        .about-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
          filter: blur(40px);
        }

        .about-hero::after {
          content: '';
          position: absolute;
          bottom: -20%;
          left: -5%;
          width: 400px;
          height: 400px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite reverse;
          filter: blur(40px);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }

        .about-hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
        }

        .about-hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.15;
          margin-bottom: 1.75rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .about-hero-lead {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 2.5rem;
          line-height: 1.75;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 400;
        }

        /* ========== ABOUT CONTENT SECTIONS ========== */
        .about-section {
          padding: 80px 1.5rem;
          background: #fff;
        }

        .about-section-alt {
          background: linear-gradient(135deg, rgba(0, 102, 204, 0.05) 0%, rgba(61, 142, 255, 0.02) 100%);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--dark);
          margin-bottom: 1rem;
          text-align: center;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--muted);
          text-align: center;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ========== MISSION & VISION CARDS ========== */
        .mission-vision-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .mv-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 15px rgba(0, 102, 204, 0.08);
          position: relative;
          overflow: hidden;
        }

        .mv-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 35px rgba(0, 102, 204, 0.2);
          border-color: var(--primary);
        }

        .mv-card-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mv-card-title {
          color: var(--dark);
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .mv-card-description {
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.7;
        }

        /* ========== TEAM SECTION ========== */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .team-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 102, 204, 0.08);
        }

        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 102, 204, 0.15);
        }

        .team-avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: white;
          font-weight: 700;
        }

        .team-name {
          color: var(--dark);
          font-weight: 700;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        .team-role {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }

        .team-bio {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* ========== VALUES SECTION ========== */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .value-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 102, 204, 0.08);
        }

        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 102, 204, 0.15);
        }

        .value-number {
          font-size: 3rem;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 1rem;
          opacity: 0.7;
        }

        .value-title {
          color: var(--dark);
          font-weight: 700;
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }

        .value-description {
          color: var(--muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* ========== CTA SECTION ========== */
        .cta-section {
          background: linear-gradient(135deg, #0066cc 0%, #02284eff 100%);
          color: #fff;
          padding: 80px 1.5rem;
          text-align: center;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .cta-description {
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          background: #fff;
          color: var(--primary);
          border: 0;
          border-radius: 8px;
          padding: 1rem 2.5rem;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .cta-button:hover {
          background: var(--light);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        /* ========== MOBILE MENU STYLES ========== */
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
          font-size: 1.5rem;
          letter-spacing: -0.01em;
        }

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

        .mobile-menu-body {
          padding: 2.5rem 1.75rem;
          flex: 1;
          overflow-y: auto;
        }

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

        /* ========== RESPONSIVE BREAKPOINTS ========== */
        @media (max-width: 991.98px) {
          .site-navbar { padding: 0.75rem 0; }
        }

        @media (max-width: 767.98px) {
          .about-hero { padding: 100px 1rem 1rem 1rem; min-height: 50vh; }
          .about-hero-title { font-size: 2.1rem; }
          .about-hero-lead { font-size: 0.95rem; }
          .about-section { padding: 60px 1rem; }
          .section-title { font-size: 2rem; }
          .mission-vision-grid { grid-template-columns: 1fr; }
          .team-grid { grid-template-columns: 1fr; }
          .values-grid { grid-template-columns: 1fr; }
          .cta-section { padding: 60px 1rem; }
          .cta-title { font-size: 2rem; }
        }

        @media (max-width: 575.98px) {
          .about-hero { padding: 90px 0.75rem 0.75rem 0.75rem; }
          .about-hero-title { font-size: 1.8rem; }
          .mv-card { padding: 2rem 1.5rem; }
          .team-card { padding: 1.5rem; }
          .value-card { padding: 1.5rem; }
        }
      `}</style>

      {/* ==================== NAVBAR SECTION ==================== */}
      <nav className="navbar site-navbar">
        <div className="container">
          <a className="navbar-brand site-brand" href="/">
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
          </a>

          <div className="d-none d-lg-flex align-items-center ms-auto gap-4">
            <a className="nav-link" href="home">
              Home
            </a>
            <a className="nav-link" href="about">
              About Us
            </a>
            <a className="nav-link" href="courses">
              Courses
            </a>
            <a className="nav-link" href="about#team">
              Team
            </a>
            <a className="nav-link" href="contact">
              Contact
            </a>
            <div
              style={{
                width: "1px",
                height: "24px",
                background: "var(--border)",
                margin: "0 0.5rem",
              }}
            ></div>
            <button className="btn btn-primary-nav">Join Us</button>
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

      {/* ==================== MOBILE MENU ==================== */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>
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
              <a href="home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About Us
              </a>
              <a href="courses" onClick={() => setMenuOpen(false)}>
                Courses
              </a>
              <a href="#team" onClick={() => setMenuOpen(false)}>
                Our Team
              </a>
              <a href="contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
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
            }}
          >
            PRO HUB v1.0.0
          </p>
        </div>
      </div>

      {/* ==================== ABOUT HERO SECTION ==================== */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">About Us</h1>
            <p className="about-hero-lead">
              Empowering the next generation of developers through quality
              education, hands-on experience, and a supportive community.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== OUR STORY SECTION ==================== */}
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="">
              <h2 className="section-title">Our Story</h2>
              <p className="section-subtitle">
                From a small community initiative to a thriving tech education
                hub
              </p>
              <div
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "var(--text)",
                }}
              >
                <p>
                  Programmer's Hub Bukasa started in 2024 with a simple mission:
                  to make quality programming education accessible to everyone
                  in our community. We are a small study group has grown into a
                  comprehensive learning center that has helping launch their
                  tech careers.
                </p>
                <p className="mt-4">
                  We believe that anyone can learn to code with the right
                  guidance, resources, and support system. Our approach combines
                  theoretical knowledge with practical, real-world projects that
                  prepare students for the demands of the tech industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MISSION & VISION SECTION ==================== */}
      <section className="about-section about-section-alt">
        <div className="container">
          <h2 className="section-title">Our Mission & Vision</h2>
          <p className="section-subtitle">
            Driving innovation through education and community
          </p>
          <div className="mission-vision-grid">
            <div className="mv-card">
              <div className="mv-card-icon">🎯</div>
              <h3 className="mv-card-title">Our Mission</h3>
              <p className="mv-card-description">
                To democratize tech education by providing affordable,
                high-quality programming courses and creating a supportive
                community where learners can grow, collaborate, and succeed
                together.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-card-icon">🔮</div>
              <h3 className="mv-card-title">Our Vision</h3>
              <p className="mv-card-description">
                To become East Africa's leading community-driven tech education
                hub, producing world-class developers who drive innovation and
                create solutions for local and global challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== OUR VALUES SECTION ==================== */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-number">01</div>
              <h3 className="value-title">Community First</h3>
              <p className="value-description">
                We believe in the power of community. Learning together,
                supporting each other, and growing as a collective is at the
                heart of everything we do.
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">02</div>
              <h3 className="value-title">Excellence</h3>
              <p className="value-description">
                We strive for excellence in everything we do, from curriculum
                design to student support, ensuring the highest quality learning
                experience.
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">03</div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-description">
                We embrace new technologies and teaching methods, constantly
                evolving to provide the most relevant and effective education.
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">04</div>
              <h3 className="value-title">Accessibility</h3>
              <p className="value-description">
                We break down barriers to tech education by offering affordable
                programs and creating an inclusive environment for all learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TEAM SECTION ==================== */}
      <section className="about-section about-section-alt" id="team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Passionate educators and industry professionals dedicated to your
            success
          </p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">DN</div>
              <h3 className="team-name">Damba Norman</h3>
              <p className="team-role">Founder & Lead Instructor</p>
              <p className="team-bio">
                Passionate about teaching and creating opportunities for
                aspiring developers.
              </p>
            </div>
            <div className="team-card">
              <div className="team-avatar">KN</div>
              <h3 className="team-name">Kisuze Nahum</h3>
              <p className="team-role">Curriculum Developer</p>
              <p className="team-bio">
                Senior Student. <br />
                Senior FrontEnd Developer passionate about React and Next.js
                Mango DB
              </p>
            </div>
            <div className="team-card">
              <div className="team-avatar">KK</div>
              <h3 className="team-name">Kaggwa Kevin</h3>
              <p className="team-role">Mentor / Instractor</p>
              <p className="team-bio">
                Builds and nurtures our learning community. Ensures every
                student feels supported throughout their journey.
              </p>
            </div>
            <div className="team-card">
              <div className="team-avatar">KN</div>
              <h3 className="team-name">Kibuule Noah</h3>
              <p className="team-role">Career Coach</p>
              <p className="team-bio">
                Fullstack Developer. <br />
                With strong passion for backend engineering .Skilled in python
                and currently diving deep in Golang
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-description">
            Join our community of learners and take the first step toward your
            tech career today. No prior experience required - just bring your
            curiosity and determination.
          </p>
          <a href="contact">
            <button className="cta-button">Join Programmer's Hub</button>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutUs;
