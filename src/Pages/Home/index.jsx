import React from "react";
import image1 from "../../Assets/Images/hero1.jpg";
import image2 from "../../Assets/Images/hero2.webp";
import image3 from "../../Assets/Images/hero3.webp";
import Meta from "../../components/Meta/Meta";
import "./Style.scss";

const index = () => {
  return (
    <>
      <Meta title={"Hiree.io"} />
      {/* HERO SECTION */}
      <section
        id="carouselExampleDark"
        className="hero carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={image1} className="" alt="..." />
            <div className="details carousel-caption">
              <div>
                <h4>HARNESS THE POWER OF THE CROWD</h4>
                <h1>TO FILL JOB OPENINGS</h1>
                <div className="d-flex gap-5 mt-4 align-items-center justify-content-center">
                  <button className="button1">Watch a demo</button>
                  <button className="button2">discover more</button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={image2} className="" alt="..." />
            <div className="details carousel-caption">
              <div>
                <h4>TALENT ACQUISITION SOLUTION TO HELP YOU</h4>
                <h1>HIRE THE MOST QUALIFIED CANDIDATESS</h1>
                <div className="d-flex gap-5 mt-4 align-items-center justify-content-center">
                  <button className="button1">Watch a demo</button>
                  <button className="button2">discover more</button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image3} className="" alt="..." />
            <div className="details carousel-caption">
              <div>
                <h4>MEET THE BEST TALENT</h4>
                <h1>WORK WITH THEM EASILY</h1>
                <div className="d-flex gap-5 mt-4 align-items-center justify-content-center">
                  <button className="button1">Watch a demo</button>
                  <button className="button2">discover more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </section>
      {/* TRUSTED SECTION */}
    </>
  );
};

export default index;
