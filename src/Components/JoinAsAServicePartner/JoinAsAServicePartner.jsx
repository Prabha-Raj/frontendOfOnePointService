import React from 'react'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'
import JoiningForm from './JoiningForm'
import NewlyJoinedServicePartners from './NewlyJoinedServicePartners'
import StatsSec from '../Shared/StatsSec'
import JoinUs from '../Shared/JoinUsSec'

const JoinAsAServicePartner = () => {
  return (
    <>
    <Navbar/>

    <div>
      <section className="banner">
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-lg-6 col-xl-6">
              <div className="top-banner-content text-center">
                <h1>Join Our Repair Team</h1>
                <p>
                  होगी आपकी <span className="blue">आय में वृद्धि</span> और मिलेगा समाज में <span className="blue">उचित सम्मान</span>
                </p>
                <div className="bnr-button">
                  <a href="#" className="header-button">
                    Get Started <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="repair-jobs">
        <div className="container-fluid">
          <div className="job-box">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="jobs-content">
                  <h2 className="job-title">
                    Get More Repair <span className="b-red">Jobs with us</span>
                  </h2>
                  <p>
                    If you're a technician looking for more repair jobs and more income, then joining our team as a service partner
                    is the perfect choice for you. As a partner, you will have access to more repair jobs and the chance to earn more money.
                  </p>
                  <div className="job_btn">
                    <button className="btn" type="submit">
                      Grab Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="job-img">
                  <img src="images/services/job-1.jpg" className="img-fluid" alt="job 1" />
                </div>
              </div>
            </div>
          </div>

          <div className="job-box mt-4">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="job-img">
                  <img src="images/services/job-2.jpg" className="img-fluid" alt="job 2" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="jobs-content">
                  <h2 className="job-title">
                    Earn More Money <span className="b-red">as a Technician</span>
                  </h2>
                  <p>
                    Earn more money as a technician by joining our team and getting access to more repair jobs.
                  </p>
                  <div className="job_btn">
                    <button className="btn" type="submit">
                      Sign Up Today
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="job-box mt-4">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="jobs-content">
                  <h2 className="job-title">
                    Join the <span className="b-red">Skilled Technicians</span>
                  </h2>
                  <p>
                    Earn more money as a technician by joining our team and getting access to more repair jobs.
                  </p>
                  <div className="job_btn">
                    <button className="btn" type="submit">
                      Submit Your Information
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="job-img">
                  <img src="images/services/job-3.jpg" className="img-fluid" alt="job 3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
{/* joining form */}
<JoiningForm/>
<NewlyJoinedServicePartners/>
<JoinUs/>
<StatsSec/>

    <Footer/>
    </>
  )
}

export default JoinAsAServicePartner