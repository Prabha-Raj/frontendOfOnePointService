import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/PopularCities.css';

// City data array
const cityData = [
  { name: 'Indore', image: 'images/icons/dehradun_city.jpg' },
  { name: 'Jaipur', image: 'images/icons/jaipur_city.jpg' },
  { name: 'Kanpur', image: 'images/icons/kanpur_city.jpg' },
  { name: 'Lucknow', image: 'images/icons/lucknow_city.jpg' },
  { name: 'Pune', image: 'images/icons/pune_city.jpg' },
  { name: 'Patna', image: 'images/icons/patna_city.jpg' },
  { name: 'Sitapur', image: 'images/icons/sitapur_city.jpg' },
  { name: 'Varanasi', image: 'images/icons/varanasi_city.jpg' },
  { name: 'Agra', image: 'images/icons/agra_city.jpg' },
  { name: 'Bareilly', image: 'images/icons/bareilly_city.jpg' },
  { name: 'Bhopal', image: 'images/icons/bhopal_city.jpg' },
  { name: 'Dehradun', image: 'images/icons/dehradun_city.jpg' },
];

const PopularCities = ({title}) => {
  useEffect(() => {
    window.dispatchEvent(new Event('resize')); // Force resize event
  }, []);
  const settings = {
    ltr: false, // Enables right-to-left scrolling
    infinite: true,
    speed: 3000, // Adjusted for smoother scrolling
    slidesToShow: 8,
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Speed for continuous scroll
    cssEase: 'linear', // Ensures smooth transition
    pauseOnHover: true, // Pause on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  console.log(cityData)
  
  return (
    <section className="our-partner">
      <div className="container-fluid">
        <div className="section-header text-center">
          <div className="main-title py-3">
            <span>{title}</span> <span className="blue">Cities</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Slider className="partner-list mt-3" {...settings}>
              {
              cityData.map((city, index) => (
                <div key={index} className="item">
                  <div className="icon">
                    <img src={city.image} alt={city.name} />
                  </div>
                  <div className="overlaya">
                    <h6 style={{fontSize:"13px"}}>{city.name}</h6>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCities;
