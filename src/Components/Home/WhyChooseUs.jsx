import React from "react";
import "../css/WhyChooseUs.css"; // Add styles in a separate CSS file if required.

const WhyChooseUs = () => {
    
  return (
    <section className="section how-it-works" style={{width:"100%"}}>
      <div className="container-fluid">
        {/* Section Header */}
        <div className="section-header text-center">
          <span>Why Choose Us</span>
          <div className="main-title py-3">
            Why? <span className="blue">One Point</span>
          </div>
          <p className="sub-title">We Provide Our Best Services</p>
        </div>

        {/* Features Section */}
        <div className="row whychoose justify-content-center">
          {/* Feature 1 */}
          <div className="col-6 col-md-6 col-lg-2">
            <div className="feature-box text-center">
              <div className="feature-header">
                <div className="feature-icon">
                  <span className="circle"></span>
                  <i>
                    <img src="images/fixed-rate.png" alt="Fixed Service Rates" />
                  </i>
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Fix Service Rates</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-6 col-md-6 col-lg-2">
            <div className="feature-box feature-box-five text-center">
              <div className="feature-header">
                <div className="feature-icon">
                  <span className="circle"></span>
                  <i>
                    <img src="images/icon-1.png" alt="Quick Response" />
                  </i>
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Quick Response</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-6 col-md-6 col-lg-2">
            <div className="feature-box feature-box-four text-center">
              <div className="feature-header">
                <div className="feature-icon">
                  <span className="circle"></span>
                  <i>
                    <img
                      src="images/icon-2.png"
                      alt="15 Days Service Warranty"
                    />
                  </i>
                </div>
                <div className="feature-cont">
                  <div className="feature-text">15 Days Service Warranty</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="col-6 col-md-6 col-lg-2">
            <div className="feature-box feature-box-four text-center">
              <div className="feature-header">
                <div className="feature-icon">
                  <span className="circle"></span>
                  <i>
                    <img
                      src="images/icon-3.png"
                      alt="Expert & Trustworthy Partner"
                    />
                  </i>
                </div>
                <div className="feature-cont">
                  <div className="feature-text">
                    Expert & Trustworthy Partner
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="col-6 col-md-6 col-lg-2">
            <div className="feature-box feature-box-three text-center">
              <div className="feature-header">
                <div className="feature-icon">
                  <span className="circle"></span>
                  <i>
                    <img
                      src="images/cu-support.png"
                      alt="Friendly Customer Support"
                    />
                  </i>
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Friendly Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
