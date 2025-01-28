import React from 'react'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'
import MainBanner from './MainBanner'
import AboutSec from './AboutSec'
import WhyChooseUs from './WhyChooseUs'
import MostBookedServices from './MostBookedServices'
import CompanyInfo from './CompanyInfo'
import LeadingBrandsSec from './LeadingBrandsSec'
import TestimonialSection from './TestimonialSec'
import RatingBottomServices from './RatingBottomServicesSec'
import DownloadAppSec from './DownloadAppSec'
import JoinUs from '../Shared/JoinUsSec'
import PopularCities from '../Shared/PopularCities'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <MainBanner/>
        <AboutSec/>
        <WhyChooseUs/>
        <MostBookedServices/>
        <CompanyInfo/>
        <LeadingBrandsSec/>
        <TestimonialSection/>
        <RatingBottomServices/>
        <DownloadAppSec/>
        <JoinUs/>
        <PopularCities title={"Popular"}/>

        <Footer/>
    </div>
  )
}

export default Home
