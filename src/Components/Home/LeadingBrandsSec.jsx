import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../css/LeadingBrands.css"
const LeadingBrands = () => {
  const brandImages = [
    "images/brands/logo-lg.jpg",
    "images/brands/log-wh.jpg",
    "images/brands/logo-daikin.jpg",
    "images/brands/logo-haier.jpg",
    "images/brands/logo-lloyd.jpg",
    "images/brands/logo-mitsi.jpg",
    "images/brands/logo-samsung.jpg",
    "images/brands/logo-voltas.jpg",
    "images/brands/logo-blue.jpg",
    "images/brands/logo-aqua.jpg",
    "images/brands/logo-godrej.jpg",
    "images/brands/logo-hitachi.jpg",
    "images/brands/logo-kent.jpg",
    "images/brands/logo-general.jpg"
  ];

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    draggable: true,
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200, // Large devices
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, // Medium devices
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Small devices (tablets)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // Extra small devices (mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="leading-brands">
      <div className="container">
        <div className="section-header text-center">
          <div className="main-title py-3">
            We Repair All <span className="blue">Brands</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Slider {...settings}>
              {brandImages.map((image, index) => (
                <div key={index} className="brand-logo">
                  <img
                    src={image}
                    alt={`Brand ${index}`}
                    className="img-fluid"
                    style={{
                      border: "1px solid gray",
                      padding: "10px 10px",
                      background: "transparent",
                      borderRadius: "10px",
                      width:"400px",
                      height:"60px"
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadingBrands;
