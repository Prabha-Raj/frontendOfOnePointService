import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Fixed import
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import ACRepairingService from './Components/Services/ACRepairingService/ACRepairingService';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditons from './Components/TermsAndConditons/TermsAndConditons';
import LucknowAcServicesTwo from './Components/LucknowAcServicesTwo/LucknowAcServicesTwo';
import BlogDetails from './Components/Blogs/BlogDetails';
import BlogPage from './Components/Blogs/BlogPage';
import JoinAsAServicePartner from './Components/JoinAsAServicePartner/JoinAsAServicePartner';
import RecentBookings from './Components/Services/ACRepairingService/RecentBooking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recent' element={<RecentBookings />} />
        <Route path='/aboutus.html' element={<About />} />
        <Route path='/contact_us.html' element={<Contact />} />
        <Route path='/ac-repair-services.html' element={<ACRepairingService />} />
        <Route path='/privacy_policy.html' element={<PrivacyPolicy />} />
        <Route path='/Terms&Conditions.html' element={<TermsAndConditons />} />
        <Route path='/lucknow_ac_services_2.html' element={<LucknowAcServicesTwo />} />
        <Route path='/blog_details.html' element={<BlogDetails />} />
        <Route path='/blog.html' element={<BlogPage />} />
        <Route path='/join-as-service-partner.html' element={<JoinAsAServicePartner />} />
      </Routes>
    </Router>
  );
}

export default App;
