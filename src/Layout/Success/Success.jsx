import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Meta from "../../components/Meta/Meta";

const Success = () => {
  return (
    <>
      <Meta title={"Success Stories"} />
      <section className="success py-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 mb-4">
              <h1 className="fs-1">
                Hiree.io Reviews - How Employers Unlock Talent Acquisition
                Success
              </h1>
            </div>
            <div className="col-12 col-md-6 p-5 shadow rounded">
              <h1 className="fw-bold mb-4">
                6 Talent Acquisition Leaders Talk About Why Crowdsourcing Works
              </h1>
              <h6>
                Here's a collection of success stories about talent acquisition
                leaders across industries, who have had unparalleled success in
                acquiring top talent with Hiree.io.
              </h6>
            </div>
            <div className="col-12 col-md-6 ps-5 mt-5 mt-md-0">
              <h5 className="fw-bold">
                Hear from HR, Talent Acquisition, and Recruiting directors in
                the following industries:
              </h5>
              <ul className="my-4">
                <li className="fs-5 fw-bold mt-2 list-unstyled d-flex align-items-center">
                  <FaArrowAltCircleRight className="me-2" /> Financial Services
                </li>
                <li className="fs-5 fw-bold mt-2 list-unstyled d-flex align-items-center">
                  <FaArrowAltCircleRight className="me-2" />
                  Telecommunications
                </li>
                <li className="fs-5 fw-bold mt-2 list-unstyled d-flex align-items-center">
                  <FaArrowAltCircleRight className="me-2" />
                  Manufacturing
                </li>
                <li className="fs-5 fw-bold mt-2 list-unstyled d-flex align-items-center">
                  <FaArrowAltCircleRight className="me-2" /> Technology
                </li>
                <li className="fs-5 fw-bold mt-2 list-unstyled d-flex align-items-center">
                  <FaArrowAltCircleRight className="me-2" />
                  Engineering
                </li>
                <li className="fs-5 fw-bold mt-2 list-unstyled d-flex align-items-center">
                  <FaArrowAltCircleRight className="me-2" />
                  And More...
                </li>
              </ul>
              <button>Grab your copy right now!</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Success;
