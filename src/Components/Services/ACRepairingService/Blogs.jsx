import React from "react";
import Slider from "react-slick";
import "./Blogs.css"; // Custom styles for matching the design

const Blogs = () => {
  const blogPosts = [
    {
      title: "Blog Post 1",
      image: "./images/ac_services.jpg",
      date: "June 10, 2024",
      description: "One Point provides window and split AC services in Lucknow.",
      link: "blog_detail.html",
    },
    {
      title: "Blog Post 2",
      image: "./images/ac_services.jpg",
      date: "June 10, 2024",
      description: "One Point provides window and split AC services in Lucknow.",
      link: "blog_detail.html",
    },
    {
      title: "Blog Post 3",
      image: "./images/ac_services.jpg",
      date: "June 10, 2024",
      description: "One Point provides window and split AC services in Lucknow.",
      link: "blog_detail.html",
    },
    {
      title: "Blog Post 4",
      image: "./images/ac_services.jpg",
      date: "June 10, 2024",
      description: "One Point provides window and split AC services in Lucknow.",
      link: "blog_detail.html",
    },
    {
      title: "Blog Post 5",
      image: "./images/ac_services.jpg",
      date: "June 10, 2024",
      description: "One Point provides window and split AC services in Lucknow.",
      link: "blog_detail.html",
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="blogs-section">
      <div className="container-fluid">
        <div className="section-header">
          <h2>
            Our <span className="highlight">Blogs</span>
          </h2>
        </div>
        <Slider {...sliderSettings}>
          {blogPosts.map((blog, index) => (
            <div key={index} className="blog-item">
              <div className="blog-card">
                <div className="blog-image">
                  <img src={blog.image} alt={`Blog ${index + 1}`} />
                  <div className="blog-date">{blog.date}</div>
                </div>
                <div className="blog-content">
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                  <a href={blog.link} className="read-more-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Blogs;
