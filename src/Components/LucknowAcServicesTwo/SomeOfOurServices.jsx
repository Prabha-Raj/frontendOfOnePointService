import React from "react";

const SomeOfOurServices = () => {
  const services = [
    {
      image: "./images/iac.jpg",
      title: "AC Repair",
      description:
        "We offer high-quality installation and repairing service of residential and commercial air conditioning with the use of professional equipment and fine materials, at a lower cost.",
      iconWidth: "35px",
    },
    {
      image: "./images/wc.png",
      title: "Washing Machine Repair",
      description:
        "We provide a full range of repairing and maintenance of washing machines for residential and commercial customers. We always strive to provide the best possible solution to you.",
      iconWidth: "32px",
    },
    {
      image: "./images/fd.png",
      title: "Fridge Repair",
      description:
        "We are providing top-quality fridge repair service at a reasonable price. Just one call, and you can book your any brand's refrigerator repair service at your scheduled time.",
      iconWidth: "35px",
    },
    {
      image: "./images/mw.png",
      title: "Microwave Repair",
      description:
        "We provide you the best and highest-level quality of services to repair microwaves. We provide you all types of Countertop microwave repair services that can protect your kitchen.",
      iconWidth: "30px",
    },
    {
      image: "./images/wc1.png",
      title: "Water Cooler Repair",
      description:
        "We provide services of highly experienced water cooler repair professionals for a very affordable price. We provide services for all kinds of water-cooler repair needs, both big and small.",
      iconWidth: "35px",
    },
    {
      image: "./images/df.jpg",
      title: "Deep Freezer Repair",
      description:
        "We provide you with the best and highest-level quality of service to repair deep freezers. Get the best price on repairing, installing, and uninstalling services for the portable deep freezer in your area.",
      iconWidth: "35px",
    },
    {
      image: "./images/inver.png",
      title: "Inverter Repair",
      description:
        "We bring you customer satisfaction with the quality of the service. Our professional is always ready to help you according to your need for inverter repair, at your doorstep at your relevant time.",
      iconWidth: "35px",
    },
    {
      image: "./images/gys.png",
      title: "Geyser Repair",
      description:
        "We bring you customer satisfaction with the quality of the service. Our professional is always ready to help you according to your need for geyser repair, at your doorstep and your relevant time.",
      iconWidth: "35px",
    },
  ];

  return (
    <section className="all-service">
      <div className="container-fluid">
        <div
          className="main-title"
          style={{
            color: "#ff0022",
            textTransform: "capitalize",
            fontSize: "30px",
          }}
        >
          Some of our Services that<span> Will Prove Valuable</span>
        </div>
        <div className="row justify-content-center gy-4 mt-3">
          {services.map((service, index) => (
            <div className="col-lg-3 col-md-6 mt-2" key={index}>
              <div className="txtbox">
                <h5>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: service.iconWidth }}
                  />{" "}
                  {service.title}
                </h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SomeOfOurServices;
