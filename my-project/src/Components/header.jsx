import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <span className="fs-4 fw-bold me-2">Pro Hub</span>
            <small className="text-light opacity-75">
              Design • Build • Ship
            </small>
          </a>

          {/* Mobile toggler opens a fullscreen offcanvas on small screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#prohubOffcanvas"
            aria-controls="prohubOffcanvas"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Desktop nav (visible from lg and up) */}
          <div className="navbar-collapse d-none d-lg-flex" id="prohubNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Docs
                </a>
              </li>
            </ul>

            <form className="d-flex ms-lg-3" role="search">
              <input
                className="form-control form-control-sm me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light btn-sm" type="submit">
                Search
              </button>
            </form>

            <a className="btn btn-light btn-sm ms-3" href="#">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Fullscreen offcanvas for mobile (only shown on small screens) */}
      <div
        className="offcanvas offcanvas-fullscreen d-lg-none"
        tabIndex="-1"
        id="prohubOffcanvas"
        aria-labelledby="prohubOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="prohubOffcanvasLabel">
            Pro Hub
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body d-flex flex-column justify-content-center align-items-center">
          <ul className="nav flex-column text-center mb-4">
            <li className="nav-item">
              <a className="nav-link fs-4 py-2" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4 py-2" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4 py-2" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4 py-2" href="#">
                Docs
              </a>
            </li>
          </ul>

          <form className="w-100 px-4 mb-3" role="search">
            <div className="input-group">
              <input
                className="form-control form-control-lg"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary btn-lg" type="submit">
                Search
              </button>
            </div>
          </form>

          <a className="btn btn-light btn-lg" href="#">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
