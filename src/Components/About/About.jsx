import React from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import TeamSec from "./TeamSec";
import StatsSec from "./StatsSec";
import JoinUsSection from "./JoinUsSec";
import PopularCities from "../Shared/PopularCities";

const About = () => {
    return (
        <>
            <Navbar />
            {/* Banner Section */}
            <section className="banner ">
                <div className="container-fluid">
                    <div className="row justify-content-end">
                        <div className="col-lg-12 col-xl-12">
                            <div className="top-banner-content text-center">
                                <h1>About Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <div className="about-container-fluid">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 details-txt">
                            <div className="one-text-height"></div>
                            <div className="about-text">
                                <div className="tb-section-heading tb-style2">
                                    <h1>Welcome to One Point</h1>
                                    <div className="mt-separator-outer">
                                        <div className="mt-separator bg-primary"></div>
                                    </div>
                                    <p>
                                        Welcome to One Point Services – your partner for in-home
                                        electronic appliance repairs near you! We take pride in
                                        delivering affordable and customer-centric repair services,
                                        ensuring you have access to quick, professional services
                                        that bring peace of mind. Our team of expert technicians is
                                        committed to not only providing efficient and cost-effective
                                        repairs but also to educating you on proper electronic
                                        appliance maintenance.
                                    </p>
                                    <p>
                                        At One Point, we're more than just a repair service; we're
                                        here to empower you with the knowledge to keep your
                                        appliances running smoothly. Choose One Point Services for a
                                        seamless repair experience and ongoing support in
                                        maintaining your appliances.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-xs-12">
                            <div className="one_bar">
                                <div className="one-height one-radious-4 one-relative">
                                    <div
                                        className="one-bg"
                                        style={{ backgroundImage: "url(images/about-us.jpg)" }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Story Section */}
            <section className="app-section bg-white mob_count py-120">
                <div className="container-fluid">
                    <div className="row awards-text">
                        <div
                            className="col-xl-6 col-lg-6 aos-init aos-animate"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            data-aos-once="true"
                        >
                            <img src="images/ourstory.jpg" alt="Our Story" width="100%" />
                        </div>
                        <div className="col-xl-6 col-lg-6 align-self-center">
                            <div className="site-heading">
                                <h2 className="site-title mt-2" style={{ color: "red" }}>
                                    Our <span>Story</span>
                                </h2>
                            </div>
                            <p>
                                Excellence, Innovation, and Trust – Over the years, our
                                relentless dedication to delivering top-tier electronic
                                appliance repair and maintenance services has not only earned us
                                the trust of our customers but also garnered numerous
                                prestigious awards and recognitions in the industry.
                            </p>
                            <p>
                                These accolades stand as a testament to our consistent quality,
                                technological expertise, and exceptional service standards. From
                                innovative solutions to unmatched reliability, every recognition
                                reflects the hard work and dedication of our team, who strive to
                                set new benchmarks in the appliance repair industry.
                            </p>
                            <p>
                                We are profoundly grateful for the trust and support of our
                                customers and partners, who have been instrumental in our
                                journey of continuous growth and improvement. At One Point, our
                                mission remains steadfast.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="app-section bg-white mob_count py-120">
                <div className="container-fluid">
                    <div className="row awards-text">
                        <div className="col-xl-6 col-lg-6 align-self-center">
                            <div className="site-heading">
                                <h2 className="site-title mt-2" style={{ color: "red" }}>
                                    Vision & <span>Mission</span>
                                </h2>
                            </div>
                            <p>
                                At One Point Multiple Services LLP, we take pride in our
                                commitment to excellence, innovation, and customer satisfaction.
                                Over the years, our dedication to providing top-tier electronic
                                appliance repair and maintenance services has earned us numerous
                                awards and recognitions within the industry. These accolades
                                highlight our consistent quality, reliability, and the trust our
                                clients place in us.
                            </p>
                            <p>
                                Our achievements include recognition for outstanding service
                                standards, technological expertise, and customer satisfaction,
                                making us a leader in the appliance repair industry. Each award
                                reflects our team's hard work and dedication to continuous
                                improvement, and we are grateful for the support of our
                                customers and partners who have made these honors possible.
                            </p>
                        </div>
                        <div
                            className="col-xl-6 col-lg-6 aos-init aos-animate"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            data-aos-once="true"
                        >
                            <img src="images/mission.jpg" alt="Vision & Mission" width="100%" />
                        </div>
                    </div>
                </div>
            </section>

            {/* team section */}
            <TeamSec />

            <section className="app-section bg-white mob_count py-120">
                <div className="container-fluid">
                    {/* Section Heading */}
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="site-heading text-center mb-5">
                                <h2 className="site-title" style={{ color: "red" }}>
                                    Awards & <span>Recognition</span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Awards Section Content */}
                    <div className="row awards-text">
                        {/* Left Image */}
                        <div
                            className="col-xl-6 col-lg-6 aos-init aos-animate"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            data-aos-once="true"
                        >
                            <img
                                src="images/Awards_Recognition.jpg"
                                alt="Awards and Recognition"
                                width="100%"
                            />
                        </div>

                        {/* Right Text Content */}
                        <div className="col-xl-6 col-lg-6 align-self-center">
                            <p>
                                At One Point Multiple Services LLP, we take pride in our
                                commitment to excellence, innovation, and customer satisfaction.
                                Over the years, our dedication to providing top-tier electronic
                                appliance repair and maintenance services has earned us numerous
                                awards and recognitions within the industry. These accolades
                                highlight our consistent quality, reliability, and the trust our
                                clients place in us.
                            </p>
                            <p>
                                Our achievements include recognition for outstanding service
                                standards, technological expertise, and customer satisfaction,
                                making us a leader in the appliance repair industry. Each award
                                reflects our team's hard work and dedication to continuous
                                improvement, and we are grateful for the support of our customers
                                and partners who have made these honors possible.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* stats Section */}
            <StatsSec />

            {/* join us section */}
            <JoinUsSection/>

            {/* Servinving Cities */}
            <PopularCities title={"Serving"}/>


            <Footer />
        </>
    );
};

export default About;
