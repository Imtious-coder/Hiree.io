import React from "react";
import HeadingBottomLine from "../HeadingBottomLine/HeadingBottomLine";
import "./Video.scss";

const Video = () => {
  return (
    <section className="video py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <h1>WATCH A SHORT DEMO VIDEO</h1>
            <HeadingBottomLine />
          </div>
          <div className="col-12 my-4">
            <iframe
              src="https://www.youtube.com/embed/C_TYCdq9VZo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
