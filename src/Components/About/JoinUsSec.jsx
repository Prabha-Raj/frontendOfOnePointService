import React, { useState } from "react";

const JoinUsSection = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    role: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("fullname", formData.fullname);
    form.append("email", formData.email);
    form.append("role", formData.role);
    form.append("file", formData.file);

    fetch("https://getform.io/f/256aaa5a-65ed-48e8-a53c-faff9d221b0d", {
      method: "POST",
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submission successful", data);
      })
      .catch((error) => {
        console.error("Form submission error", error);
      });
  };

  return (
    <section
      className="app-section bg-white mob_count py-120"
      style={{ backgroundImage: "url(./images/joinbg.jpg)" }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center mb-4">
              <h2 className="site-title" style={{ color: "#fff" }}>
                Our Openings
              </h2>
            </div>
          </div>
        </div>
        <div className="joinusteam">
          <div className="row">
            <div
              className="col-xl-7 col-lg-7 align-self-center aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <img src="images/join.png" alt="Images" width="100%" />
            </div>

            <div className="col-xl-5 col-lg-5 align-self-center">
              <div className="joines">
                <form
                  acceptCharset="UTF-8"
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                >
                  <div className="form-group">
                    <label htmlFor="fullname">Full Name*</label>
                    <input
                      type="text"
                      name="fullname"
                      className="form-control"
                      id="fullname"
                      placeholder="Your Name*"
                      value={formData.fullname}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email address*</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="role">Select Role*</label>
                    <select
                      name="role"
                      className="form-control"
                      id="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled selected>
                        Select your role
                      </option>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                      <option value="guest">Guest</option>
                    </select>
                  </div>

                  <div className="form-group mt-3">
                    <label className="mr-4">Upload your CV:</label>
                    <input
                      type="file"
                      name="file"
                      onChange={handleFileChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
