import React from 'react';

const DownloadAppSec = () => {
  return (
    <section className="app-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="bg-shape"></div>
            <figure className="image">
              <img src="images/mobile-app.png" className="img-fluid" alt="Mobile App" />
            </figure>
          </div>

          {/* Content Column */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">Effortless booking,<br />Exclusive discounts</span>
                <h2 className='text-danger'>Download our <br /> app now!</h2>
                <div className="text">
                  Get exclusive discounts and fast, reliable service when you book through our mobile app.
                  Download now and have access to our expert technicians at your fingertips. Convenient and easy, our app is
                  the best way to book your appliance repair service.
                </div>
              </div>
              <div className="download-btn">
                {/* <a href="#"><img src="images/apple.png" className="img-fluid" alt="Apple Store" /></a> */}
                <a href="#" ><img src="images/google.png" className="img-fluid" alt="Google Play" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSec;
