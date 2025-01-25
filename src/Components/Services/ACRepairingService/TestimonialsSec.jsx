import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      rating: 4.0,
      text: "I recently had my AC serviced in Aliganj by One Point and was blown away by their level of expertise. The technician who...",
      author: "Meera",
      location: "Lucknow",
      image: "images/testi3.jpg",
    },
    {
      rating: 5.0,
      text: "I am the happiest customer of One Point's AC service in Aliganj, Lucknow. Their technicians are extremely professional.",
      author: "Parth",
      location: "Lucknow",
      image: "images/testi3.jpg",
    },
    {
      rating: 4.2,
      text: "My AC was not cooling well enough. I called One Point Services & they resolved my AC cooling issue. Best & efficient.",
      author: "Gia",
      location: "Lucknow",
      image: "images/testi3.jpg",
    },
    {
      rating: 3.5,
      text: "Searching for AC repair in Gomti Nagar? Book their service right now. I am fully satisfied with the quality of work.",
      author: "Nitya",
      location: "Lucknow",
      image: "images/testi3.jpg",
    },
    {
      rating: 4.4,
      text: "One Point is the only AC service provider I trust the most. Their technicians always provide great customer service.",
      author: "Bhavna",
      location: "Lucknow",
      image: "images/testi3.jpg",
    },
    {
      rating: 5.0,
      text: "Mera AC bhut voice kar rha tha. Local technician mil nhi rhe the. Facebook par enka advertisement dekha aur book kiya.",
      author: "Hridhaan",
      location: "Lucknow",
      image: "images/testi3.jpg",
    },
    {
      rating: 4.3,
      text: "Technician Rohit was so competent!! He's been maintaining my AC & heating for many years. He is so efficient.",
      author: "Fariha Farzana",
      location: "Lucknow",
      image: "images/testi3.jpg",
    },
    {
      rating: 4.3,
      text: "Technician Rohit was so competent!! He's been maintaining my AC & heating for many years. He is so efficient.",
      author: "Fariha Farzana",
      location: "Lucknow",
      image: "images/testi3.jpg",
    },
    {
      rating: 4.3,
      text: "Technician Rohit was so competent!! He's been maintaining my AC & heating for many years. He is so efficient.",
      author: "Fariha Farzana",
      location: "Lucknow",
      image: "images/testi3.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 6,
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
    <section className="testimonial-area ts-bg py-120" id="clientsay">
      <div className="container-fluid">
        <div
          className="main-title text-center"
          style={{
            color: "#fff",
            textTransform: "capitalize",
            fontSize: "33px",
            fontWeight: 500,
          }}
        >
          Clients <span className="text-white">Testimonials</span>
        </div>
        <div className="row justify-content-center gy-4 mt-3 testimonials-container">
          <div className="col-lg-12">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-single">
                  <div className="testimonial-rate">
                    <span className="ratings mx-1">
                      {testimonial.rating.toFixed(1)}
                    </span>
                    {Array.from({ length: Math.floor(testimonial.rating) }).map(
                      (_, i) => (
                        <i
                          key={`full-star-${i}`}
                          className="fas fa-star text-warning"
                        ></i>
                      )
                    )}
                    {testimonial.rating % 1 !== 0 && (
                      <i className="fas fa-star-half-alt text-warning"></i>
                    )}
                  </div>
                  <div className="testimonial-quote">
                    <p>{testimonial.text}</p>
                  </div>
                  <div className="testimonial-content">
                    <div className="testimonial-author-img">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        loading="lazy"
                      />
                    </div>
                    <div className="testimonial-author-info">
                      <h4>{testimonial.author}</h4>
                      <p>{testimonial.location}</p>
                    </div>
                  </div>
                  <span className="testimonial-quote-icon">
                    <i className="far fa-quote-right"></i>
                  </span>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
