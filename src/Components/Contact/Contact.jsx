import React, { useState } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can send this data to an email service or backend)
    console.log("Form submitted", formData);
  };

  return (
    <>
    <Navbar/>

      <section
        className="about-banner"
        style={{ backgroundImage: "url(./images/contactus.jpg)" }}
      >
        <h2 className="services_header">
          Contact <span style={{ color: "#ff0022" }}>Us</span>
        </h2>
        <img
          src="./images/contact_us.jpg"
          className="img-fluid dnone"
          alt="Contact Us"
        />
      </section>

      <section className="contact-page-sec all-service">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-map-marked"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>Lucknow</h2>
                    <span>Sector 4B Vrindavan Colony, Lucknow</span>
                    <span>Uttar Pradesh 226029</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-map-marked"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>Sitapur</h2>
                    <span>Munshiganj, Near Water Tank</span>
                    <span>Sitapur 261001</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>Helpline No.</h2>
                    <span>+91-8400900581</span>
                    <span>+91-8400900581</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="contact-page-form">
                <div className="section-header text-">
                  <div
                    className="main-title"
                    style={{
                      color: "#ff0022",
                      textTransform: "capitalize",
                      fontSize: "30px",
                    }}
                  >
                    Get in <span>Touch</span>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="email"
                          placeholder="E-mail"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 message-input">
                      <div className="single-input-field">
                        <textarea
                          placeholder="Write Your Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
<div style={{display:"flex", alignItems:"center", justifyContent:"start"}}>
<div className="single-input-fieldsbtn">
                      <input type="submit" value="Submit" />
                    </div>
</div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-page-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.6110177099376!2d80.94900311132012!3d26.75678641667641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb0facf57919%3A0x404369c923a7e431!2sPhase%202%2C%20Sector%204B%2C%20Vrindavan%20Colony%2C%20Lucknow%2C%20Uttar%20Pradesh%20226014!5e0!3m2!1sen!2sin!4v1730898526925!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default Contact;
