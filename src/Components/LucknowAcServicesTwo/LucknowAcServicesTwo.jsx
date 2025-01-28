import React from 'react'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'
import OnePointTopServices from './OnePointTopServices'
import OnePointAllServices from './OnePointAllServices'
import PeopleTalkingAboutUs from './PeopleTalkingAboutUs'
import SomeOfOurServices from './SomeOfOurServices'
import Testimonials from '../Services/ACRepairingService/TestimonialsSec'
import BrandsWeRepair from './BrandsWeRepair'

const LucknowAcServicesTwo = () => {
    return (
        <>
            <Navbar />
            <section
                className="about-banner"
                style={{ backgroundImage: "url(./images/bannerlucknow1.jpg)" }}
            >
                <h2 className="services_header">
                    Our Services in <br />{" "}
                    <span style={{ color: "#ff0022" }}>
                        Lucknow <span />
                    </span>
                </h2>
                <img src="./images/bannerlucknow.jpg" className="img-fluid dnone" />
            </section>

            {/* one point top services */}
            <OnePointTopServices/>

            <section className="We-Do">
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-12 col-sm-4 col-lg-4">
        <a href="#">
          <div className=" aos-init aos-animate mega-hover">
            <img src="./images/offer_banner_1.jpg" className="img-fluid" />
          </div>
        </a>
      </div>
      <div className="col-12 col-sm-4 col-lg-4">
        <a href="#">
          <div className=" aos-init aos-animate mega-hover">
            <img src="./images/offer_banner_22.jpg" className="img-fluid" />
          </div>
        </a>
      </div>
      <div className="col-12 col-sm-4 col-lg-4">
        <a href="#">
          <div className=" aos-init aos-animate mega-hover">
            <img src="./images/offer_banner_2.jpg" className="img-fluid" />
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

{/* one point all services */}
<OnePointAllServices/>
<PeopleTalkingAboutUs/>
<SomeOfOurServices/>
<Testimonials/>
<BrandsWeRepair/>


            <Footer />
        </>
    )
}

export default LucknowAcServicesTwo