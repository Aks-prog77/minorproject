import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
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
import Cart from './Components/Navbar/Cart/Cart';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';


function AppContent() {
  const location = useLocation();

  // Cart state management
  const [cartItems, setCartItems] = useState([]);

  // Add to cart functionality
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove from cart functionality
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Clear cart functionality
  const clearCart = () => {
    setCartItems([]);
  };

  // Determine if the current page is a policy/terms/testimonials page
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
    location.pathname === '/camera-lens' ||
    location.pathname === '/signup' ||
    location.pathname === '/signin' ||
    location.pathname === '/cart';


  return (
    <>
      {/* Pass cartItems and cart management functions to Navbar */}
      <Navbar cartItems={cartItems} />
      {!isPolicyOrTermsortest && (
        <>
          <Hero />
          <Featured addToCart={addToCart} />
          <Newarrived addToCart={addToCart} />
          <Mostselled addToCart={addToCart} />
          <Todaydeal addToCart={addToCart} />
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
        <Route path="/tempered-glass" element={<Tempered addToCart={addToCart} />} />
        <Route path="/back-covers" element={<Backcover addToCart={addToCart} />} />
        <Route path="/mobile-chargers" element={<MobileCharger addToCart={addToCart} />} />
        <Route path="/charging-cable" element={<Chargingcable addToCart={addToCart} />} />
        <Route path="/tws-case" element={<Twscase addToCart={addToCart} />} />
        <Route path="/camera-lens" element={<Cameraprotection addToCart={addToCart} />} />
        <Route path="/team" element={<Team />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          }
        />
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
