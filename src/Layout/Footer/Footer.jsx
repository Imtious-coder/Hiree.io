import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="top-footer py-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <FaFacebook className="icons" />
                <FaLinkedin className="icons" />
                <FaTwitter className="icons" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="main-footer py-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <h5 className="text-center text-md-start">About us</h5>
              <p className="text-center text-md-start">
                Steadfast, the leader in crowdsourcing talent, finds top
                candidates in half the time and for half the cost, through its
                extensive network of recruiters and industry professionals.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <h5 className="text-center text-md-start">CONTACT INFO</h5>
              <p className="text-center text-md-start">
                100 Franklin Square Dr, Suite 402.Somerset, NJ 08873
              </p>
              <p className="text-center text-md-start">+8801698749818 </p>
              <p className="text-center text-md-start">info@steadfast.com</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <h5 className="text-center text-md-start">newsletter</h5>
              <p className="text-center text-md-start">
                Subscribe to our newsletter for latest updates about Steadfast
              </p>
              <input
                className="d-block mx-auto mx-md-0"
                type="email"
                name="email"
                placeholder="E-mail address"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <h5 className="text-center text-md-start">Careers</h5>
              <p className="text-center text-md-start">
                To learn about working with Steadfast, please &nbsp;
                <Link to="/career">click here</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bottom-footer py-2">
        <p className="text-center text-white mb-0">
          © All rights 2023 reserved by "Hiree.io"
        </p>
      </footer>
    </>
  );
};

export default Footer;
