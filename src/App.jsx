import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Fixed import
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import ACRepairingService from './Components/Services/ACRepairingService/ACRepairingService';
// import PopularCities from './Components/Shared/PopularCities';
import Slick from './Components/slick';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/city' element={<Slick/>} />
        <Route path='/aboutus.html' element={<About />} />
        <Route path='/contact_us.html' element={<Contact />} />
        <Route path='/ac-repair-services.html' element={<ACRepairingService />} />
      </Routes>
    </Router>
  );
}

export default App;
