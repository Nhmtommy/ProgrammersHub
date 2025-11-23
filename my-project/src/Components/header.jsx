import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="all">
      <style>{`
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

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { margin: 0; padding: 0; height: 100%; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }

        /* Navbar */
        .site-navbar {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          border-bottom: 2px solid var(--border);
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          padding: 1rem 0;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1030;
        }

        .site-brand {
          color: var(--primary);
          font-weight: 700;
          font-size: 1.35rem;
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

        .navbar-nav .nav-link {
          color: var(--text);
          font-weight: 600;
          font-size: 0.95rem;
          padding: 0.5rem 1rem;
          transition: all 0.2s ease;
          position: relative;
        }

        .navbar-nav .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--primary);
          transform: translateX(-50%);
          transition: width 0.3s ease;
        }

        .navbar-nav .nav-link:hover::after { width: 100%; }
        .navbar-nav .nav-link:hover { color: var(--primary); }

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

        /* Hero - Full Page */
        header.hero {
          background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
          color: #fff;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 1.5rem 2rem 1.5rem;
          position: relative;
          overflow: hidden;
          margin: 0;
        }

        header.hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: rgba(255,255,255,0.08);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
          filter: blur(40px);
        }

        header.hero::after {
          content: '';
          position: absolute;
          bottom: -20%;
          left: -5%;
          width: 400px;
          height: 400px;
          background: rgba(255,255,255,0.05);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite reverse;
          filter: blur(40px);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }

        .hero-content { position: relative; z-index: 10; }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.15;
          margin-bottom: 1.75rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          text-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .hero-title br + * { color: var(--primary-light); }

        .hero-lead {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: rgba(255,255,255,0.95);
          margin-bottom: 2.5rem;
          line-height: 1.75;
          max-width: 600px;
          font-weight: 400;
        }

        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .btn-hero {
          padding: 1rem 2.25rem;
          font-weight: 700;
          border-radius: 10px;
          border: 2px solid;
          transition: all 0.3s ease;
          cursor: pointer;
          font-size: 1rem;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }

        .btn-hero-primary {
          background: #fff;
          color: var(--primary);
          border-color: #fff;
        }

        .btn-hero-primary:hover {
          background: var(--light);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.25);
          letter-spacing: 0.03em;
        }

        .btn-hero-secondary {
          background: rgba(255,255,255,0.15);
          color: #fff;
          border-color: #fff;
          backdrop-filter: blur(10px);
        }

        .btn-hero-secondary:hover {
          background: rgba(255,255,255,0.25);
          border-color: #fff;
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(255,255,255,0.2);
        }

        .hero-img {
          max-width: 500px;
          width: 100%;
          border-radius: 16px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.35);
          object-fit: cover;
          animation: slideUp 0.8s ease-out;
          border: 3px solid rgba(255,255,255,0.1);
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .trust-badge {
          color: rgba(255,255,255,0.95);
          font-size: 1.05rem;
          font-weight: 600;
          background: rgba(255,255,255,0.1);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          display: inline-block;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
        }

        /* Mobile Menu - Professional Sidebar */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
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
          box-shadow: -6px 0 30px rgba(0,0,0,0.2);
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
          font-size: 1.25rem;
          letter-spacing: -0.01em;
        }

        .mobile-menu-close {
          background: rgba(255,255,255,0.2);
          border: 2px solid rgba(255,255,255,0.3);
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
          background: rgba(255,255,255,0.3);
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
          box-shadow: 0 -4px 15px rgba(0,0,0,0.05);
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

        /* Responsive */
        @media (max-width: 991.98px) {
          .hero-title { font-size: 2.5rem; margin-bottom: 1.5rem; }
          .hero-lead { font-size: 1rem; margin-bottom: 2rem; }
          .hero-cta { flex-direction: column; margin-bottom: 2.5rem; }
          .btn-hero { width: 100%; text-align: center; padding: 0.9rem 1.75rem; }
          header.hero { padding: 120px 1.25rem 1.5rem 1.25rem; }
        }

        @media (max-width: 767.98px) {
          header.hero {
            padding: 100px 1rem 1rem 1rem;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .hero-title {
            font-size: 2.1rem;
            margin-bottom: 1.35rem;
            line-height: 1.1;
          }

          .hero-lead {
            font-size: 0.95rem;
            margin-bottom: 1.75rem;
            line-height: 1.65;
          }

          .hero-cta {
            flex-direction: column;
            gap: 0.85rem;
            margin-bottom: 2rem;
          }

          .btn-hero {
            padding: 0.85rem 1.5rem;
            font-size: 0.9rem;
            width: 100%;
          }

          .trust-badge {
            font-size: 0.9rem;
            margin-top: 1.25rem;
          }

          .hero-img {
            max-width: 100%;
            margin-top: 2.5rem;
            max-height: 350px;
          }

          .mobile-menu-panel {
            max-width: 100%;
          }

          .mobile-menu-header {
            padding: 1.5rem;
          }

          .mobile-menu-body {
            padding: 2rem 1.25rem;
          }

          .mobile-menu-footer {
            padding: 1.75rem 1.25rem;
          }

          .mobile-nav a {
            padding: 1rem 0.9rem;
          }

          .site-navbar { padding: 0.75rem 0; }
        }

        @media (max-width: 575.98px) {
          header.hero {
            padding: 90px 0.75rem 0.75rem 0.75rem;
            min-height: 100vh;
          }

          .hero-title {
            font-size: 1.75rem;
            margin-bottom: 1rem;
            font-weight: 800;
          }

          .hero-lead {
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
            line-height: 1.6;
          }

          .btn-hero {
            padding: 0.8rem 1.25rem;
            font-size: 0.85rem;
          }

          .mobile-menu-body {
            padding: 1.75rem 0.9rem;
          }

          .mobile-menu-section {
            margin-bottom: 2rem;
          }

          .mobile-nav a {
            padding: 0.95rem 0.8rem;
            font-size: 0.9rem;
          }

          .mobile-menu-section-title {
            font-size: 0.75rem;
            padding-left: 0.8rem;
          }

          .trust-badge {
            font-size: 0.85rem;
            padding: 0.65rem 1.25rem;
          }
        }
      `}</style>

      {/* Navbar */}
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
            Pro Hub
          </a>

          {/* Desktop nav */}
          <div className="d-none d-lg-flex align-items-center ms-auto gap-3">
            <a className="nav-link" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Features
            </a>
            <a className="nav-link" href="#">
              Pricing
            </a>
            <a className="nav-link" href="#">
              Docs
            </a>
            <button className="btn btn-primary-nav">Get Started</button>
          </div>

          {/* Mobile menu button */}
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

      {/* Professional Mobile Menu */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
        role="presentation"
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
            <div className="mobile-menu-section-title">Main Navigation</div>
            <nav className="mobile-nav">
              <a href="#" onClick={() => setMenuOpen(false)}>
                Home
              </a>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Features
              </a>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Pricing
              </a>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Docs
              </a>
            </nav>
          </div>

          <div className="mobile-menu-section">
            <div className="mobile-menu-section-title">Resources</div>
            <nav className="mobile-nav">
              <a href="#" onClick={() => setMenuOpen(false)}>
                Blog
              </a>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Community
              </a>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Support
              </a>
            </nav>
          </div>
        </div>

        <div className="mobile-menu-footer">
          <button className="btn btn-primary-nav">Get Started Free</button>
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
            PRO HUB v1.0.0
          </p>
        </div>
      </div>

      {/* Hero Section - Full Page 100vh */}
      <header className="hero">
        <div className="container">
          <div className="row align-items-center g-5 h-100">
            <div className="col-12 col-lg-6 hero-content">
              <h1 className="hero-title">
                Learn Coding <br /> Without Limits
              </h1>
              <p className="hero-lead">
                Everything you need to master programming — from beginner to
                expert level. Start your journey today.
              </p>

              <div className="hero-cta">
                <button className="btn btn-hero btn-hero-primary">
                  Get Started Free
                </button>
                <button className="btn btn-hero btn-hero-secondary">
                  Watch Demo
                </button>
              </div>

              <p className="trust-badge">
                ✓ Trusted by 800+ Students Worldwide
              </p>
            </div>

            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
              <img
                src="pics/note-hand.jpg"
                alt="learning illustration"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
