import React from "react";

const StatsSec = () => {
  return (
    <section className="app-section bg-white mob_count py-120">
      <div className="container-fluid">
        {/* Section Heading */}
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center mb-5">
              <h2 className="site-title">
                Our <span>Stats</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Stats Content */}
        <div className="row">
          {/* Active Users */}
          <div className="col-lg-3 col-6">
            <div className="single-coutnerup">
              <div>
                <i className="fa-solid fa-users"></i>
              </div>
              <span className="count-num">2719</span>
              <span className="plus">+</span>
              <p>Active Users</p>
            </div>
          </div>

          {/* Tasks Completed */}
          <div className="col-lg-3 col-6">
            <div className="single-coutnerup">
              <div>
                <i className="fa-solid fa-file-shield"></i>
              </div>
              <span className="count-num">3215</span>
              <span className="plus">+</span>
              <p>Tasks Completed</p>
            </div>
          </div>

          {/* Active Partners */}
          <div className="col-lg-3 col-6">
            <div className="single-coutnerup">
              <div>
                <i className="fa-solid fa-handshake"></i>
              </div>
              <span className="count-num">364</span>
              <span className="plus">+</span>
              <p>Active Partners</p>
            </div>
          </div>

          {/* Serving Cities */}
          <div className="col-lg-3 col-6">
            <div className="single-coutnerup">
              <div>
                <i className="fa-solid fa-city"></i>
              </div>
              <span className="count-num">12</span>
              <span className="plus">+</span>
              <p>Serving Cities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSec;
