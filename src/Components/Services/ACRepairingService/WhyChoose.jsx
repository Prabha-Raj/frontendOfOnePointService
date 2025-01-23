import React from "react";
// import "./WhyChoose.css"; // Include this for your styles

const WhyChoose = () => {
  const features = [
    { imgSrc: "images/sp1.png", title: "Verified Service Partner" },
    { imgSrc: "images/sp2.png", title: "Quick Responses" },
    { imgSrc: "images/sp3.png", title: "Fixed Service Rate" },
    { imgSrc: "images/sp4.png", title: "Upto One Year Warranty" },
  ];

  return (
    <section className="why-choose">
      <div className="container-fluid">
        <div className="section-header text-center">
          <div className="main-title">
            Why Choose One Point
            <br />
            <span className="blue">AC Repair Service</span>.
          </div>
            <br />
          <p className="sub-title">We Provide Our Best Services</p>
        </div>
        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <div className="col-lg-3 col-6" key={index}>
              <div className="choose-img">
                <img src={feature.imgSrc} alt={feature.title} />
              </div>
              <div className="choose-content">
                <h4>{feature.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
