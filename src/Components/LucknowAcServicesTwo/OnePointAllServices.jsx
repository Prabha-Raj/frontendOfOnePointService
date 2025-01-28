import React from 'react'
import { Link } from 'react-router-dom';

const OnePointAllServices = () => {
   const services = [
    { image: "images/a1.png", title: "AC Repair & Servicing" },
    { image: "images/a2.png", title: "RO Repair & Servicing" },
    { image: "images/a3.png", title: "Refrigerator Repair" },
    { image: "images/a4.png", title: "Washing Machine Repair" },
    { image: "images/a5.png", title: "Geyser Repair & Service" },
    { image: "images/a6.png", title: "Electrician Service" },
    { image: "images/a7.png", title: "LED TV Repair Service" },
    { image: "images/a8.png", title: "Water Cooler Repair Service" },
    { image: "images/a9.png", title: "Water Dispenser Repair Service" },
    { image: "images/a10.png", title: "Deep Freezer Repair Service" },
  ];

  return (
    <section className="We-Do" style={{ background: "#fff" }}>
      <div className="container-fluid ">
        <div
          className="main-title pb-4"
          style={{
            color: "#ff0022",
            textTransform: "capitalize",
            fontSize: "30px",
          }}
        >
          One Point <span>All Services</span>
        </div>
        <div className="row justify-content-center gy-4">
          {services.map((service, index) => (
            <div className="col-6 col-sm-6 col-lg-3 mt-3" key={index}>
              <div
                className="d-flex flex-column align-items-center h-100 aos-init aos-animate"
                data-aos="flip-left"
              >
                <figure>
                  <img src={service.image} alt={service.title} />
                </figure>
                <h3>{service.title}</h3>
                <div>
                  <Link style={{textDecoration:"none"}}>
                    Read More <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnePointAllServices