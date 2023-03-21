import React from "react";
import JobsCard from "../../components/JobsCard/JobsCard";
import Meta from "../../components/Meta/Meta";
import "./Career.scss";

const Career = () => {
  return (
    <>
      <Meta title={"Career"} />
      <section className="job-search pb-5 pt-3">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 ">
              <div className="row">
                <h1 className="text-center text-md-start">Find jobs</h1>
                <div className="col-12 col-md-6">
                  <input
                    className="form-control py-2"
                    type="text"
                    name="job"
                    id="job"
                    placeholder="Search of your jobs by keywords or title"
                  />
                </div>
                <div className="col-12 col-md-4 my-4 my-md-0">
                  <input
                    className="form-control py-2"
                    type="text"
                    name="job"
                    id="job"
                    placeholder="Location"
                  />
                </div>
                <div className="col-12 col-md-2">
                  <button className="mx-auto d-block mx-sm-0">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="jobs-info py-5">
        <div className="container-lg">
          <h1>Find jobs by location</h1>
          <JobsCard />
        </div>
      </section>
    </>
  );
};

export default Career;
