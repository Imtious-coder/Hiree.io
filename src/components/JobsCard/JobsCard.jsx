import React from "react";
import { Link } from "react-router-dom";
import { jobData as datas } from "../../utils/JobsData.jsx";
import "./JobsCard.scss";

const JobsCard = () => {
  return (
    <div className="row">
      {datas?.map(({ city, country, image, position }, index) => {
        return (
          <div className="col-6 col-md-4 jobs-card mb-4" key={index}>
            <div className="position-relative">
              <div>
                <img src={image} alt="city_image" className="img-fluid" />
              </div>
              <div className="position-absolute details py-2 py-sm-4">
                <h4 className="text-center text-white mb-1 mb-sm-2">{city}</h4>
                <p className="text-center text-white">{country}</p>
                <Link
                  to="/comming-soon"
                  className="button d-block mx-auto text-center"
                >
                  {position} position
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JobsCard;
