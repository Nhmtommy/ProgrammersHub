// Footer.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// ==================== FOOTER COMPONENT ====================
const Footer = () => {
  // ==================== STATE MANAGEMENT ====================
  // State objects to manage which dropdown sections are open on mobile
  const [openSections, setOpenSections] = useState({
    services: false,
    technologies: false,
    support: false,
    newsletter: false,
  });

  // Get current year for copyright notice
  const currentYear = new Date().getFullYear();

  // ==================== TOGGLE DROPDOWN HANDLER ====================
  // Toggle the open/closed state of a specific dropdown section
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      {/* ==================== CUSTOM STYLES ==================== */}
      <style>
        {`
          /* ========== DESIGN TOKENS ========== */
          :root {
            --primary: #0066cc;
            --primary-dark: #0052a3;
            --primary-light: #3d8eff;
          }

          /* ========== FOOTER LINK HOVER EFFECTS ========== */
          /* Smooth color transition on link hover */
          .hover-text-primary {
            transition: all 0.2s ease;
            color: #999 !important;
          }

          /* Link hover state with primary color and animation */
          .hover-text-primary:hover {
            color: var(--primary) !important;
            transform: translateX(4px);
          }

          /* ========== SOCIAL LINKS ========== */
          /* Social media icon styling */
          .social-links a {
            transition: all 0.3s ease;
            display: inline-block;
          }

          /* Social link hover with scale and color effect */
          .social-links a:hover {
            color: var(--primary) !important;
            transform: translateY(-4px) scale(1.15);
          }

          /* ========== DROPDOWN SECTION STYLING ========== */
          /* Dropdown toggle button for mobile sections */
          .dropdown-toggle-footer {
            background: transparent;
            border: none;
            color: inherit;
            cursor: pointer;
            width: 100%;
            text-align: left;
            padding: 0;
            transition: all 0.2s ease;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          /* Dropdown toggle hover effect */
          .dropdown-toggle-footer:hover {
            color: var(--primary);
          }

          /* Dropdown toggle active state */
          .dropdown-toggle-footer.active {
            color: var(--primary);
          }

          /* Chevron icon rotation animation */
          .dropdown-chevron {
            transition: transform 0.3s ease;
            display: inline-block;
          }

          /* Rotated chevron when dropdown is open */
          .dropdown-chevron.open {
            transform: rotate(180deg);
          }

          /* ========== DROPDOWN CONTENT STYLING ========== */
          /* Container for dropdown content */
          .dropdown-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }

          /* Show dropdown content when open */
          .dropdown-content.open {
            max-height: 500px;
          }

          /* ========== RESPONSIVE BEHAVIOR ========== */
          /* Desktop view - hide dropdown toggles and show all sections */
          @media (min-width: 992px) {
            .dropdown-toggle-footer {
              display: none;
            }

            .dropdown-content {
              max-height: none;
            }
          }

          /* Mobile view - show dropdown toggles */
          @media (max-width: 991.98px) {
            .dropdown-toggle-footer {
              display: flex;
            }
          }

          /* ========== NEWSLETTER INPUT STYLING ========== */
          /* Newsletter email input field */
          .newsletter-input {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #fff;
            transition: all 0.2s ease;
          }

          /* Newsletter input focus state */
          .newsletter-input:focus {
            background: rgba(255, 255, 255, 0.15);
            border-color: var(--primary);
            color: #fff;
            box-shadow: 0 0 0 0.2rem rgba(0, 102, 204, 0.25);
          }

          /* Newsletter input placeholder text */
          .newsletter-input::placeholder {
            color: rgba(255, 255, 255, 0.6);
          }

          /* ========== NEWSLETTER BUTTON STYLING ========== */
          /* Newsletter submit button with primary theme */
          .btn-newsletter {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
            border: 0;
            color: #fff;
            font-weight: 600;
            transition: all 0.2s ease;
            box-shadow: 0 4px 12px rgba(0, 102, 204, 0.25);
          }

          /* Newsletter button hover effect */
          .btn-newsletter:hover {
            background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
            box-shadow: 0 6px 18px rgba(0, 102, 204, 0.35);
            transform: translateY(-2px);
            color: #fff;
          }
        `}
      </style>

      <div className="container">
        {/* ==================== MAIN FOOTER GRID ==================== */}
        <div className="row">
          {/* ========== COMPANY INFO SECTION ========== */}
          {/* Always visible - company branding and social links */}
          <div className="col-lg-4 col-md-6 mb-4">
            {/* Company title with primary color */}
            <h5 className="text-primary mb-3">
              <i className="fas fa-code me-2"></i>
              Programmers Hub <sub>Bukasa</sub>
            </h5>

            {/* Company description */}
            <p className="text-muted">
              We deliver cutting-edge development services to transform your
              ideas into reality. <br />
              We mentor new programming students in there tech carrers.
            </p>

            {/* Social media links with hover effects */}
            <div className="social-links mt-3">
              {/* Twitter link */}
              <a href="#" className="text-light me-3" aria-label="Twitter">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              {/* LinkedIn link */}
              <a href="#" className="text-light me-3" aria-label="LinkedIn">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              {/* GitHub link */}
              <a href="#" className="text-light me-3" aria-label="GitHub">
                <i className="fab fa-github fa-lg"></i>
              </a>
              {/* Discord link */}
              <a href="#" className="text-light" aria-label="Discord">
                <i className="fab fa-discord fa-lg"></i>
              </a>
            </div>
          </div>

          {/* ========== SERVICES SECTION ========== */}
          {/* Desktop: Always visible | Mobile: Collapsible dropdown */}
          <div className="col-lg-2 col-md-6 mb-4">
            {/* Dropdown toggle button for mobile */}
            <button
              className={`dropdown-toggle-footer mb-3 ${
                openSections.services ? "active" : ""
              }`}
              onClick={() => toggleSection("services")}
              aria-expanded={openSections.services}
            >
              {/* Section title */}
              <span className="text-uppercase fw-bold">Navigation</span>
              {/* Chevron icon that rotates on open */}
              <span
                className={`dropdown-chevron ${
                  openSections.services ? "open" : ""
                }`}
              >
                <i className="fas fa-chevron-down"></i>
              </span>
            </button>

            {/* Dropdown content - shown on mobile when expanded */}
            <div
              className={`dropdown-content ${
                openSections.services ? "open" : ""
              }`}
            >
              <ul className="list-unstyled">
                {/* Web Development link */}
                <li className="mb-2">
                  <a
                    href="home"
                    className="text-muted text-decoration-none hover-text-primary"
                  >
                    Home
                  </a>
                </li>
                {/* Mobile Apps link */}
                <li className="mb-2">
                  <a
                    href="about"
                    className="text-muted text-decoration-none hover-text-primary"
                  >
                    About Us
                  </a>
                </li>
                {/* Cloud Solutions link */}
                <li className="mb-2">
                  <a
                    href="courses"
                    className="text-muted text-decoration-none hover-text-primary"
                  >
                    Courses
                  </a>
                </li>
                {/* DevOps link */}
                <li className="mb-2">
                  <a
                    href="about#team"
                    className="text-muted text-decoration-none hover-text-primary"
                  >
                    Our Team
                  </a>
                </li>
                {/* UI/UX Design link */}
                <li className="mb-2"></li>
              </ul>
            </div>
          </div>

          {/* ========== TECHNOLOGIES SECTION ========== */}
          {/* Desktop: Always visible | Mobile: Collapsible dropdown */}
          <div className="col-lg-2 col-md-6 mb-4">
            {/* Dropdown toggle button for mobile */}
            <button
              className={`dropdown-toggle-footer mb-3 ${
                openSections.technologies ? "active" : ""
              }`}
              onClick={() => toggleSection("technologies")}
              aria-expanded={openSections.technologies}
            >
              {/* Section title */}
              <span className="text-uppercase fw-bold">Technologies</span>
              {/* Chevron icon that rotates on open */}
              <span
                className={`dropdown-chevron ${
                  openSections.technologies ? "open" : ""
                }`}
              >
                <i className="fas fa-chevron-down"></i>
              </span>
            </button>

            {/* Dropdown content - shown on mobile when expanded */}
            <div
              className={`dropdown-content ${
                openSections.technologies ? "open" : ""
              }`}
            >
              <ul className="list-unstyled">
                {/* React & Node.js link */}
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-muted text-decoration-none hover-text-primary"
                  >
                    HTML and CSS
                  </a>
                </li>
                {/* Python & Django link */}
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-muted text-decoration-none hover-text-primary"
                  >
                    Python & Django
                  </a>
                </li>
                {/* AWS & Azure link */}
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-muted text-decoration-none hover-text-primary"
                  >
                    GoLang
                  </a>
                </li>

                {/* Machine Learning link */}
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-muted text-decoration-none hover-text-primary"
                  >
                    Javascript & Next.js
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ========== SUPPORT SECTION ========== */}
          {/* Desktop: Always visible | Mobile: Collapsible dropdown */}
          <div className="col-lg-2 col-md-6 mb-4">
            {/* Dropdown toggle button for mobile */}
            <button
              className={`dropdown-toggle-footer mb-3 ${
                openSections.support ? "active" : ""
              }`}
              onClick={() => toggleSection("support")}
              aria-expanded={openSections.support}
            >
              {/* Section title */}
              <span className="text-uppercase fw-bold">Support</span>
              {/* Chevron icon that rotates on open */}
              <span
                className={`dropdown-chevron ${
                  openSections.support ? "open" : ""
                }`}
              >
                <i className="fas fa-chevron-down"></i>
              </span>
            </button>

            {/* Dropdown content - shown on mobile when expanded */}
            <div
              className={`dropdown-content ${
                openSections.support ? "open" : ""
              }`}
            >
              <ul className="list-unstyled">
                {/* Contact Us link */}
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-muted text-decoration-none hover-text-primary"
                  >
                    Contact Us
                  </a>
                </li>
                {/* Documentation link */}
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-muted text-decoration-none hover-text-primary"
                  >
                    Documentation
                  </a>
                </li>
                {/* API Reference link */}
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-muted text-decoration-none hover-text-primary"
                  >
                    API Reference
                  </a>
                </li>
                {/* Community link */}
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-muted text-decoration-none hover-text-primary"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==================== DIVIDER ==================== */}
        {/* Horizontal separator line */}
        <hr className="my-4 border-secondary" />

        {/* ==================== FOOTER BOTTOM SECTION ==================== */}
        <div className="row align-items-center">
          {/* Copyright notice - left aligned on desktop, full width on mobile */}
          <div className="col-md-6 mb-2 mb-md-0">
            <p className="text-muted mb-0">
              &copy; {currentYear} Programmers Hub. All rights reserved. <br />
              Developed with love by <a href="#">Kisuze Nahum</a>
            </p>
          </div>

          {/* Legal links - right aligned on desktop, centered on mobile */}
          <div className="col-md-6 text-md-end text-center">
            <ul className="list-inline mb-0">
              {/* Privacy Policy link */}
              <li className="list-inline-item">
                <a
                  href="#"
                  className="text-muted text-decoration-none small hover-text-primary"
                >
                  Privacy Policy
                </a>
              </li>

              {/* Separator dot */}
              <li className="list-inline-item mx-2">•</li>

              {/* Terms of Service link */}
              <li className="list-inline-item">
                <a
                  href="#"
                  className="text-muted text-decoration-none small hover-text-primary"
                >
                  Terms of Service
                </a>
              </li>

              {/* Separator dot */}
              <li className="list-inline-item mx-2">•</li>

              {/* Cookie Policy link */}
              <li className="list-inline-item">
                <a
                  href="#"
                  className="text-muted text-decoration-none small hover-text-primary"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Export footer component for use in other parts of the application
export default Footer;
