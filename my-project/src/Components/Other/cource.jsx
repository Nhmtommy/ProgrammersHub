import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "../Header files/footer";
import { Link } from "react-router-dom";

function Courses() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  // Course data
  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      category: "web",
      level: "Beginner",
      duration: "8 weeks",
      price: "UGX 99.9k",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Learn HTML, CSS, and JavaScript from scratch. Build your first website and understand core web development concepts.",
      features: [
        "HTML5 & CSS3",
        "JavaScript Basics",
        "Responsive Design",
        "Git & GitHub",
        "Project Portfolio",
      ],
      popular: false,
    },
    {
      id: 2,
      title: "FullStack Development",
      category: "web",
      level: "Intermediate",
      duration: "10 weeks",
      price: "UGX 499.9k",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Master React.js, hooks, state management, and modern frontend development practices.",
      features: [
        "React Components",
        "Hooks & Context",
        "State Management",
        "API Integration",
        "Testing",
      ],
      popular: true,
    },
    {
      id: 3,
      title: "Python Programming",
      category: "programming",
      level: "Beginner",
      duration: "6 weeks",
      price: "UGX 199.9k",
      image:
        "https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg",
      description:
        "Start your programming journey with Python. Learn syntax, data structures, and problem-solving.",
      features: [
        "Python Syntax",
        "Data Structures",
        "OOP Concepts",
        "File Handling",
        "Mini Projects",
      ],
      popular: false,
    },
    {
      id: 4,
      title: "Javscript Programming",
      category: "programming",
      level: "Beginner",
      duration: "6 weeks",
      price: "UGX 299.9k",
      image:
        "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1024,q_auto",
      description:
        "Start your programming journey with Javascript. Learn syntax, data structures, and problem-solving.",
      features: [
        "Javascript Syntax",
        "Data Structures",
        "OOP Concepts",
        "Mini Projects",
        "Problem Solving",
      ],
      popular: false,
    },
  ];

  const categories = [
    { id: "all", name: "All Courses", count: courses.length },
    {
      id: "web",
      name: "Web Development",
      count: courses.filter((c) => c.category === "web").length,
    },
    {
      id: "programming",
      name: "Programming",
      count: courses.filter((c) => c.category === "programming").length,
    },
  ];

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

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

        /* ========== COURSES HERO SECTION ========== */
        .courses-hero {
          background: linear-gradient(135deg, #0066cc 0%, #02284eff 100%);
          color: #fff;
          min-height: 50vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 1.5rem 2rem 1.5rem;
          position: relative;
          overflow: hidden;
          margin: 0;
        }

        .courses-hero::before {
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

        .courses-hero::after {
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

        .courses-hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
        }

        .courses-hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.15;
          margin-bottom: 1.75rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .courses-hero-lead {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 2.5rem;
          line-height: 1.75;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 400;
        }

        /* ========== COURSE CATEGORIES FILTER ========== */
        .categories-section {
          padding: 3rem 1.5rem;
          background: #fff;
        }

        .categories-filter {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .category-btn {
          background: #fff;
          border: 2px solid var(--border);
          color: var(--text);
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .category-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-2px);
        }

        .category-btn.active {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          color: #fff;
          border-color: var(--primary);
          box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
        }

        .category-count {
          background: rgba(255, 255, 255, 0.2);
          color: inherit;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 700;
        }

        /* ========== COURSES GRID ========== */
        .courses-section {
          padding: 2rem 1.5rem;
          background: linear-gradient(135deg, rgba(0, 102, 204, 0.05) 0%, rgba(61, 142, 255, 0.02) 100%);
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .course-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 15px rgba(0, 102, 204, 0.08);
          position: relative;
        }

        .course-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 35px rgba(0, 102, 204, 0.2);
          border-color: var(--primary);
        }

        .course-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, var(--secondary) 0%, #00cc66 100%);
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          z-index: 2;
        }

        .course-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .course-content {
          padding: 1.5rem;
        }

        .course-category {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .course-title {
          color: var(--dark);
          font-weight: 700;
          font-size: 1.3rem;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .course-description {
          color: var(--muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .course-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--muted);
          font-size: 0.85rem;
          font-weight: 600;
        }

        .meta-icon {
          color: var(--primary);
          font-weight: bold;
        }

        .course-price {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .course-features {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem 0;
        }

        .course-features li {
          color: var(--text);
          font-size: 0.9rem;
          padding: 0.3rem 0;
          padding-left: 1.5rem;
          position: relative;
        }

        .course-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: 700;
          font-size: 1.1rem;
        }

        .course-btn {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          color: #fff;
          border: 0;
          border-radius: 8px;
          padding: 0.8rem 1.5rem;
          font-weight: 600;
          font-size: 0.9rem;
          width: 100%;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 102, 204, 0.2);
          cursor: pointer;
        }

        .course-btn:hover {
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 102, 204, 0.3);
          color: #fff;
        }

        .course-btn-free {
          background: linear-gradient(135deg, var(--secondary) 0%, #00cc66 100%);
        }

        .course-btn-free:hover {
          background: linear-gradient(135deg, #00994d 0%, var(--secondary) 100%);
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
          font-size: 1.25rem;
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
          .courses-hero { padding: 100px 1rem 1rem 1rem; min-height: 40vh; }
          .courses-hero-title { font-size: 2.1rem; }
          .courses-hero-lead { font-size: 0.95rem; }
          .categories-filter { gap: 0.5rem; }
          .category-btn { padding: 0.6rem 1rem; font-size: 0.9rem; }
          .courses-grid { grid-template-columns: 1fr; }
          .cta-section { padding: 60px 1rem; }
          .cta-title { font-size: 2rem; }
        }

        @media (max-width: 575.98px) {
          .courses-hero { padding: 90px 0.75rem 0.75rem 0.75rem; }
          .courses-hero-title { font-size: 1.8rem; }
          .categories-filter { flex-direction: column; align-items: center; }
          .category-btn { width: 200px; justify-content: center; }
          .course-card { margin: 0 auto; max-width: 100%; }
        }
      `}</style>

      {/* ==================== NAVBAR SECTION ==================== */}
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
            <Link className="nav-link" to="/contact">
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
            <Link to="/contact">
              <button className="btn btn-primary-nav">Get Started</button>
            </Link>
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
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/courses" onClick={() => setMenuOpen(false)}>
                Courses
              </Link>
              <Link to="#" onClick={() => setMenuOpen(false)}>
                Contact
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
            }}
          >
            PRO HUB v1.0.0
          </p>
        </div>
      </div>

      {/* ==================== COURSES HERO SECTION ==================== */}
      <section className="courses-hero">
        <div className="container">
          <div className="courses-hero-content">
            <h1 className="courses-hero-title">Our Courses</h1>
            <p className="courses-hero-lead">
              Master in-demand tech skills with our comprehensive, project-based
              courses. From beginner to advanced levels, we have the perfect
              learning path for you.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== COURSE CATEGORIES FILTER ==================== */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-filter">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
                <span className="category-count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== COURSES GRID ==================== */}
      <section className="courses-section">
        <div className="container">
          <div className="courses-grid">
            {filteredCourses.map((course) => (
              <div key={course.id} className="course-card">
                {course.popular && (
                  <div className="course-badge">Most Popular</div>
                )}
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image"
                />
                <div className="course-content">
                  <div className="course-category">
                    {course.category.toUpperCase()} • {course.level}
                  </div>
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.description}</p>

                  <div className="course-meta">
                    <div className="meta-item">
                      <span className="meta-icon">⏱</span>
                      {course.duration}
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">📚</span>
                      {course.level}
                    </div>
                  </div>

                  <div className="course-price">
                    {course.price === "Free" ? "Free" : course.price}
                  </div>

                  <ul className="course-features">
                    {course.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>

                  <button
                    className={`course-btn ${
                      course.price === "Free" ? "course-btn-free" : ""
                    }`}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Start Learning?</h2>
          <p className="cta-description">
            Join students who are transforming their careers through our
            courses. Start your programming journey today with expert guidance
            and a supportive community.
          </p>
          <button className="cta-button">Join Us</button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Courses;
