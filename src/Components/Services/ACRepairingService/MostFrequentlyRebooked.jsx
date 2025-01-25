import React from "react";
import Slider from "react-slick";
import "./MostFrequentlyRebooked.css"; // Import your custom styles if needed

const MostFrequentlyRebooked = () => {
  const services = [
    {
      imgSrc: "./images/Fan-Installation.png",
      title: "Fan Installation in Lucknow, India",
    },
    {
      imgSrc: "./images/light.png",
      title: "Festive Lights in Lucknow, India",
    },
    {
      imgSrc: "./images/tv.png",
      title: "TV Repair in Lucknow, India",
    },
    {
      imgSrc: "./images/refilling.png",
      title: "AC Gas Refilling in Lucknow, India",
    },
    {
      imgSrc: "./images/fridge.png",
      title: "Fridge Repair in Lucknow, India",
    },
    {
      imgSrc: "./images/geyser.png",
      title: "Geyser Repair in Lucknow, India",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true, 
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="bookingSectionrebooked">
      <div className="container-fluid">
        <div className="section-header">
          <div className="main-title py-3">
            Most Frequently <span className="blue">Rebooked</span>
          </div>
        </div>
        <Slider {...sliderSettings}>
          {services.map((service, index) => (
            <div className="items pt-3" key={index}>
              <div className="card">
                <img src={service.imgSrc} alt={service.title} />
                <div className="card-body">
                    <h6 className="bookedService">
                      {service.title}
                    </h6>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MostFrequentlyRebooked;
