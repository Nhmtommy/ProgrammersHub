import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HorizontalScrollCards from "./auto scroll";
import Footer from "./footer";

function Header() {
  // ==================== STATE MANAGEMENT ====================
  // State to manage mobile menu open/close
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
          font-size: 1.35rem;
          letter-spacing: -0.015em;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: transform 0.2s ease;
        }

        /* Brand hover effect - subtle lift */
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

        /* Link hover state with color change and shadow */
        .navbar-nav .nav-link:hover {
          color: var(--primary);
          background: rgba(0, 102, 204, 0.08);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 102, 204, 0.12);
        }

        /* ========== DESKTOP SPECIFIC NAV EFFECTS ========== */
        @media (min-width: 992px) {
          .navbar-nav .nav-link {
            overflow: hidden;
          }

          .navbar-nav .nav-link::after {
            bottom: 0;
          }

          /* Enhanced glow effect on desktop hover */
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

        /* Button hover with enhanced shadow and lift */
        .btn-primary-nav:hover {
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
          box-shadow: 0 8px 25px rgba(0, 102, 204, 0.4);
          transform: translateY(-3px);
          color: #fff;
        }

        /* ========== HERO SECTION STYLING ========== */
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

        /* Top right floating circle background element */
        header.hero::before {
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

        /* Bottom left floating circle background element */
        header.hero::after {
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

        /* Floating animation keyframes */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }

        /* Hero content z-index layering */
        .hero-content {
          position: relative;
          z-index: 10;
        }

        /* ========== HERO TITLE STYLING ========== */
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.15;
          margin-bottom: 1.75rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        /* ========== HERO LEAD TEXT ========== */
        .hero-lead {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 2.5rem;
          line-height: 1.75;
          max-width: 600px;
          font-weight: 400;
        }

        /* ========== CTA BUTTONS CONTAINER ========== */
        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        /* ========== HERO BUTTON BASE STYLING ========== */
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
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }

        /* Primary hero button (white background) */
        .btn-hero-primary {
          background: #fff;
          color: var(--primary);
          border-color: #fff;
        }

        .btn-hero-primary:hover {
          background: var(--light);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
          letter-spacing: 0.03em;
        }

        /* Secondary hero button (transparent with glassmorphism) */
        .btn-hero-secondary {
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
          border-color: #fff;
          backdrop-filter: blur(10px);
        }

        .btn-hero-secondary:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: #fff;
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(255, 255, 255, 0.2);
        }

        /* ========== HERO IMAGE STYLING ========== */
        .hero-img {
          max-width: 500px;
          width: 100%;
          border-radius: 16px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
          object-fit: cover;
          animation: slideUp 0.8s ease-out;
          border: 3px solid rgba(255, 255, 255, 0.1);
        }

        /* Image slide-up animation on page load */
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ========== TRUST BADGE STYLING ========== */
        .trust-badge {
          color: rgba(255, 255, 255, 0.95);
          font-size: 1.05rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          display: inline-block;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* ========== PROFESSIONAL CARD STYLING ========== */
        /* Card container with professional styling aligned with website theme */
        .phb-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem 1.5rem;
          height: 100%;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 15px rgba(0, 102, 204, 0.08);
          position: relative;
          overflow: hidden;
        }

        /* Card hover effect - lift and enhanced shadow */
        .phb-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 35px rgba(0, 102, 204, 0.2);
          border-color: var(--primary);
        }

        /* Card icon styling with gradient background */
        .phb-card-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Card title styling */
        .phb-card-title {
          color: var(--dark);
          font-weight: 700;
          font-size: 1.3rem;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }

        /* Card description text */
        .phb-card-description {
          color: var(--muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        /* Card features list styling */
        .phb-card-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        /* Individual feature item */
        .phb-card-features li {
          color: var(--text);
          font-size: 0.9rem;
          padding: 0.4rem 0;
          padding-left: 1.5rem;
          position: relative;
        }

        /* Feature checkmark styling */
        .phb-card-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: 700;
          font-size: 1.1rem;
        }

        /* Card button styling */
        .phb-card-btn {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          color: #fff;
          border: 0;
          border-radius: 8px;
          padding: 0.7rem 1.5rem;
          font-weight: 600;
          font-size: 0.9rem;
          margin-top: 1rem;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 102, 204, 0.2);
          cursor: pointer;
        }

        /* Button hover effect */
        .phb-card-btn:hover {
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 102, 204, 0.3);
          color: #fff;
          text-decoration: none;
        }

        /* ========== MID SECTION STYLING ========== */
        /* Section between hero and services with gradient background */
        .mid-sec {
          background: linear-gradient(135deg, #ffffffff 0%, #ffffff 100%);
          color: #fff;
          height: auto;
          width: 100%;
          align-items: center;
          justify-content: center;
          padding: 60px 1.5rem;
          position: relative;
          overflow: hidden;
          margin: 0;
        }

        /* ========== MID SECTION CARDS CONTAINER ========== */
        /* Grid layout for cards in mid section */
        .mid-sec-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        /* ========== STATS SECTION STYLING ========== */
        /* Section showcasing key statistics and highlights */
        .stats-section {
          background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
          padding: 60px 1.5rem;
          color: #fff !important;
          position: relative;
          overflow: hidden;
        }

        /* Stats container grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        /* Individual stat item */
        .stat-item {
          text-align: center;
          transition: transform 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-4px);
        }

        /* Stat number styling */
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.5rem;
        }

        /* Stat label styling */
        .stat-label {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
        }

        /* ========== CTA SECTION STYLING ========== */
        /* Call-to-action section for recruitment */
        .cta-section {
          background: linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(61, 142, 255, 0.05) 100%);
          border: 2px solid var(--border);
          border-radius: 16px;
          padding: 3rem 2rem;
          text-align: center;
          margin: 3rem 0;
        }

        /* CTA title */
        .cta-section h3 {
          color: var(--dark);
          font-weight: 700;
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }

        /* CTA description */
        .cta-section p {
          color: var(--muted);
          font-size: 1rem;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* CTA button styling */
        .cta-btn {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          color: #fff;
          border: 0;
          border-radius: 8px;
          padding: 0.9rem 2.5rem;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
        }

        .cta-btn:hover {
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 102, 204, 0.4);
          color: #fff;
          text-decoration: none;
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

        /* Overlay active state */
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

        /* Panel active state - slide in from right */
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

        /* Close button hover with rotation effect */
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

        /* Section title with uppercase styling */
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

        /* Mobile nav hover effect with gradient background */
        .mobile-nav a:hover {
          background: linear-gradient(90deg, rgba(0, 102, 204, 0.1), transparent);
          color: var(--primary);
          padding-left: 1.35rem;
        }

        /* Left border indicator for mobile nav links */
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

        /* Animate left border on hover */
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

        /* Hamburger hover effect */
        .mobile-hamburger:hover {
          background: var(--primary);
          color: #fff;
          transform: scale(1.05);
        }

        /* Active hamburger state */
        .mobile-hamburger.active {
          color: var(--primary-dark);
          border-color: var(--primary-dark);
        }

        /* ========== RESPONSIVE BREAKPOINTS ========== */

        /* Tablet and below (max-width: 991.98px) */
        @media (max-width: 991.98px) {
          .hero-title { font-size: 2.5rem; margin-bottom: 1.5rem; }
          .hero-lead { font-size: 1rem; margin-bottom: 2rem; }
          .hero-cta { flex-direction: column; margin-bottom: 2.5rem; }
          .btn-hero { width: 100%; text-align: center; padding: 0.9rem 1.75rem; }
          header.hero { padding: 120px 1.25rem 1.5rem 1.25rem; }
          .mid-sec-cards { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* Medium tablet (max-width: 767.98px) */
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

          .mobile-menu-panel { max-width: 100%; }
          .mobile-menu-header { padding: 1.5rem; }
          .mobile-menu-body { padding: 2rem 1.25rem; }
          .mobile-menu-footer { padding: 1.75rem 1.25rem; }
          .mobile-nav a { padding: 1rem 0.9rem; }
          .site-navbar { padding: 0.75rem 0; }
          .mid-sec-cards { grid-template-columns: 1fr; }
          .phb-card { padding: 1.5rem; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .cta-section { padding: 2rem 1.5rem; }
        }

        /* Small mobile (max-width: 575.98px) */
        @media (max-width: 575.98px) {
          header.hero {
            padding: 90px 0.75rem 0.75rem 0.75rem;
            min-height: 100vh;
          }

          .hero-title {
            font-size: 5rem;
            margin-bottom: 1rem;
            font-weight: 800;
          }

          .hero-title2 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            font-weight: 400;
          }

          .hero-lead {
            font-size: 1.4rem;
            margin-bottom: 1.5rem;
            line-height: 1.6;
            font-weight: 300;
          }

          .btn-hero {
            padding: 0.8rem 1.25rem;
            font-size: 0.85rem;
          }

          .mobile-menu-body { padding: 1.75rem 0.9rem; }
          .mobile-menu-section { margin-bottom: 2rem; }
          .mobile-nav a { padding: 0.95rem 0.8rem; font-size: 0.9rem; }
          .mobile-menu-section-title { font-size: 0.75rem; padding-left: 0.8rem; }
          .trust-badge { font-size: 0.85rem; padding: 0.65rem 1.25rem; }
          .mid-sec { padding: 40px 1rem; }
          .mid-sec-cards { grid-template-columns: 1fr; gap: 1rem; }
          .phb-card { padding: 1.25rem; }
          .phb-card-title { font-size: 1.1rem; }
          .phb-card-description { font-size: 0.85rem; }
          .stats-section { padding: 40px 1rem; }
          .stats-grid { grid-template-columns: 1fr; gap: 1rem; }
          .stat-number { font-size: 2rem; }
          .cta-section { padding: 1.5rem 1rem; }
          .cta-section h3 { font-size: 1.3rem; }
        }
      `}</style>

      {/* ==================== NAVBAR SECTION ==================== */}
      <nav className="navbar site-navbar">
        <div className="container">
          {/* Logo/Brand Section */}
          <a className="navbar-brand site-brand" href="/">
            {/* SVG Icon with gradient */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              aria-hidden
              focusable="false"
            >
              <defs>
                {/* Gradient definition for brand icon */}
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
              {/* Background rounded rectangle */}
              <rect width="32" height="32" rx="8" fill="url(#brandGrad)"></rect>
              {/* Letter P text */}
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
            {/* Brand text */}
            Programmer's Hub <br /> <sub>Bukasa</sub>
          </a>

          {/* Desktop Navigation - Hidden on tablets and below */}
          <div className="d-none d-lg-flex align-items-center ms-auto gap-4">
            {/* Navigation Links */}
            <a className="nav-link" href="#courses">
              Courses
            </a>
            <a className="nav-link" href="#community">
              Community
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>

            {/* Visual Separator between nav links and CTA button */}
            <div
              style={{
                width: "1px",
                height: "24px",
                background: "var(--border)",
                margin: "0 0.5rem",
              }}
            ></div>

            {/* Primary CTA Button */}
            <button className="btn btn-primary-nav">Get Started</button>
          </div>

          {/* Mobile Hamburger Menu Button - Visible only on tablets and below */}
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
      {/* Clicking overlay closes the menu */}
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
        {/* Menu Header with Close Button */}
        <div className="mobile-menu-header">
          <h5>Menu</h5>
          {/* Close button with X icon */}
          <button
            className="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Menu Body with Sections */}
        <div className="mobile-menu-body">
          {/* Main Navigation Section */}
          <div className="mobile-menu-section">
            <div className="mobile-menu-section-title">Navigation</div>
            <nav className="mobile-nav">
              <a href="#courses" onClick={() => setMenuOpen(false)}>
                Explore Courses
              </a>
              <a href="#community" onClick={() => setMenuOpen(false)}>
                Join Community
              </a>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About Pro Hub
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Get in Touch
              </a>
            </nav>
          </div>

          {/* Resources Section */}
          <div className="mobile-menu-section">
            <div className="mobile-menu-section-title">Resources</div>
            <nav className="mobile-nav">
              <a href="#blog" onClick={() => setMenuOpen(false)}>
                Blog & Articles
              </a>
              <a href="#events" onClick={() => setMenuOpen(false)}>
                Events
              </a>
              <a href="#faq" onClick={() => setMenuOpen(false)}>
                FAQ
              </a>
            </nav>
          </div>
        </div>

        {/* Menu Footer with CTA and Version Info */}
        <div className="mobile-menu-footer">
          {/* Primary CTA Button */}
          <button className="btn btn-primary-nav">Get Started Today</button>
          {/* Version Info */}
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

      {/* ==================== HERO SECTION ==================== */}
      {/* Full-page hero with gradient background */}
      <header className="hero">
        <div className="container">
          {/* Hero content row with flexbox alignment */}
          <div className="row align-items-center g-5 h-100">
            {/* Left column - Text Content */}
            <div className="col-12 col-lg-6 hero-content">
              {/* Main Hero Title */}
              <h1 className="hero-title">
                Build. Learn. <br />
                Code. Repeat.
              </h1>

              {/* Hero Subtitle/Lead Text - More natural and startup-focused */}
              <p className="hero-lead">
                Join a vibrant community of passionate programmers. Learn from
                real-world projects, get mentored by industry professionals, and
                launch your coding career—all in one place.
              </p>

              {/* CTA Buttons Container */}
              <div className="hero-cta">
                {/* Primary CTA - Explore Courses */}
                <button className="btn btn-hero btn-hero-primary">
                  Learn More
                </button>

                {/* Secondary CTA - Join Community */}
                <button className="btn btn-hero btn-hero-secondary">
                  Join Community
                </button>
              </div>

              {/* Trust badge showing social proof */}
              <p className="trust-badge">
                ✓ Join students building amazing projects
              </p>
            </div>

            {/* Right column - Hero Image */}
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
              {/* Hero image with responsive sizing */}
              <img
                src="https://media.istockphoto.com/id/1344416095/photo/software-development.jpg?s=1024x1024&w=is&k=20&c=5j5Fl5NYIKc2cX5v45eMB5_TEGdsaX1qfTuJDTX9FJQ="
                alt="Software development illustration"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </header>
      <hr  />

      {/* ==================== STATS SECTION ==================== */}
      {/* Section showcasing key achievements and community growth */}
      <section className="stats-section">
        <div className="container">
          {/* Section Header */}
          <div className="row mb-4">
            <div className="col">
              {/* Section title */}
              <h2 className="display-6 fw-bold text-center">
                Programmer's Hub By The Numbers
              </h2>
              {/* Section subtitle */}
              <p
                className="text-center"
                style={{
                  fontSize: "1.05rem",
                  color: "rgba(255, 255, 255, 0.9)",
                }}
              >
                A growing community of begginers to adavanced developers
                achieving real results
              </p>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="stats-grid">
            {/* Stat 1: Active Members */}
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Reach Outs</div>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(255, 255, 255, 0.7)",
                  marginTop: "0.5rem",
                }}
              >
                Growing daily
              </p>
            </div>

            {/* Stat 2: Courses Available */}
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Core Courses</div>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(255, 255, 255, 0.7)",
                  marginTop: "0.5rem",
                }}
              >
                Expert-led programs
              </p>
            </div>

            {/* Stat 3: Projects Built */}
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Completed</div>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(255, 255, 255, 0.7)",
                  marginTop: "0.5rem",
                }}
              >
                Real-world experience
              </p>
            </div>

            {/* Stat 4: Success Rate */}
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Completion Rate</div>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(255, 255, 255, 0.7)",
                  marginTop: "0.5rem",
                }}
              >
                Dedicated learners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MID SECTION - KEY FEATURES ==================== */}
      {/* Section highlighting core value propositions */}
      <section className="mid-sec">
        <div className="container">
          {/* Section Header */}
          <div className="row mb-4">
            <div className="col">
              {/* Section title */}
              <h2 className="display-6 fw-bold text-center text-dark">
                Why Choose Programmers Hub <sub>Bukasa</sub>?
              </h2>
              {/* Section subtitle */}
              <p className="text-muted text-center fs-5">
                Everything you need to start and advance your programming
                journey
              </p>
            </div>
          </div>

          {/* Features Cards Grid Container */}
          <div className="mid-sec-cards">
            {/* ========== CARD 1: EXPERT-LED COURSES ========== */}
            <div className="phb-card">
              {/* Card Icon */}
              <div className="phb-card-icon">👨‍🏫</div>

              {/* Card Title */}
              <h3 className="phb-card-title">Expert-Led Courses</h3>

              {/* Card Description */}
              <p className="phb-card-description">
                Learn from experienced developers who share real-world insights,
                best practices, and industry secrets.
              </p>

              {/* Card Features List */}
              <ul className="phb-card-features">
                <li>Structured curriculum</li>
                <li>Hands-on projects</li>
                <li>Code reviews & feedback</li>
              </ul>

              {/* Card Button */}
            </div>

            {/* ========== CARD 2: VIBRANT COMMUNITY ========== */}
            <div className="phb-card">
              {/* Card Icon */}
              <div className="phb-card-icon">🤝</div>

              {/* Card Title */}
              <h3 className="phb-card-title">Vibrant Community</h3>

              {/* Card Description */}
              <p className="phb-card-description">
                Connect with fellow programmers, collaborate on projects, share
                knowledge, and grow together.
              </p>

              {/* Card Features List */}
              <ul className="phb-card-features">
                <li>Active discussions</li>
                <li>Project collaboration</li>
                <li>Networking opportunities</li>
              </ul>

              {/* Card Button */}
            </div>

            {/* ========== CARD 3: REAL-WORLD PROJECTS ========== */}
            <div className="phb-card">
              {/* Card Icon */}
              <div className="phb-card-icon">🚀</div>

              {/* Card Title */}
              <h3 className="phb-card-title">Real-World Projects</h3>

              {/* Card Description */}
              <p className="phb-card-description">
                Build portfolio-worthy projects from day one. Gain practical
                experience that employers love.
              </p>

              {/* Card Features List */}
              <ul className="phb-card-features">
                <li>Guided projects</li>
                <li>Portfolio building</li>
                <li>Industry-standard tools</li>
              </ul>

              {/* Card Button */}
            </div>

            {/* ========== CARD 4: CAREER SUPPORT ========== */}
            <div className="phb-card">
              {/* Card Icon */}
              <div className="phb-card-icon">📈</div>

              {/* Card Title */}
              <h3 className="phb-card-title">Career Support</h3>

              {/* Card Description */}
              <p className="phb-card-description">
                Get guidance for your career journey. Access job opportunities,
                interview prep, and networking.
              </p>

              {/* Card Features List */}
              <ul className="phb-card-features">
                <li>Job board access</li>
                <li>Interview prep</li>
                <li>Mentorship programs</li>
              </ul>

              {/* Card Button */}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HORIZONTAL SCROLL SERVICES SECTION ==================== */}
      {/* Section for scrollable service/course cards */}
      <section id="courses">
        <HorizontalScrollCards />
      </section>

      {/* ==================== CTA SECTION ==================== */}
      {/* Call-to-action section for recruitment */}
      <section className="container">
        <div className="cta-section">
          {/* CTA Title */}
          <h3>Ready to Start Your Coding Journey?</h3>

          {/* CTA Description */}
          <p>
            Join Pro Hub today and become part of a thriving community of
            developers. Whether you're a complete beginner or looking to level
            up, we have the perfect course for you.
          </p>

          {/* CTA Button */}
          <button className="cta-btn">Get Started Now</button>
        </div>
      </section>

      {/* ==================== FOOTER SECTION ==================== */}
      {/* Footer component */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

// Export header component for use in other parts of the app
export default Header;
