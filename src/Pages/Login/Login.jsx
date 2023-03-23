import React from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Meta from "../../components/Meta/Meta";
import "./Login.scss";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <section className="login p-2 p-sm-2 p-md-5">
        <div className="container-lg py-4">
          <div className="row justify-content-center">
            <div className="col-12">
              <h1 className="pb-4">Login to get started!</h1>
            </div>
            <div className="col-12 col-sm-6 col-md-5 col-lg-4">
              <div className="cards p-4 p-md-4">
                <p className="fw-bold">Login with Email @</p>
                <form action="/">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control my-3"
                    placeholder="Email 📩"
                  />
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    className="form-control my-3"
                    placeholder="Password 🔑"
                  />
                  <Link
                    to="/comming-soon"
                    className="button3 mb-2 d-block text-center rounded"
                  >
                    Login
                  </Link>
                  <p className="py-2 mb-0">or</p>
                  <p className="pb-2 fw-bold color1">Login with</p>
                  <div className="d-flex gap-4 pb-3 justify-content-center align-items-center">
                    <FaGoogle className="icon1" />
                    <FaFacebookF className="icon2" />
                    <FaTwitter className="icon3" />
                    <FaLinkedinIn className="icon4" />
                  </div>
                  <div className="mt-3 d-flex justify-content-center">
                    <Link to="/create-account">
                      <p>
                        Don't have an account?
                        <u className="text-primary ms-1">Click here</u>😊
                      </p>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
