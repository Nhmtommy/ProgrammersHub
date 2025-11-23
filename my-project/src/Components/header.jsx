import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Header() {
  return (
    <div id="all">
      <style>{`
        :root {
          --primary: #0066cc;
          --secondary: #00a859;
          --dark: #1a1a1a;
          --light: #f8f9fa;
          --text: #333;
          --muted: #666;
          --border: #e0e0e0;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }

        /* Navbar */
        .site-navbar {
          background: #fff;
          border-bottom: 1px solid var(--border);
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .site-brand {
          color: var(--primary);
          font-weight: 700;
          font-size: 1.25rem;
          letter-spacing: -0.01em;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .site-brand:hover { color: var(--primary); }

        .navbar-nav .nav-link {
          color: var(--text);
          font-weight: 500;
          font-size: 0.95rem;
          padding: 0.5rem 1rem;
          transition: color 0.2s ease;
        }

        .navbar-nav .nav-link:hover { color: var(--primary); }

        .btn-primary-nav {
          background: var(--primary);
          color: #fff;
          border: 0;
          border-radius: 6px;
          padding: 0.5rem 1.25rem;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 102, 204, 0.15);
        }

        .btn-primary-nav:hover {
          background: #0052a3;
          box-shadow: 0 4px 12px rgba(0, 102, 204, 0.25);
          transform: translateY(-2px);
          color: #fff;
        }

        /* Hero */
        header.hero {
          background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
          color: #fff;
          padding: 5rem 1rem;
          position: relative;
          overflow: hidden;
        }

        header.hero::before {
          content: '';
          position: absolute;
          top: 0;
          right: -10%;
          width: 600px;
          height: 600px;
          background: rgba(255,255,255,0.05);
          border-radius: 50%;
        }

        .hero-content { position: relative; z-index: 10; }

        .hero-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          line-height: 1.1;
          margin-bottom: 1rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .hero-lead {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.92);
          margin-bottom: 2rem;
          line-height: 1.6;
          max-width: 500px;
        }

        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .btn-hero {
          padding: 0.75rem 1.75rem;
          font-weight: 600;
          border-radius: 6px;
          border: 2px solid;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .btn-hero-primary {
          background: #fff;
          color: var(--primary);
          border-color: #fff;
        }

        .btn-hero-primary:hover {
          background: var(--light);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .btn-hero-secondary {
          background: transparent;
          color: #fff;
          border-color: #fff;
        }

        .btn-hero-secondary:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-3px);
        }

        .hero-img {
          max-width: 500px;
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
          object-fit: cover;
        }

        .trust-badge {
          color: rgba(255,255,255,0.9);
          font-size: 0.95rem;
          font-weight: 500;
        }

        /* Main content */
        main { padding: 4rem 1rem; }

        .section-title {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--dark);
        }

        .section-lead {
          color: var(--muted);
          font-size: 1.05rem;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .card-like {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
        }

        .card-like:hover {
          box-shadow: 0 12px 32px rgba(0,0,0,0.1);
          transform: translateY(-4px);
        }

        .card-like h4 {
          color: var(--dark);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .card-like p { color: var(--muted); }

        .cta-section {
          background: var(--light);
          border-radius: 12px;
          padding: 3rem 2rem;
          margin-top: 3rem;
        }

        .cta-section h3 {
          color: var(--dark);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cta-section p { color: var(--muted); margin-bottom: 1.5rem; }

        .btn-cta {
          background: var(--secondary);
          color: #fff;
          border: 0;
          padding: 0.75rem 2rem;
          border-radius: 6px;
          font-weight: 600;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 168, 89, 0.15);
        }

        .btn-cta:hover {
          background: #008a4d;
          box-shadow: 0 4px 12px rgba(0, 168, 89, 0.3);
          transform: translateY(-2px);
          color: #fff;
        }

        /* Footer */
        footer {
          background: var(--dark);
          color: rgba(255,255,255,0.7);
          padding: 2rem 1rem;
          text-align: center;
          font-size: 0.9rem;
        }

        footer a { color: var(--primary); text-decoration: none; }
        footer a:hover { text-decoration: underline; }

        /* Offcanvas mobile menu */
        .offcanvas { background: #fff; }
        .offcanvas-header { border-bottom: 1px solid var(--border); }
        .offcanvas .nav-link { color: var(--text); font-weight: 500; }
        .offcanvas .nav-link:hover { color: var(--primary); }

        /* Responsive */
        @media (max-width: 991.98px) {
          header.hero { padding: 3.5rem 1rem; }
          .hero-cta { flex-direction: column; }
          .btn-hero { width: 100%; text-align: center; }
          .cta-section { padding: 2rem 1.5rem; }
        }

        @media (max-width: 575.98px) {
          .hero-title { font-size: 1.75rem; }
          .hero-lead { font-size: 1rem; }
          main { padding: 2rem 0.75rem; }
          .card-like { padding: 1.5rem; }
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
              <rect width="32" height="32" rx="6" fill="var(--primary)"></rect>
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                fill="#fff"
                dy=".35em"
                fontWeight="700"
                fontSize="18"
              >
                P
              </text>
            </svg>
            Pro Hub
          </a>

          {/* Desktop nav */}
          <div className="d-none d-lg-flex align-items-center ms-auto gap-2">
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
            className="btn btn-outline-primary d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <div className="row align-items-center g-4">
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

            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <img
                src="pics/note-hand.jpg"
                alt="learning illustration"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className="offcanvas offcanvas-fullscreen d-lg-none"
        tabIndex="-1"
        id="mobileMenu"
        aria-label="Navigation menu"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column justify-content-center align-items-center">
          <nav className="nav flex-column text-center w-100">
            <a className="nav-link fs-4 py-3" href="#">
              Home
            </a>
            <a className="nav-link fs-4 py-3" href="#">
              Features
            </a>
            <a className="nav-link fs-4 py-3" href="#">
              Pricing
            </a>
            <a className="nav-link fs-4 py-3" href="#">
              Docs
            </a>
          </nav>
          <button className="btn btn-primary-nav mt-4 w-auto">
            Get Started
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main>
        <div className="container">
          <h2 className="section-title">Learn With The Best</h2>
          <p className="section-lead">
            We provide a professional environment focused on your success.
            Expert instructors, curated curriculum, and real-world projects.
          </p>

          <div className="row g-4 mb-4">
            <div className="col-12 col-md-6">
              <div className="card-like">
                <h4>📚 Structured Curriculum</h4>
                <p>
                  Follow a carefully designed path from fundamentals to advanced
                  concepts.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="card-like">
                <h4>👨‍🏫 Expert Mentorship</h4>
                <p>
                  Get guidance from experienced developers who understand your
                  challenges.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h3>Build Your Future</h3>
            <p>
              Join thousands of students transforming their careers through
              quality education.
            </p>
            <button className="btn btn-cta">Apply Now →</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        &copy; {new Date().getFullYear()} Pro Hub. All rights reserved. |{" "}
        <a href="#">Privacy</a> • <a href="#">Terms</a>
      </footer>
    </div>
  );
}

export default Header;
