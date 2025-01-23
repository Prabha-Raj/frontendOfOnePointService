import React from 'react';
// import './MainBanner.css'; // Add your styles in a separate CSS file if needed.
const MainBanner = () => {
  return (
    <section className="main-banner-wrapper p-2">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-lg-6">
            <div className="col-lg-8">
              <div className="main-title py-3">
                Our Popular Services at <span className="blue">your doorstep</span>
              </div>
            </div>
            <div className="category-services">
              <div className="col-lg-12">
                <div className="top-tittle">
                  <h4>What are you looking for?</h4>
                </div>
              </div>
              <div className="group-category-services">
                {[
                  { img: "images/icons/homeicons/1.png", text: "AC Repair & Servicing" },
                  { img: "images/icons/homeicons/2.png", text: "Refrigerator Repair" },
                  { img: "images/icons/homeicons/3.png", text: "Washing Machine Repair" },
                  { img: "images/icons/homeicons/4.png", text: "Geyser Repair & Service" },
                  { img: "images/icons/homeicons/5.png", text: "Microwave Repair" },
                  { img: "images/icons/homeicons/6.png", text: "RO Repair & Servicing" },
                ].map((service, index) => (
                  <div className="main-category-box" key={index}>
                    <div className="main-category-header">
                      <img src={service.img} alt={service.text} />
                    </div>
                    <p>{service.text}</p>
                    <a href="#" className="btn-category-service" style={{textDecoration:"none"}}>
                      Book Now<span className="icon-keyboard_arrow_right"></span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center s-tittle">
                <h2>Our Stats</h2>
              </div>
              {[
                { count: "2719", label: "Active Users" },
                { count: "3215", label: "Tasks Completed" },
                { count: "364", label: "Active Partners" },
                { count: "12", label: "Serving Cities" },
              ].map((stat, index) => (
                <div className="col-lg-3 col-6" key={index}>
                  <div className="single-coutnerup">
                    <span className="count-num">{stat.count}</span>
                    <span className="plus">+</span>
                    <p>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-6">
            <div className="main-banner">
              <img
                src="images/banner/main-banner2.jpg"
                className="img-fluid"
                alt="Main Banner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
