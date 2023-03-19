import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <nav className="header navbar navbar-expand-lg bg-dark py-4">
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
                <Link to="/" className="nav-link">
                  Recruiters
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  href="#cs"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Success Stories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/" className="dropdown-item">
                      Employers who hired top talents
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item">
                      recruiters who earned thousands
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Career
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
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
