import React from "react";

const TeamSec = () => {
  return (
    <section className="team-area pt-100 pb-70">
      <div className="container-fluid">
        {/* Section Heading */}
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center mb-2">
              <h2 className="site-title" style={{color:"red"}}>
                Team <span style={{ color: "#363535" }}>Members</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="row">
          {/* Member 1 */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-team">
              <img
                src="images/team/team-img-2.jpg"
                alt="Team Member"
                width="100%"
              />
              <div className="team-content">
                <h3 className="mobteam">Name</h3>
                <span className="mobteam">Designation</span>
              </div>
            </div>
          </div>

          {/* Member 2 */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-team">
              <img
                src="images/team/team-img-2.jpg"
                alt="Team Member"
                width="100%"
              />
              <div className="team-content">
                <h3 className="mobteam">Name</h3>
                <span className="mobteam">Designation</span>
              </div>
            </div>
          </div>

          {/* Member 3 */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-team">
              <img
                src="images/team/team-img-2.jpg"
                alt="Team Member"
                width="100%"
              />
              <div className="team-content">
                <h3 className="mobteam">Name</h3>
                <span className="mobteam">Designation</span>
              </div>
            </div>
          </div>

          {/* Member 4 */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-team">
              <img
                src="images/team/team-img-2.jpg"
                alt="Team Member"
                width="100%"
              />
              <div className="team-content">
                <h3 className="mobteam">Name</h3>
                <span className="mobteam">Designation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSec;
