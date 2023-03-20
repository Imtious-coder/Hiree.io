import React from "react";
import image1 from "../../Assets/Images/hero1.jpg";
import succeed1 from "../../Assets/Images/R1.png";
import succeed2 from "../../Assets/Images/R2.png";
import succeed3 from "../../Assets/Images/R3.png";
import succeed4 from "../../Assets/Images/R4.png";
import HeadingBottomLine from "../../components/HeadingBottomLine/HeadingBottomLine";
import Meta from "../../components/Meta/Meta";
import Video from "../../components/VIDEO/Video";
import "./Recruiters.scss";

const Recruiters = () => {
  return (
    <>
      <Meta title={"Recruiters"} />
      {/* RECRUITERS SECTION */}
      <section
        id="carouselExampleDark"
        className="recruiters carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={image1} alt="hero_image" />
            <div className="details carousel-caption">
              <div>
                <h4>HELPING INDEPENDENT RECRUITERS AND AGENCIES</h4>
                <h1>EARN MORE IN PLACEMENT FEES</h1>
                <button className="button1 mt-3">sign up</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Video />
      {/* SUCCEED SECTION */}
      <section className="succees py-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
              <h1>SEE HOW Hiree.io HELPS YOU SUCCEED</h1>
              <h5>Plus, it's free to join!</h5>
              <HeadingBottomLine />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-4 my-4">
              <img src={succeed1} alt="succeed1" className="img-fluid" />
              <h6 className="fw-bold text-center mb-3">MAKE MORE MONEY</h6>
              <a href="#learn" className="d-flex justify-content-center">
                Learn more
              </a>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-4 my-4">
              <img
                src={succeed2}
                alt="succeed2"
                className="img-fluid p-5 p-md-2"
              />
              <h6 className="fw-bold text-center mb-3">BE YOUR OWN BOSS</h6>
              <a href="#learn" className="d-flex justify-content-center">
                Learn more
              </a>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-4 my-4">
              <img
                src={succeed3}
                alt="succeed3"
                className="img-fluid p-5 p-md-4"
              />
              <h6 className="fw-bold text-center mb-3">NO HASSLE RECRUITING</h6>
              <a href="#learn" className="d-flex justify-content-center">
                Learn more
              </a>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-4 my-4">
              <img
                src={succeed4}
                alt="succeed4"
                className="img-fluid p-5 p-md-4"
              />
              <h6 className="fw-bold text-center mb-3">EASY TO USE PLATFORM</h6>
              <a href="#learn" className="d-flex justify-content-center">
                Learn more
              </a>
            </div>
            <div className="col-12 py-5">
              <h5 className="fw-bold text-center text-md-start mb-4">
                Recruiters earn on average $10,000 placement fee per successful
                hire.
              </h5>
              <p className="text-center text-md-start">
                As a Hiree.io recruiter, you have access to hundreds of open
                positions that would have been difficult for you to get access
                to. You can start referring qualified candidates immediately. No
                need to wait for companies to approve you as a vendor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recruiters;
