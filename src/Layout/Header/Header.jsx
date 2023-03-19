import React from "react";
import { Link } from "react-router-dom";
import Meta from "../../components/Meta/Meta";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <Meta title={"Hiree.io"} />
      <nav class="header navbar navbar-expand-lg bg-dark py-4">
        <div class="container-fluid">
          <Link to="/" class="logo">
            Hiree.io
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse px-auto" id="navbarNav">
            <ul class="navbar-nav ms-auto mt-3 mt-lg-0">
              <li class="nav-item">
                <Link
                  to="/"
                  class="nav-link active text-center"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  Recruiters
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  to="/"
                  class="nav-link dropdown-toggle"
                  href="#cs"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Success Stories
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link to="/" class="dropdown-item">
                      Employers who hired top talents
                    </Link>
                  </li>
                  <li>
                    <Link to="/" class="dropdown-item">
                      recruiters who earned thousands
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  Career
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  Contact us
                </Link>
              </li>
              <li class="nav-item mx-lg-4 mt-3 mt-lg-0">
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
