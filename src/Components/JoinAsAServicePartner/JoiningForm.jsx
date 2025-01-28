import React, { useState } from 'react';

const JoiningForm = () => {
  const [formData, setFormData] = useState({
    phone: '',
    name: '',
    email: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log(formData);
  };

  return (
    <section className="main_contact_area app pt-80 bg_fixed" style={{ backgroundImage: 'url(images/slider14.jpg)' }}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="single_contact_abs_thumb">
              <img src="images/shape1.png" className="img-fluid" alt="shape" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section_title white mb-4">
              <div className="section_main_title">
                <h1>Join As <span style={{ color: 'red' }}>Partner</span></h1>
              </div>
            </div>
            <div className="container-fluid">
              <div className="contact_from">
                <form id="contact_form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="text"
                          name="name"
                          placeholder="First Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="email"
                          name="email"
                          placeholder="Last Name"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                        >
                          <option value="">--Select City--</option>
                          <option value="Agra">Agra</option>
                          <option value="Aligarh">Aligarh</option>
                          <option value="Bareilly">Bareilly</option>
                          <option value="Bhopal">Bhopal</option>
                          <option value="Dehradun">Dehradun</option>
                          <option value="Ghaziabad">Ghaziabad</option>
                          <option value="Gorakhpur">Gorakhpur</option>
                          <option value="Greater Noida">Greater Noida</option>
                          <option value="Indore">Indore</option>
                          <option value="Jaipur">Jaipur</option>
                          <option value="Kanpur">Kanpur</option>
                          <option value="Lucknow">Lucknow</option>
                          <option value="Meerut">Meerut</option>
                          <option value="Moradabad">Moradabad</option>
                          <option value="Noida">Noida</option>
                          <option value="Patna">Patna</option>
                          <option value="Pune">Pune</option>
                          <option value="Sitapur">Sitapur</option>
                          <option value="Varanasi">Varanasi</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="join_btn">
                        <button className="btn" type="submit">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="status"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoiningForm;
