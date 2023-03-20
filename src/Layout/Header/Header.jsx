import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <nav className="header navbar navbar-expand-lg py-3 py-md-4 sticky-top">
        <div className="container-fluid">
          <Link to="/" className="logo">
            Hiree.io
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mt-3 mt-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active text-center"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/recruiters" className="nav-link">
                  Recruiters
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/success" className="nav-link">
                  Success Stories
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/career" className="nav-link">
                  Career
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact us
                </Link>
              </li>
              <li className="nav-item mx-lg-4 mt-3 mt-lg-0">
                <div className="d-flex gap-4 justify-content-center align-items-center">
                  <button>Login</button>
                  <button>Sign up</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
