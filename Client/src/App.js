import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Featured from './Components/Featured/Featured';
import Newarrived from './Components/Newarrived/Newarrived';
import Footer from './Components/Footer/Footer';
import Tc from './Components/Tc/Tc';
import PrivacyPolicy from './Components/PrivPol/PrivacyPolicy';
import Mostselled from './Components/Mostselled/Mostselled';
import Todaydeal from './Components/Todaydeal/Todaydeal';
import Contact from './Components/Contact/Contact';
import FAQ from './Components/FAQ/FAQ';
import Tempered from './Components/TemperedGlass/Tempered';
import Backcover from './Components/Backcover/Backcover';
import MobileCharger from './Components/Mobilecharger/Mobilecharger';
import Twscase from './Components/Twscase/Twscase';
import Chargingcable from './Components/Chargingcable/Chargingcable';
import Testimonial from './Components/Testmonial/Testimonial';
import Services from './Components/Services/Services';
import Career from './Components/Career/Career';
import Clients from './Components/Clients/Clients';
import Partners from './Components/Partners/Partners';
import Team from './Components/Team/Team';
import Cameraprotection from './Components/Cameraprotection/Cameraprotection';
import AboutUs from './Components/AboutUs/AboutUs';

function AppContent() {
  const location = useLocation();
  const isPolicyOrTermsortest =
    location.pathname === '/terms' ||
    location.pathname === '/privacy' ||
    location.pathname === '/testimonials' ||
    location.pathname === '/services' ||
    location.pathname === '/about' ||
    location.pathname === '/clients' ||
    location.pathname === '/career' ||
    location.pathname === '/partners' ||
    location.pathname === '/team' ||
    location.pathname === '/tempered-glass' ||
    location.pathname === '/back-covers' ||
    location.pathname === '/mobile-chargers' ||
    location.pathname === '/charging-cable' ||
    location.pathname === '/tws-case' ||
    location.pathname === '/camera-lens';

  return (
    <>
      <Navbar />
      {!isPolicyOrTermsortest && (
        <>
          <Hero />
          <Featured />
          <Newarrived />
          <Mostselled />
          <Todaydeal />
          <FAQ />
          <Contact />
        </>
      )}
      <Routes>
        <Route path="/terms" element={<Tc />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/career" element={<Career />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/tempered-glass" element={<Tempered />} />
        <Route path="/back-covers" element={<Backcover />} />
        <Route path="/mobile-chargers" element={<MobileCharger />} />
        <Route path="/charging-cable" element={<Chargingcable />} />
        <Route path="/tws-case" element={<Twscase />} />
        <Route path="/camera-lens" element={<Cameraprotection />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
