import React from 'react';
import { Link } from 'react-router-dom';

const OnePointTopServices = () => {
  return (
    <>
      <section className="all-service">
        <div className="container-fluid">
          <div className="section-header text-center">
            <div
              className="main-title"
              style={{
                color: '#ff0022',
                textTransform: 'capitalize',
                fontSize: 30,
              }}
            >
              One Point <span>Top Services</span>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-12">
              <div className="right-heading text-center">
                <p className="mb-4">
                  OnePoint's top services across India focus on providing
                  high-quality, reliable repair and
                  <br />
                  maintenance solutions for essential home appliances.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              {
                service: 'AC Repair & Servicing',
                rating: 5.4,
                stars: 4,
                price: 296.0,
                videoSrc: './images/acrepaire.mp4',
              },
              {
                service: 'RO Repair & Servicing',
                rating: 5.4,
                stars: 3,
                price: 356.0,
                videoSrc: './images/video/1.mp4',
              },
              {
                service: 'Refrigerator Repair',
                rating: 5.4,
                stars: 3,
                price: 499.0,
                videoSrc: './images/video/3.mp4',
              },
              {
                service: 'Washing Machine Repair',
                rating: 4.6,
                stars: 3,
                price: 499.0,
                videoSrc: './images/video/2.mp4',
              },
            ].map((item, index) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 mb-3"
                key={index}
              >
                <div className="centerservices">
                  <div className="mega-hover">
                    <video
                      className="responsive-video"
                      autoPlay
                      muted
                      loop
                      style={{
                        width: '100%', // Ensure it fits the card width
                        height: '180px', // Set a fixed height similar to the image layout
                        objectFit: 'cover', // Maintain aspect ratio and crop excess
                      }}
                    >
                      <source src={item.videoSrc} type="video/mp4" />
                    </video>
                  </div>
                  <div className="txtbox">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h4 className="servicesheadeingss ">
                          <Link className='link-decoration'>{item.service}</Link>
                        </h4>
                        <div className="result">
                          <div className="info">
                            <span className="star">
                              <b>{item.rating}</b>
                            </span>
                            <div className="rating">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  className={`star ${
                                    i < item.stars ? 'filled' : ''
                                  }`}
                                  key={i}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="subServicePrice lh-1">
                          <span>₹</span>
                          {item.price.toFixed(1)}
                          <p className="small d-none text-muted fs-normal mt-1 mb-0">
                            (Tax Included)
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link className="btn-grad1" style={{textDecoration:"none"}} >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnePointTopServices;
