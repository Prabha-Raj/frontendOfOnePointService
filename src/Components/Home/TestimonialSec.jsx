import React, { useEffect } from 'react';

const TestimonialSection = () => {
  useEffect(() => {
    // Dynamically load the Elfsight script
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="testimonial-section style-two" style={{ backgroundImage: 'url(images/bg-1.jpg)' }}>
      <div className="container-fluid">
        <div className="testimonial-carousel-threedefault-dots">
          <div className="testimonial-block">
            <div className="main-title" style={{ textAlign: 'center' }}>
              <span style={{ color: '#000' }}>Customer </span>
              <span className="blue">Testimonials</span>
            </div>
            <br />
            <div className="inner-box">
              <div
                className="elfsight-app-d9fa39de-8a9a-457c-8dca-98aa98a80cea"
                data-elfsight-app-lazy
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
