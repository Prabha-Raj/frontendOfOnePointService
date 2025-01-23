import React from 'react';

const JoinUs = () => {
  return (
    <div className="join-us">
      <div className="banner-appointment-form">
        <div className="container">
          <div className="row align-items-center no-gutters">
            <div className="col-sm-6 col-lg-6 order-2 order-sm-2 mt-3 mt-md-0 text-center">
              <img src="images/banner-appointment.png" className="img-fluid" alt="Join Us" />
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="appoint-text">
                <h5>Join Our</h5>
                <h4>Repair Team</h4>
                <p>
                  Connect with us <i className="fa-solid fa-angles-right"></i>
                </p>
                <a href="#" className="app-btn" style={{textDecoration:"none"}}>Download Partner App</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
