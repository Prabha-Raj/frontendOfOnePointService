import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RecentBooking.css"; // Custom CSS file

const RecentBookings = () => {
  const bookings = [
    {
      service: "AC Service Repair",
      description: "My AC is not working, it's not cooling and neither operating well.",
      name: "Manisha Kumari",
      location: "Ramnagar, Lakhimpur (UP)",
    },
    {
      service: "AC Service Repair",
      description: "My AC is not working, it's not cooling and neither operating well.",
      name: "Manisha Kumari",
      location: "Ramnagar, Lakhimpur (UP)",
    },
    {
      service: "AC Service Repair",
      description: "My AC is not working, it's not cooling and neither operating well.",
      name: "Manisha Kumari",
      location: "Ramnagar, Lakhimpur (UP)",
    },
    {
      service: "AC Service Repair",
      description: "My AC is not working, it's not cooling and neither operating well.",
      name: "Manisha Kumari",
      location: "Ramnagar, Lakhimpur (UP)",
    },
    {
      service: "AC Service Repair",
      description: "My AC is not working, it's not cooling and neither operating well.",
      name: "Manisha Kumari",
      location: "Ramnagar, Lakhimpur (UP)",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bookingSection">
      <div className="container-fluid">
        <div className="section-header">
          <h2 className="main-title ">
            Recent <span className="blue">Bookings</span>
          </h2>
        </div>
        <Slider {...sliderSettings}>
          {bookings.map((booking, index) => (
            <div className="item px-2" key={index}>
              <div className="card ">
                <div className="card-body">
                  <h6 className="bookedService card-title">
                    {booking.service}
                  </h6>
                  <p className="card-text small text-muted" style={{fontSize:"12px", lineHeight:"20px"}} >{booking.description}</p>
                </div>
                <div className="card-footer bg-white border-1">
                  <div className="row align-items-start">
                    <div className="col-auto">
                      <div className="avatar bg-light rounded-circle p-2">
                        <i className="fa fa-user text-black"></i>
                      </div>
                    </div>
                    <div className="col ps-2">
                      <h6 className="mb-0 small">{booking.name}</h6>
                      <p className="text-muted small mb-0" style={{fontSize:"9px"}}>
                        <i className="fa fa-map-marker-alt me-1" style={{fontSize:"14px"}}></i>
                        {booking.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RecentBookings;
