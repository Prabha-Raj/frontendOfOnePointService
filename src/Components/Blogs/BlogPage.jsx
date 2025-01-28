import React from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      image: "./images/ac_services.jpg",
      date: "June 10, 2024",
      title: "Blog Post 1",
      description: "One Point provides window and split AC services in Lucknow. You can book services such as AC installation.",
      link: "/blog_details.html",
    },
    {
      id: 2,
      image: "./images/ro_services.jpg",
      date: "June 11, 2024",
      title: "Blog Post 2",
      description: "One Point provides window and split AC services in Lucknow. You can book services such as AC installation.",
      link: "/blog_details.html",
    },
    {
      id: 3,
      image: "./images/fridge_services.jpg",
      date: "June 12, 2024",
      title: "Blog Post 3",
      description: "One Point provides window and split AC services in Lucknow. You can book services such as AC installation.",
      link: "/blog_details.html",
    },
    {
      id: 4,
      image: "./images/tvrepair.jpg",
      date: "June 13, 2024",
      title: "Blog Post 4",
      description: "One Point provides window and split AC services in Lucknow. You can book services such as AC installation.",
      link: "/blog_details.html",
    },
    {
      id: 5,
      image: "./images/DeepFreezer.jpg",
      date: "June 14, 2024",
      title: "Blog Post 5",
      description: "One Point provides window and split AC services in Lucknow. You can book services such as AC installation.",
      link: "/blog_details.html",
    },
    {
      id: 6,
      image: "./images/ElectricChimney.jpg",
      date: "June 15, 2024",
      title: "Blog Post 6",
      description: "One Point provides window and split AC services in Lucknow. You can book services such as AC installation.",
      link: "/blog_details.html",
    },
  ];

  return (
    <>
    <Navbar/>

    <div>
      {/* About Banner Section */}
      <section
        className="about-banner"
        style={{ backgroundImage: "url(./images/contactus.jpg)" }}
      >
        <h2 className="services_header">
          Our <span style={{ color: "#ff0022" }}>Blog</span>
        </h2>
        <img src="./images/blog.jpg" className="img-fluid dnone" alt="Banner" />
      </section>

      {/* Blog Page Section */}
      <section className="contact-page-sec all-service">
        <div className="container-fluid">
          {blogs.reduce((rows, blog, index) => {
            const rowIndex = Math.floor(index / 3);
            if (!rows[rowIndex]) rows[rowIndex] = [];
            rows[rowIndex].push(blog);
            return rows;
          }, []).map((row, rowIndex) => (
            <div className="blog-row" key={rowIndex}>
              {row.map(({ id, image, date, title, description, link }) => (
                <div className="blog" key={id}>
                  <div className="blog-image">
                    <img src={image} alt={title} />
                    <div className="date">{date}</div>
                  </div>
                  <div className="blog-content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <Link to={link} className="btn-grad1" style={{textDecoration:"none"}}>Read More</Link>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>


<Footer/>
    </>
  );
};

export default BlogPage;
