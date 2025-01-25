import React from 'react';
// import './About.css'; // Add styles in a separate CSS file if required.

const AboutSec = () => {
  return (
    <div className="about-container p-2">
      <div className="container-fluid">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-5 details-txt">
            <div className="one-text-height"></div>
            <div className="about-text">
              <div className="tb-section-heading tb-style2">
                <h1>Welcome to One Point</h1>
                <div className="mt-separator-outer">
                  <div className="mt-separator bg-primary"></div>
                </div>
                <p></p>
                <p></p>
                <p className="text-justify">
                  Welcome to One Point Services – your partner for in-home electronic appliance repairs near you! 
                  We take pride in delivering affordable and customer-centric repair services, ensuring you have access 
                  to quick, professional services that bring peace of mind. Our team of expert technicians is committed 
                  to not only providing efficient and cost-effective repairs but also to educating you on proper 
                  electronic appliance maintenance. At One Point, we're more than just a repair service; we're here to 
                  empower you with the knowledge to keep your appliances running smoothly. Choose One Point Services for 
                  a seamless repair experience and ongoing support in maintaining your appliances.
                </p>
                <div className="button-group">
                  <a className="button-link"  href="aboutus.html">
                    <button className="btn btn--glow " style={{background:"red"}}>
                      <span>Read More</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="col-md-7 col-xs-12">
            <div className="one_bar">
              <div className="one-height one-radious-4 one-relative">
                <div
                  className="one-bg"
                  style={{ backgroundImage: "url(images/about-us.jpg)" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSec;
