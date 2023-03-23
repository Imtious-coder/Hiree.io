import React from "react";
import { Link } from "react-router-dom";
import Meta from "../../components/Meta/Meta";
import "./CreateAccount.scss";

const CreateAccount = () => {
  return (
    <>
      <Meta title={"Create Acccount"} />
      <section className="create-account p-2 p-sm-2 p-md-5">
        <div className="container-lg">
          <div className="row justify-content-center">
            <div className="col-12">
              <h1>Hiring top talent is now easier than ever!</h1>
              <h5 className="py-3">Create your account</h5>
            </div>
            <div className="col-12 col-sm-6 col-md-5 col-lg-4">
              <div className="cards p-4 p-md-4">
                <form action="/">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Full Name ✍🏻"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="my-3"
                    placeholder="Company Name 🏢"
                  />
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue="Select"
                  >
                    <option value="1">Employee</option>
                    <option value="2">HR</option>
                    <option value="3">Recruiter</option>
                  </select>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="form-control my-3"
                    placeholder="Email 📩"
                  />
                  <input
                    type="number"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Phone Number 📱"
                  />
                  <input
                    type="password"
                    name=""
                    id=""
                    className="form-control my-3"
                    placeholder="Password 🔑"
                  />
                  <Link
                    to="/comming-soon"
                    className="button3 d-block text-center rounded"
                  >
                    Sign UP
                  </Link>
                </form>
                <div className="mt-4 mb-1 d-flex justify-content-center">
                  <Link to="/login">
                    <p className="text-center text-dark mb-0">
                      Already have an account?
                      <u className="text-primary ms-1">Click here</u>😊
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateAccount;
