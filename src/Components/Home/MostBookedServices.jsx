import React from 'react';
import "./MostBoolkedServices.css"
const MostBookedServices = () => {
  return (
    <section className="We-Do">
      <div className="container-fluid">
        <div className="section-header text-center">
          <div className="main-title py-3">
            Most Booked
            <span className="blue"> Services</span>
          </div>
          <p>
            Our extensive expertise and wide-ranging experience enables us to provide the most effective Services.
          </p>
        </div>

        <div className="row justify-content-center gy-4 mt-3">
          {[
            {
              image: 'images/icons/ac-repair.png',
              title: 'AC Repair & Servicing',
              link: '#',
            },
            {
              image: 'images/icons/filter.png',
              title: 'RO Repair & Servicing',
              link: '#',
            },
            {
              image: 'images/icons/Refrigerator-Repair.png',
              title: 'Refrigerator Repair',
              link: '#',
            },
            {
              image: 'images/icons/Washing-Machine-Repair.png',
              title: 'Washing Machine Repair',
              link: '#',
            },
            {
              image: 'images/icons/Geyser-repair.png',
              title: 'Geyser Repair & Service',
              link: '#',
            },
          ].map((service, index) => (
            <div key={index} className="col-6 col-sm-6 col-lg-2 mt-4 we-do-card" style={{width:"auto"}}  >
              <div className="d-flex flex-column align-items-center  aos-init aos-animate" data-aos="flip-left">
                <figure>
                  <img src={service.image} alt={service.title} />
                </figure>
                <h3 style={{lineHeight:"0px", marginBottom:"15px"}}>{service.title}</h3>
                <div>
                  <a href={service.link} style={{textDecoration:"none"}} className='read-more'>
                    Read More <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostBookedServices;
