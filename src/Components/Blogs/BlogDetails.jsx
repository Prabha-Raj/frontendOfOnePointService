import React from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const BlogDetails = () => {
  return (
    <>
    <Navbar/>

    <section className="contact-page-sec all-service">
      <div className="container-fluid">
        <div className="cs-blog-detail">
          {/* Main Post Image */}
          <div className="cs-main-post">
            <img src="./images/blog_detail.jpg" className="img-fluid" alt="Blog Detail" />
          </div>

          {/* Post Title */}
          <div className="cs-post-title">
            <div className="cs-author">
              <figure>
                <a href="#">
                  <img src="./images/user1.png" alt="Author" />
                </a>
              </figure>
              <div className="cs-text">
                <a href="#">Raees SigmIT</a>
              </div>
            </div>
            <div className="post-option">
              <span className="post-date">
                <a href="#">
                  <i className="cs-color icon-calendar6"></i> Nov 23, 2024
                </a>
              </span>
              <span className="post-comment">
                <a href="#">
                  <i className="cs-color icon-chat6"></i> 4 Comments
                </a>
              </span>
            </div>
          </div>

          {/* Post Content */}
          <div className="cs-post-option-panel">
            <div className="rich-editor-text">
              <p>
                Welcome to One Point Services – your partner for in-home
                electronic appliance repairs near you! We take pride in
                delivering affordable and customer-centric repair services,
                ensuring you have access to quick, professional services that
                bring peace of mind. Our team of expert technicians is committed
                to not only providing efficient and cost-effective repairs but
                also to educating you on proper electronic appliance
                maintenance. At One Point, we're more than just a repair
                service; we're here to empower you with the knowledge to keep
                your appliances running smoothly. Choose One Point Services for
                a seamless repair experience and ongoing support in maintaining
                your appliances.
              </p>

              <p>
                Welcome to One Point Services – your partner for in-home
                electronic appliance repairs near you! We take pride in
                delivering affordable and customer-centric repair services,
                ensuring you have access to quick, professional services that
                bring peace of mind. Our team of expert technicians is committed
                to not only providing efficient and cost-effective repairs but
                also to educating you on proper electronic appliance
                maintenance. At One Point, we're more than just a repair
                service; we're here to empower you with the knowledge to keep
                your appliances running smoothly. Choose One Point Services for
                a seamless repair experience and ongoing support in maintaining
                your appliances.
              </p>

              <h4>AC Service And Repair in Lucknow, India</h4>
              <p>
                Get your window or split AC service in Lucknow, India done by
                Urban Company's Power Jet AC Service technicians. We offer you
                a 90 Day service guarantee with INR 10k insurance against damage
                for every AC serviced. Also get a no-questions-asked 90-day
                revisit policy. Only genuine spare parts are supplied with fixed
                pricing. Urban Company will help you connect with the best AC
                services to cater to your needs, right at your doorstep.
              </p>

              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <blockquote className="text-left-align">
                  <span>
                    Get your window or split AC service in Lucknow, India done
                    by Urban Company's Power Jet AC Service technicians. We
                    offer you a 90 Day service guarantee with INR 10k insurance
                    against damage for every AC serviced. Also get a
                    no-questions-asked 90-day revisit policy. Only genuine spare
                    parts are supplied with fixed pricing. Urban Company will
                    help you connect with the best AC services to cater to your
                    needs, right at your doorstep.
                  </span>
                </blockquote>
              </div>

              <p>
                Get your window or split AC service in Lucknow, India done by
                Urban Company's Power Jet AC Service technicians. We offer you
                a 90 Day service guarantee with INR 10k insurance against damage
                for every AC serviced. Also get a no-questions-asked 90-day
                revisit policy. Only genuine spare parts are supplied with fixed
                pricing. Urban Company will help you connect with the best AC
                services to cater to your needs, right at your doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <Footer/>
    </>
  );
};

export default BlogDetails;
