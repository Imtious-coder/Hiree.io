import React from "react";
import employers1 from "../../Assets/Images/employers1.png";
import employers2 from "../../Assets/Images/employers2.png";
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
import review1 from "../../Assets/Images/ProfileF.jfif";
import review2 from "../../Assets/Images/ProfileM.jfif";
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
import Video from "../../components/VIDEO/Video";
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
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={image1} alt="hero_image" />
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
            <img src={image2} className="" alt="hero_image" />
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
            <img src={image3} className="" alt="hero_image" />
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
      {/* RECRUIT_HELP SECTION */}
      <section className="recruit-help py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
              <h1>TALENT CROWDSOURCING TO HELP YOU RECRUIT</h1>
              <h5>
                Bringing recruiters & employers together through crowdsourcing
              </h5>
              <HeadingBottomLine />
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center px-4">
              <div className="cards">
                <div className="w-100 h-100">
                  <img src={employers1} alt="employers1" className="image1" />
                </div>
                <h4>EMPLOYERS</h4>
                <h6>The 10 most qualified candidates in less than 10 days!</h6>
                <p>
                  Thousands of recruiters, a team of dedicated account managers,
                  and a powerful algorithm to get you the 10 most qualified
                  candidates in less than 10 days.
                </p>
                <button className="d-block mx-auto">Learn more</button>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center px-5">
              <div className="cards">
                <div className="mt-5">
                  <img src={employers2} alt="employers2" className="image2" />
                </div>
                <h4>RECRUITERS</h4>
                <h6>Earn more placement fees.</h6>
                <p>
                  Just sign in, choose the jobs you want to work on, and start
                  recruiting. Earn placement fees for each successful hire. It’s
                  simple.
                </p>
                <button className="d-block mx-auto">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Video />
      {/* TESTIMONIALS SECTION */}
      <section className="review py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
              <h1>CLIENT TESTIMONIALS</h1>
              <h5>What clients say about us</h5>
              <HeadingBottomLine />
            </div>
            <div className="col-12 mt-5">
              <div className="row">
                <div className="col-sm-6 col-md-4">
                  <img src={review2} alt="review1" className="px-5 px-sm-0" />
                </div>
                <div className="col-sm-6 col-md-8 py-4 d-flex flex-column justify-content-center shadow-sm rounded">
                  <p>
                    "I’ve never received so many candidates from one vendor that
                    have made it through the interview stage in such a short
                    time."
                  </p>
                  <h6>
                    <strong>EVAN LERMAN</strong> Director of Recruiting,
                    Interactive Brokers, LLC
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-12 my-5 d-none d-sm-block">
              <div className="row">
                <div className="col-sm-6 col-md-8 py-4 d-flex flex-column justify-content-center shadow-sm rounded">
                  <p>
                    "I'm always looking for the best talent to work for our
                    organization. With Steadfast's crowdsourcing capabilities, I
                    am able to find the right people before they're even
                    looking."
                  </p>
                  <h6>
                    <strong>Keith E. Stecher</strong> Director of Human
                    Resources, SB International, Inc.
                  </h6>
                </div>
                <div className="col-sm-6 col-md-4">
                  <img src={review2} alt="" className="px-5 px-sm-0" />
                </div>
              </div>
            </div>
            <div className="col-12 mt-5 mt-sm-0">
              <div className="row">
                <div className="col-sm-6 col-md-4">
                  <img src={review1} alt="" className="px-5 px-sm-0" />
                </div>
                <div className="col-sm-6 col-md-8 py-4 d-flex flex-column justify-content-center shadow-sm rounded">
                  <p>
                    "Recruiting a Mumps Developer through Steadfast ltd. was a
                    breeze and I saved more than $6,000 on recruiting costs!."
                  </p>
                  <h6>
                    <strong>Rochelle Simkins</strong> Sr. Talent Acquisition
                    Consultant, New Century Health.
                  </h6>
                </div>
              </div>
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
      {/* MEETING SECTION */}
      <section className="meeting py-5">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="d-flex mb-4 mb-sm-0 justify-content-center align-items-center">
                <p>👍🏻</p>
                <h2>Want to hire top talent?</h2>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <button className="button2 d-block me-auto me-md-0 ms-auto ">
                Schedule a demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
