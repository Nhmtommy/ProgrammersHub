import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <style>{`
        :root {
          --wp-blue: #0073aa;
          --wp-dark: #222;
          --wp-muted: #6c757d;
          --wp-cta: #00a859;
        }

        .wp-navbar {
          background: #fff;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 1px 0 rgba(0,0,0,0.03);
          padding: 0.6rem 0;
          position: relative;
          z-index: 1200;
        }

        .wp-brand {
          color: var(--wp-blue);
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .wp-sub {
          color: var(--wp-muted);
          font-size: 0.85rem;
          margin-left: .5rem;
        }

        .wp-nav a {
          color: var(--wp-dark);
          font-weight: 500;
          padding: .5rem .75rem;
        }

        .wp-cta {
          background: var(--wp-cta);
          color: #fff;
          border-radius: 6px;
          padding: .45rem .9rem;
          box-shadow: 0 2px 8px rgba(0,168,89,0.14);
          font-weight: 600;
        }

        .wp-hamburger {
          border: 0;
          background: transparent;
          padding: .4rem;
          font-size: 1rem;
          color: var(--wp-blue);
        }

        /* Fullscreen overlay (WordPress-like menu/hero) */
        .wp-overlay {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100vh;
          background: linear-gradient(180deg, rgba(0,115,170,0.96) 0%, rgba(0,88,140,0.96) 100%);
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 1.5rem;
          transition: opacity .25s ease, transform .25s ease;
          z-index: 1190;
        }

        .wp-overlay.hidden {
          opacity: 0;
          transform: translateY(-6%);
          pointer-events: none;
        }

        .wp-overlay .close-btn {
          position: absolute;
          right: 1.25rem;
          top: 1.25rem;
          background: transparent;
          border: 0;
          color: rgba(255,255,255,0.95);
          font-size: 1.6rem;
        }

        .wp-overlay h1 {
          font-size: clamp(2rem, 4.8vw, 3rem);
          margin-bottom: .25rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .wp-overlay p.lead {
          color: rgba(255,255,255,0.92);
          margin-bottom: 1.75rem;
        }

        .wp-links {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .wp-link {
          background: rgba(255,255,255,0.06);
          padding: .9rem 1.25rem;
          border-radius: 8px;
          color: #fff;
          min-width: 160px;
          text-align: center;
          transition: background .15s ease, transform .12s ease;
          font-weight: 600;
        }

        .wp-link:hover {
          background: rgba(255,255,255,0.12);
          transform: translateY(-3px);
          text-decoration: none;
        }

        .wp-search {
          max-width: 720px;
          width: 100%;
        }

        @media (min-width: 992px) {
          .wp-nav { display: flex !important; }
          .wp-hamburger { display: none; }
        }

        @media (max-width: 991.98px) {
          .wp-nav { display: none; }
        }
      `}</style>

      <nav className="navbar wp-navbar container-fluid">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <a
              className="navbar-brand wp-brand d-flex align-items-center"
              href="/"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                aria-hidden="true"
                focusable="false"
                style={{ marginRight: 8 }}
              >
                <circle cx="18" cy="18" r="18" fill="var(--wp-blue)"></circle>
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
              <div>
                Pro Hub <div className="wp-sub">Design · Build · Ship</div>
              </div>
            </a>
          </div>

          <div className="d-flex align-items-center">
            <div className="me-3 wp-nav">
              <a className="nav-link d-inline-block" href="#">
                Home
              </a>
              <a className="nav-link d-inline-block" href="#">
                Features
              </a>
              <a className="nav-link d-inline-block" href="#">
                Docs
              </a>
            </div>

            <button
              className="btn btn-sm me-2 wp-hamburger"
              aria-expanded={open}
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <span className="navbar-toggler-icon" />
            </button>

            <a className="wp-cta" href="#">
              Get Pro Hub
            </a>
          </div>
        </div>
      </nav>

      {/* Fullscreen overlay styled like WordPress hero/menu */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Pro Hub menu"
        className={`wp-overlay ${open ? "" : "hidden"}`}
      >
        <button
          className="close-btn"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          &times;
        </button>

        <h1>Powerful, Flexible, Open</h1>
        <p className="lead">
          A professional toolkit for building modern websites — fast, secure,
          and scalable.
        </p>

        <div className="wp-links" role="navigation" aria-label="Primary">
          <a className="wp-link" href="#">
            Get Started
          </a>
          <a className="wp-link" href="#">
            Download
          </a>
          <a className="wp-link" href="#">
            Extensions
          </a>
          <a className="wp-link" href="#">
            Showcase
          </a>
        </div>

        <form
          className="wp-search"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="input-group">
            <input
              className="form-control form-control-lg"
              type="search"
              placeholder="Search Pro Hub"
              aria-label="Search Pro Hub"
            />
            <button className="btn btn-light btn-lg" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Header;
