import React from "react";
import image1 from "../../Assets/Images/hero1.jpg";
import image2 from "../../Assets/Images/hero2.webp";
import image3 from "../../Assets/Images/hero3.webp";
import news1 from "../../Assets/Images/news1.png";
import news2 from "../../Assets/Images/news2.png";
import news3 from "../../Assets/Images/news3.jpg";
import news4 from "../../Assets/Images/news4.png";
import news5 from "../../Assets/Images/news5.png";
import news6 from "../../Assets/Images/news6.png";
import news7 from "../../Assets/Images/news7.jpg";
import news8 from "../../Assets/Images/news8.png";
import talent1 from "../../Assets/Images/talent1.png";
import talent2 from "../../Assets/Images/talent2.jpg";
import talent3 from "../../Assets/Images/talent3.png";
import talent4 from "../../Assets/Images/talent4.jpg";
import talent5 from "../../Assets/Images/talent5.jpg";
import talent6 from "../../Assets/Images/talent6.png";
import talent7 from "../../Assets/Images/talent7.png";
import talent8 from "../../Assets/Images/talent8.jpg";
import HeadingBottomLine from "../../components/HeadingBottomLine/HeadingBottomLine";
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
      <section className="trusted py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
              <h1>THE TRUSTED TALENT ACQUISITION SOLUTION</h1>
              <h5>
                Hiree.io provides stellar talent to 200+ top companies across
                the U.S.
              </h5>
              <HeadingBottomLine />
            </div>
            <div className="col-6 col-md-3">
              <img src={talent1} alt="talent" />
            </div>
            <div className="col-6 col-md-3">
              <img src={talent2} alt="talent" />
            </div>
            <div className="col-6 col-md-3">
              <img src={talent3} alt="talent" />
            </div>
            <div className="col-6 col-md-3">
              <img src={talent4} alt="talent" />
            </div>
            <div className="col-6 col-md-3">
              <img src={talent5} alt="talent" />
            </div>
            <div className="col-6 col-md-3">
              <img src={talent6} alt="talent" />
            </div>
            <div className="col-6 col-md-3">
              <img src={talent7} alt="talent" />
            </div>
            <div className="col-6 col-md-3">
              <img src={talent8} alt="talent" />
            </div>
          </div>
        </div>
      </section>
      {/* NEWS SECTION */}
      <section className="news py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
              <h1>hiree.io IN THE NEWS</h1>
              <h5>See where Hiree.io been featured</h5>
              <HeadingBottomLine />
            </div>
            <div className="col-6 col-md-3">
              <img src={news1} alt="news" />
            </div>
            <div className="col-6 col-md-3">
              <img src={news2} alt="news" />
            </div>
            <div className="col-6 col-md-3">
              <img src={news3} alt="news" />
            </div>
            <div className="col-6 col-md-3">
              <img src={news4} alt="news" />
            </div>
            <div className="col-6 col-md-3">
              <img src={news5} alt="news" />
            </div>
            <div className="col-6 col-md-3">
              <img src={news6} alt="news" />
            </div>
            <div className="col-6 col-md-3">
              <img src={news7} alt="news" />
            </div>
            <div className="col-6 col-md-3">
              <img src={news8} alt="news" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
