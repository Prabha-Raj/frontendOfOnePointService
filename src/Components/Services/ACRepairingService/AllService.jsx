import React from "react";
import "./AllService.css"; // Add your styles here if required

const AllService = () => {
  // Array of service data
  const services = [
    {
      name: "Voltas AC Service And Repair",
      description:
        "Book #1 Voltas AC service & Voltas AC repair experts in Lucknow, India. Trusted professionals for Voltas AC servicing, AC repair, gas refill & AC installation. Book now and save up to ₹3000 on electricity bill!",
    },
    {
      name: "Whirlpool AC Service And Repair",
      description:
        "Book #1 Whirlpool AC service & Whirlpool AC repair experts in Lucknow, India. Trusted professionals for Whirlpool AC servicing, AC repair, gas refill & AC installation. Book now and save up to ₹3000 on electricity bill!",
    },
    {
      name: "Haier AC Service And Repair",
      description:
        "Book #1 Haier AC service & Haier AC repair experts in Lucknow, India. Trusted professionals for Haier AC servicing, AC repair, gas refill & AC installation. Book now and save up to ₹3000 on electricity bill!",
    },
    {
      name: "Godrej AC Service And Repair",
      description:
        "Book #1 Godrej AC service & Godrej AC repair experts in Lucknow, India. Trusted professionals for Godrej AC servicing, AC repair, gas refill & AC installation. Book now and save up to ₹3000 on electricity bill!",
    },
    {
      name: "O General AC Service And Repair",
      description:
        "Book #1 O General AC service & O General AC repair experts in Lucknow, India. Trusted professionals for O General AC servicing, AC repair, gas refill & AC installation. Book now and save up to ₹3000 on electricity bill!",
    },
    {
      name: "Samsung AC Service And Repair",
      description:
        "Book #1 Samsung AC service & Samsung AC repair experts in Lucknow, India. Trusted professionals for Samsung AC servicing, AC repair, gas refill & AC installation. Book now and save up to ₹3000 on electricity bill!",
    },
    {
      name: "Mitsubishi AC Service And Repair",
      description:
        "Book #1 Mitsubishi AC service & Mitsubishi AC repair experts in Lucknow, India. Trusted professionals for Mitsubishi AC servicing, AC repair, gas refill & AC installation. Book now and save up to ₹3000 on electricity bill!",
    },
    {
      name: "Lloyd AC Service And Repair",
      description:
        "Book #1 Lloyd AC service & Lloyd AC repair experts in Lucknow, India. Trusted professionals for Lloyd AC servicing, AC repair, gas refill & AC installation. Book now and save up to ₹3000 on electricity bill!",
    },
    {
      name: "Blue Star AC Service And Repair",
      description:
        "Book #1 Blue Star AC service & Blue Star AC repair experts in Lucknow, India. Trusted professionals for Blue Star AC servicing, AC repair, gas refill & AC installation. Book now and save up to ₹3000 on electricity bill!",
    },
    {
      name: "LG AC Service And Repair",
      description:
        "Book #1 LG AC service & LG AC repair experts in Lucknow, India. Trusted professionals for LG AC servicing, AC repair, gas refill & AC installation. Book now and save up to ₹3000 on electricity bill!",
    },
  ];

  return (
    <section className="all-service">
      <div className="container-fluid">
        <div className="main-title" style={{ color: "#ff0022", textAlign: "left" }}>
          Looking for a specific <span>brand?</span>
        </div>
        <div className="row justify-content-center gy-4 mt-3">
          {services.map((service, index) => (
            <div className="col-lg-6 col-md-6 mt-0" key={index}>
              <div className="txtboxre_update">
                  <h6 className="text" style={{textDecoration:"none", color:"black"}}>{service.name}</h6>
                <p style={{fontSize:"10px", lineHeight:"17px"}}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllService;
