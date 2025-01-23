import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div
                className="footer-main"
                style={{
                    background: `url('../images/banner3.jpg') center center`,
                    // paddingTop:"30px",
                    padding: "30px 10px 0px 10px",
                    // paddingBottom:"0px"

                }}
            >
                <div className="container-fluid">
                    <div className="row">
                        {/* Footer Logo Section */}
                        <div className="col-lg-3">
                            <div className="footer-logo">
                                <img
                                    src="images/logo-one-point.svg"
                                    alt="Footer Logo"
                                    className="img-fluid"
                                />
                                <p className="lead mb-0">
                                    घर में कुछ भी हो खराब,
                                    <br />
                                    करें <span className="fw-bold text-white">One Point</span> को याद
                                </p>
                            </div>
                            <div className="footer-text">
                                <p>
                                    Welcome to One Point Services – your partner for in-home electronic appliance
                                    repairs near you! We take pride in delivering affordable and customer-centric
                                    repair services.
                                </p>
                            </div>
                        </div>

                        {/* Important Links Section */}
                        <div className="col-lg-2 col-sm-4">
                            <FooterLinks
                                title="Important Links"
                                links={[
                                    { label: 'Home', href: 'index.html' },
                                    { label: 'About Us', href: 'aboutus.html' },
                                    { label: 'Services', href: '#' },
                                    { label: 'Quick Help', href: '#' },
                                    { label: 'Contact Us', href: '#' },
                                    { label: 'Privacy Policy', href: 'Privacy_Policy.html' },
                                    { label: 'Terms & Conditions', href: 'Terms&Conditions.html' },
                                ]}
                            />
                        </div>

                        {/* Services Section */}
                        <div className="col-lg-4 col-sm-6">
                            <div className="ftr-links">
                                <h5 className="ftr-heading">Services</h5>
                                <div className="btm-line maroon-bg my-3"></div>
                                <div className="services-grid">
                                    <div className="row row-cols-3">
                                        {[
                                            { label: 'AC Repair Service', href: 'ac-service-repair.html' },
                                            { label: 'Water Purifier Repair', href: '#' },
                                            { label: 'Refrigerator Repair', href: '#' },
                                            { label: 'Microwave Repair', href: '#' },
                                            { label: 'Geyser Repair', href: '#' },
                                            { label: 'Electrician Service', href: '#' },
                                            { label: 'LED TV Repair', href: '#' },
                                            { label: 'AC Servicing', href: '#' },
                                            { label: 'RO Servicing', href: '#' },
                                            { label: 'Water Cooler Repair', href: '#' },
                                            { label: 'Washing Machine Repair', href: '#' },
                                            { label: 'Deep Freezer Repair', href: '#' },
                                        ].map((service, index) => (
                                            <p key={index} className="col-6 ftr-link-label">
                                                <a href={service.href} >
                                                    <i className="fa fa-caret-right" style={{ color: "#ff0022" }}></i> {service.label}
                                                </a>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="col-lg-3 col-sm-6 align-right">
                            <ContactDetails />
                        </div>
                    </div>
                </div>

                {/* Trust Badges, Payment Security, Ratings */}
                <div className="container-fluid footergb">
                    <div className="row">
                        <TrustSection />
                    </div>
                </div>

                {/* Footer Links */}
                <div className="container-fluid">
                    <div className="p-3 text-center footer-links">
                        {['Agra', 'Bhopal', 'Gorakhpur', 'Jaipur', 'Lucknow', 'Pune', 'Varanasi', 'Patna', 'Bareilly', 'Allahabad', 'Sitapur'].map(
                            (city, index) => (
                                <a key={index} href="javascript:void(0);" className="btn btn-link" style={{ textDecoration: 'none' }}>
                                    {city}
                                </a>
                            )
                        )}
                    </div>
                </div>

            </div>
            {/* Footer Bottom Section */}
            <FooterBottom />


            {/* Scroll to Top */}
            <div
                id=""
                className="scroll-to-top-btn position-fixed m-3 rounded-lg text-white shadow-lg"
                data-bs-toggle="tooltip"
                title="Scroll to Top"
                onClick={scrollToTop}
                style={{
                    zIndex: 9999,
                    bottom: "60px",
                    right: "5px",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    backgroundColor: "red"
                }}
            >
                <i
                    className="fa fa-arrow-up"
                    style={{
                        transform: "rotate(0deg)", // Rotate the arrow upwards
                        fontSize: "20px",
                        transition: "transform 0.3s ease", // Smooth transition for hover effect
                    }}
                ></i>
            </div>

            {/* WhatsApp and Instant Booking Button */}
            <a href="#" className="whatsapp" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
            </a>
            <button className="sticky-button" id="stickyButton">
                <i className="fa-regular fa-calendar-days"></i> Instant Booking
            </button>
        </footer>
    );
};

const FooterLinks = ({ title, links }) => (
    <div className="ftr-links" style={{}}>
        {title && (
            <>
                <h5 className="ftr-heading">{title}</h5>
                <div className="btm-line maroon-bg my-3"></div>
            </>
        )}
        <div style={{ display: 'grid', gridTemplateColumns: '2' }}>
            {links.map((link, index) => (
                <p key={index} className='ftr-link-label'>
                    <a href={link.href}>
                        <i className="fa fa-caret-right me-2" style={{ color: "#ff0022" }}></i>
                        {link.label}
                    </a>
                </p>
            ))}
        </div>
    </div>
);

const ContactDetails = () => (
    <div className="ftr-contact">
        <h5 className="ftr-heading">Head Office</h5>
        <div className="btm-line maroon-bg my-3"></div>
        <div>
            <p style={{ textDecoration: 'none', color: "rgb(255 255 255 / 73%)", fontSize: "12px", fontWeight: "300" }}>
                <i className="fas fa-map-marker-alt me-2" ></i>
                Office Address
                <br />
                Sector 4B Vrindavan Colony, Lucknow, Uttar Pradesh 226029
            </p>
            <p className='ftr-link-label'>
                <i className="fas fa-phone-alt me-2"></i>
                <a href="tel:+917527053601" >+91-8400900581</a>
            </p>
            <p className='ftr-link-label'>
                <i className="fas fa-envelope me-2"></i>
                <a href="mailto: support@onepointservices.co.in" >support@onepointservices.co.in</a>
            </p>
        </div>
        <div className="ftr-social download-app">
            <h5 className="ftr-heading">Connect on Social</h5>
            <div className="btm-line maroon-bg my-3 "></div>
            <div className="d-flex" style={{ gap: "15px" }}>
                {[
                    { icon: 'facebook-f', label: 'Follow on Facebook' },
                    { icon: 'instagram', label: 'Follow on Instagram' },
                    { icon: 'twitter', label: 'Follow on Twitter' },
                    { icon: 'linkedin-in', label: 'Follow on LinkedIn' },
                ].map((social, index) => (
                    <p key={index} className='ftr-link-label'>
                        <a href="#" data-toggle="tooltip" target="_blank" rel="noopener noreferrer" title={social.label}>
                            <i className={`fab fa-${social.icon}`}  style={{fontSize:"19px"}}></i>
                        </a>
                    </p>
                ))}
            </div>
        </div>
    </div>
);

const TrustSection = () => (
    <>
        {[
            { title: 'Trust Badges', images: ['statupindia_logo.jpg', '3bestrated.jpg', 'fb like.jpg'] },
            { title: 'Payment Security', images: ['razerpay.jpg', 'ssl.jpg'] },
            { title: 'Ratings', images: ['googlerating.jpg'] },
        ].map((section, index) => (
            <div key={index} className="col-md-4">
                <h5 className="ftr-heading" style={{ margin: '20px 0px 0px' }}>
                    {section.title}
                </h5>
                <div className="btm-line maroon-bg my-2"></div>
                <div className="">
                    {section.images.map((image, i) => (
                        <img key={i} src={`./images/${image}`} className="logo_rating" alt={section.title} />
                    ))}
                </div>
            </div>
        ))}
    </>
);

const FooterBottom = () => (
    <div className="footer_bottom" >
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 px-2" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div className="copyroght ps-2">
                        <p>One Point Multiple Services LLP © 2024 All rights reserved.</p>
                    </div>
                </div>
                <div className="col-md-6 text-md-right">
                    <div className="designed_by">
                        <p>
                            Powered By: <a href="https://www.sigmasoftwares.org" target="_blank" rel="nofollow" style={{ textDecoration: "none" }}>Sigmait Software Designers Pvt. Ltd.</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default Footer;
