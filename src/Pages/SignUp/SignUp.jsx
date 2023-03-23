import React from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaLock,
  FaShieldAlt,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Meta from "../../components/Meta/Meta";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <section className="sign-up p-2 p-sm-2 p-md-5">
        <div className="container-lg">
          <div className="row justify-content-center">
            <div className="col-12">
              <h1>Join the industry's premier Talent Crowdsourcing Platform</h1>
              <h4 className="py-3">
                To join Hiree.io, sign up below...it's free to join!
              </h4>
              <h6>
                Hiring employees? Click “Create Employer Account.” If you are an
                independent recruiter or represent a recruiting agency, click
                “Create Recruiter Account.”
              </h6>
            </div>
            <div className="col-12 col-sm-6 col-md-5 col-lg-5 col-xxl-4 my-5 px-4 px-sm-2 px-md-4 px-lg-5">
              <div className="cards p-4 p-md-4">
                <h2 className="py-3">Recruiters</h2>
                <p className="pb-4">Earn More Money</p>
                <p className="pb-2">Sign Up With</p>
                <div className="d-flex gap-4 pb-5 justify-content-center align-items-center">
                  <FaGoogle className="icon1" />
                  <FaFacebookF className="icon2" />
                  <FaTwitter className="icon3" />
                  <FaLinkedinIn className="icon4" />
                </div>
                <p className="pb-4">or</p>
                <div className="mb-4 d-flex justify-content-center">
                  <Link to="/create-account" className="button3 text-center">
                    Create Recruiter Account
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-1 d-none d-md-block"></div>
            <div className="col-12 col-sm-6 col-md-5 col-lg-5 col-xxl-4 my-5 px-4 px-sm-2 px-md-4 px-lg-5">
              <div className="cards p-4 p-md-4">
                <h2 className="py-3">Employer/HR</h2>
                <p className="pb-4">Hire Top Talent</p>
                <p className="pb-2">Sign Up With</p>
                <div className="d-flex gap-4 pb-5 justify-content-center align-items-center">
                  <FaGoogle className="icon1" />
                  <FaFacebookF className="icon2" />
                  <FaTwitter className="icon3" />
                  <FaLinkedinIn className="icon4" />
                </div>
                <p className="pb-4">or</p>
                <div className="mb-4 d-flex justify-content-center">
                  <Link to="/create-account" className="button3 text-center">
                    Create Employer Account
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-5 col-lg-5 col-xxl-4 my-sm-5 px-4 px-sm-2 px-md-4 px-lg-5">
              <div className="mb-sm-5">
                <div className="d-flex justify-content-center py-4">
                  <FaShieldAlt className="fs-1 text-success" />
                </div>
                <p className="fw-bold">Secure and Confidential</p>
                <p>
                  Our system is built to protect the interest of the
                  recruiter.Your candidate database is confidential and we do
                  not share it with others.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-5 col-lg-5 col-xxl-4 my-sm-5 px-4 px-sm-2 px-md-4 px-lg-5">
              <div className="mb-5 d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <FaLock className="fs-1 text-info" />
                </div>
                <p className="fw-bold">Secure and Confidential</p>
                <p>
                  Confidentiality and Privacy of your data is paramount to us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
