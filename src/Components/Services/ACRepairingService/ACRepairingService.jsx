import React from "react";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import FAQSection from "./FAQSection";
import SelectService from "./SelectYourService/SelectService";
import Testimonials from "./TestimonialsSec";
import RecentBookings from "./RecentBooking";
import AllService from "./AllService";
import MostFrequentlyRebooked from "./MostFrequentlyRebooked";
import MostSearchedAreas from "./MostSearchedAreas";
import Blogs from "./Blogs";
import PopularCities from "../../Shared/PopularCities";
import WhyChoose from "./WhyChoose";
import { Link } from "react-router-dom";

const ACRepairingService = () => {
  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <section className="about-banner inner-pg-banner">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="banner-content">
                <div className="heading">
                  <h1>AC Repair & Services</h1>
                </div>
                <div className="banner-link-page" id="company">
                  <Link to="/" style={{textDecoration:"none"}}>Home</Link>
                  <i className="fa-solid fa-chevron-right"></i>
                  <Link to="/ac-repair-services.html" style={{textDecoration:"none"}}>AC Repair & Services</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Select City Section */}
      <section className="select-city">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="section-header">
                <div className="main-title yourcity" style={{fontSize:"30px"}}>
                  Your City
                  <span className="blue"> Lucknow</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <form method="post" id="myForm">
                <div className="">
                  <select
                    className="form-select"
                    name="city"
                    id="city"
                    placeholder="Select City"
                    required
                  >
                    <option value="select_city">--Select your City--</option>
                    {[
                      "Agra",
                      "Aligarh",
                      "Bareilly",
                      "Bhopal",
                      "Dehradun",
                      "Ghaziabad",
                      "Gorakhpur",
                      "Greater Noida",
                      "Indore",
                      "Jaipur",
                      "Kanpur",
                      "Lucknow",
                      "Meerut",
                      "Moradabad",
                      "Noida",
                      "Patna",
                      "Pune",
                      "Sitapur",
                      "Varanasi",
                    ].map((city) => (
                      <option value={city} key={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Top Services Section */}
      <section className="top-services">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="top-left">
                <img
                  src="images/partner/optimised_ac_foam_sku-ezgif.com-webp-to-gif-converter.gif"
                  className="img-fluid"
                  alt="AC Repair Service"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8">
              <div className="right-heading">
                <p>
                  We provide professional AC repair service in Lucknow to ensure
                  the efficient and uninterrupted performance of your air
                  conditioning systems. Our team of skilled technicians is
                  well-equipped to handle any type of AC repair in Lucknow, be
                  it residential or commercial. We understand the importance of
                  a properly functioning AC unit, especially in harsh weather
                  conditions.
                </p>
                <div className="OnPointCover">
                  <div className="d-flex align-items-center">
                    <div>
                      <img
                        src="./images/png.png"
                        style={{ width: "80px" }}
                        alt="Warranty"
                      />
                    </div>
                    <div>
                      <p style={{ fontWeight: 500, margin: 0, textAlign: "center" }}>
                        <span className="flatoff">
                          No Question Asked -
                          <span className="text-red blink-hard">
                            {" "}
                            Upto 1 Year Service Warranty
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <SelectYourService /> */}
      <SelectService/>
      <FAQSection />

      <>
        <section className="bottom-services">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="lan">
                  <div className="d-flex1">
                    <div>
                      <h4 className="Verified"> One Point Promise</h4>
                      <p className="warrenty">✓ Service Warranty </p>
                      <p className="warrenty">✓ Verified Professionals </p>
                      <p className="warrenty">✓ Hassle Free Booking </p>
                    </div>
                    <div>
                      <div className="subServicePrice lh-1">
                        <img
                          src="./images/warrenty.png"
                          alt=""
                          width="100%"
                          style={{ width: 120 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="lan">
                  <div className="d-flex1">
                    <div>
                      <h4 className="Verified">Trust and Reliable Services</h4>
                      <p className="warrenty">✓ Quick Response </p>
                      <p className="warrenty">✓ Verified Professionals </p>
                      <p className="warrenty">✓ Transparent Pricing </p>
                    </div>
                    <div>
                      <div className="subServicePrice lh-1">
                        <img
                          src="./images/warrenty1.png"
                          alt=""
                          width="100%"
                          style={{ width: 120 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bottom-services">
          <div className="container-fluid">
            <div className="main-services">
              <div className="section-header">
                <div className="main-title">
                  Your comprehensive guide for AC repairs
                  <span className="blue">in Lucknow, India</span>
                </div>
                <p className="sub-title">
                  We offer a range of AC repair services in Lucknow, India, which are
                  aimed to keep your AC in top-notch condition. Whether you are
                  looking for a "split ac repair near me" or a "window ac repair near
                  me", we've got you covered with our meticulous AC repair service.
                </p>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="b-image">
                    <img src="images/banner/add-service2.jpg" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="b-content">
                    <div id="main">
                      <div className="accordion" id="faqAccordion">
                        <div className="middle-content mt-5">
                          <h4>Understanding the scope</h4>
                          <p>
                            When it comes to AC repair, precision is important. Our
                            skilled technicians delve deep into the heart of your air
                            conditioner to diagnose and resolve issues promptly,
                            ensuring optimal performance. From minor adjustments to
                            complex fixes, we handle it all with finesse.
                          </p>
                        </div>
                        <div className="middle-content mt-5">
                          <h4>Inclusions and exclusions</h4>
                          <p>
                            Our AC repair service leaves no stone unturned. We
                            meticulously inspect every component, from the coils to
                            the filters, ensuring thorough cleaning and maintenance.
                            However, please note that certain parts, such as spare
                            components beyond our standard toolkit may require
                            additional charges, for example, AC pcb repairs, etc.
                          </p>
                        </div>
                        <div className="middle-content mt-5">
                          <h4>Benefits unveiled</h4>
                          <p>
                            Experience the difference with our AC repair services near
                            you. Enjoy uninterrupted cooling and enhanced energy
                            efficiency as our experts fine-tune your unit to
                            perfection. Say goodbye to unwanted noise, erratic
                            cooling, and pesky leaks with our comprehensive repair
                            solutions.
                          </p>
                        </div>
                        <div className="middle-content mt-5">
                          <h4>The procedure unveiled</h4>
                          <p>
                            Our technicians kick off the process with a detailed
                            inspection, identifying any underlying issues. With
                            precision and expertise, we address each concern
                            methodically, utilizing high-quality spare parts and
                            cutting-edge tools for lasting results.
                          </p>
                        </div>
                        <div className="middle-content mt-5">
                          <h4>Details matter</h4>
                          <p>
                            At Urban Company, we understand the importance of
                            thoroughness. That's why our repair service encompasses
                            pre and post-service checks, ensuring that every aspect of
                            your AC is functioning flawlessly. Bid farewell to worries
                            as we provide a 30-day warranty, offering peace of mind
                            long after the service is completed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bottom-services">
          <div className="container-fluid">
            <div className="main-services">
              <div className="middle-content mt-3">
                <h4>Discover top-notch AC repair services in Lucknow, India</h4>
                <p>
                  When it comes to AC repair, trust only the best. Urban Company's
                  dedicated professionals are trained to deliver excellence, backed by
                  years of expertise and a commitment to customer satisfaction. With
                  us, your comfort is our priority, and we go above and beyond to
                  ensure a hassle-free experience.
                </p>
                <p>
                  In conclusion, AC repair doesn't have to be daunting. With Urban
                  Company's meticulous service, you can be rest assured that your
                  cooling companion is in capable hands.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bottom-services">
          <div className="container-fluid">
            <div className="main-services">
              <div className="section-header">
                <div className="main-title">
                  Need AC gas refill?
                  <span className="blue">Look no further!</span>
                </div>
                <p className="sub-title">
                  If you are looking for " AC gas refill near me", you've come to the
                  right place! At Urban Company, we understand the importance of a
                  well-functioning air conditioning system, especially in the
                  sweltering heat in Lucknow, India. Our AC gas refill service is
                  designed to ensure that your AC unit is running smoothly and
                  efficiently, providing you with cool and comfortable air all year
                  round.
                </p>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="b-content">
                    <div id="main">
                      <div className="accordion" id="faqAccordion">
                        <div className="middle-content mt-5">
                          <h4>Thorough pre-service checks</h4>
                          <p>
                            Before starting the refill process, our expert technicians
                            conduct a detailed inspection of your AC unit, including
                            checking the gas levels to identify any repairs that may
                            be needed.
                          </p>
                        </div>
                        <div className="middle-content mt-5">
                          <h4>Leak identification and fixing</h4>
                          <p>
                            Safety is our top priority. That's why we use advanced
                            techniques such as leak testing with nitrogen, compressed
                            air, and soap solution to identify and fix any leaks in
                            your AC system. Our technicians are skilled in brazing and
                            rechecking to ensure that your AC is leak-free.
                          </p>
                        </div>
                        <div className="middle-content mt-5">
                          <h4>Gas refill</h4>
                          <p>
                            Once any leaks are fixed, we proceed with filling the gas
                            by weight or back pressure, depending on the specific
                            requirements of your AC unit. Our goal is to restore your
                            AC's cooling efficiency and performance.
                          </p>
                        </div>
                        <div className="middle-content mt-5">
                          <h4>Post-service cleanup</h4>
                          <p>
                            After completing the gas refill, our technicians perform a
                            thorough cleanup of your AC unit and the surrounding
                            service area, leaving no mess behind.
                          </p>
                        </div>
                        <div className="middle-content mt-5">
                          <h4>Final checks</h4>
                          <p>
                            Before leaving, our technicians conduct final checks to
                            ensure that your AC is functioning optimally. This
                            includes checking AMP, pressure, air flow, temperature,
                            and noise levels to guarantee your satisfaction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="b-image">
                    <img src="images/banner/4u-bottom4.jpg" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bottom-services">
          <div className="container-fluid">
            <div className="main-services">
              <div className="middle-content mt-3">
                <h4>4 reasons why we provide the best AC gas refill near you</h4>
                <ul className="ser-listing">
                  <li>
                    Expert technicians: Our technicians are highly trained and
                    experienced in handling all types of AC systems, ensuring a
                    professional and reliable service every time.
                  </li>
                  <li>
                    30 days warranty: We stand behind the quality of our work. That's
                    why we offer a 30-day warranty on our AC gas refill service,
                    giving you peace of mind.
                  </li>
                  <li>
                    Safety first: With Urban Company, you can trust that safety is our
                    top priority. From background-verified technicians to following
                    strict SOPs for safety and hygiene, we ensure a safe and secure
                    service experience.
                  </li>
                  <li>
                    Convenient booking: Booking our AC gas refill service is easy and
                    convenient. Simply visit our app or website, choose your service
                    and preferred time slot, and leave the rest to us. When it comes
                    to AC gas refill near you, Urban Company is your trusted partner.
                    With our expert technicians, transparent pricing, and commitment
                    to quality, you can be rest assured that your AC unit is in good
                    hands. Book your AC gas refill with us today and enjoy the cool
                    comfort of your home or office all year round!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="bottom-services">
          <div className="container-fluid">
            <div className="main-services">
              <div className="section-header">
                <div className="main-title">
                  AC installation &amp; uninstallation
                  <span className="blue">made Easy</span>
                </div>
                <p className="sub-title">
                  We are the go to company for AC installation and uninstallation
                  services! Whether you're looking to beat the heat with a brand new
                  AC installation or bidding farewell to your old unit with our
                  seamless uninstallation service, we've got you covered. Let's dive
                  into the details of how our services like ac installation and ac
                  uninstallation near you can make your life easier.
                </p>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="t-image">
                    <img
                      src="images/banner/ac-installation-2.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="b-content">
                    <div id="main">
                      <div className="un-text">
                        <h4> AC uninstallation near you</h4>
                        <p>
                          Saying goodbye to your old AC? Let us handle the
                          uninstallation process for you. Our trained professionals
                          will ensure a hassle-free experience, leaving your space
                          clean and ready for your new AC. Here's what our AC
                          uninstallation service includes:
                        </p>
                      </div>
                      <div className="accordion" id="faqAccordion">
                        <div className="middle-content mt-3">
                          <h4>Safe removal</h4>
                          <p>
                            Our technicians will carefully uninstall both the indoor
                            and outdoor units, ensuring no damage is caused to your
                            property during the process.
                          </p>
                        </div>
                        <div className="middle-content mt-3">
                          <h4>Pipe fixes</h4>
                          <p>
                            Worried about leftover pipes? We've got you covered. Our
                            team will take care of any necessary pipe fixes, leaving
                            your space tidy and free of clutter.
                          </p>
                        </div>
                        <div className="middle-content mt-3">
                          <h4>Cleanup</h4>
                          <p>
                            Once the uninstallation is complete, we'll clean up the
                            service area, leaving it spotless and ready for the next
                            steps.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="t-image mt-5">
                    <img
                      src="images/banner/ac-installation-3.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div id="main">
                    <div className="un-text">
                      <h4> AC installation near you</h4>
                      <p>
                        Installing a new air conditioner can be a daunting task, but
                        not with Urban Company by your side. Our expert technicians
                        ensure a smooth installation process from start to finish,
                        leaving you with a perfectly functioning AC ready to keep you
                        cool. Here's what you can expect from our AC installation
                        service:
                      </p>
                    </div>
                    <div className="accordion" id="faqAccordion">
                      <div className="middle-content mt-3">
                        <h4>Comprehensive installation</h4>
                        <p>
                          Whether it's a split AC installation or a window AC
                          installation, our professionals are equipped to handle it
                          all. From drilling and wiring connections to setting up the
                          indoor and outdoor units, we take care of every aspect of
                          the installation process.
                        </p>
                      </div>
                      <div className="middle-content mt-3">
                        <h4>Free gas check</h4>
                        <p>
                          Worried about gas leakages? Don't be. We include a thorough
                          gas check as part of our installation service to ensure your
                          AC operates efficiently without any leaks.
                        </p>
                      </div>
                      <div className="middle-content mt-3">
                        <h4>Standardized Equipment</h4>
                        <p>
                          We use advanced tools and high-quality materials for all our
                          installations, guaranteeing efficient results and
                          long-lasting performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      <Testimonials />
      <RecentBookings/>
      <AllService/>
      <MostFrequentlyRebooked/>
      <MostSearchedAreas Areas="Areas" />
      <MostSearchedAreas Areas="Pincodes" />
      <Blogs/>
      <PopularCities title={"Other"}/>
      <WhyChoose/>

      <Footer />
    </>
  );
};

export default ACRepairingService;
