import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaMapMarked,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
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
              <p className="text-justify text-md-start">
                Hiree.io, the leader in crowdsourcing talent, finds top
                candidates in half the time and for half the cost, through its
                extensive network of recruiters and industry professionals.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <h5>CONTACT INFO</h5>
              <p>
                <FaMapMarked /> 100 Franklin Square Dr, Suite 402.Somerset, NJ
                08873.
              </p>
              <p>
                <FaPhoneAlt className="text-secondary" />
                +88016987****8
              </p>
              <p>
                <FaMailBulk /> info@hiree.com
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0 mt-md-4">
              <h5>newsletter</h5>
              <p>
                Subscribe to our newsletter for latest updates about Hiree.io
              </p>
              <input type="email" name="email" placeholder="E-mail address" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-md-4">
              <h5>Careers</h5>
              <p>
                To learn about working with Hiree.io, please &nbsp;
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
