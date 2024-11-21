import React, { useState } from 'react';
import './Navbar.css';
import pe_logo3 from './logo.jpg';
import { Search, ShoppingCart, UserRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Navbar = ({ auth, handleRemove }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); 

  const handleCartClick = (e) => {
    e.preventDefault();
    setIsCartOpen(!isCartOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false); // Fix: Added missing closing brace
  };

  const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to signup page
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src={pe_logo3} alt="Pearl Essence Logo" className="logo-image" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <span className="hamburger">&#9776;</span>
        </div>

        {/* Main Navigation Links */}
        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="/tempered-glass">Tempered Glass</a></li>
          <li><a href="/back-covers">Back Covers</a></li>
          <li><a href="/mobile-chargers">Mobile Chargers</a></li>
          <li><a href="/charging-cable">Charging Cable</a></li>
          <li><a href="/tws-case">TWS Case</a></li>
          <li><a href="/camera-lens">Camera Protection Lens</a></li>
        </ul>

        {/* Right-Side Icons */}
        <ul className="navbar-links2">
          <li>
            <a href="#search" aria-label="Search">
              <Search size={21} />
            </a>
          </li>
          <li>
            <a href="#cart" onClick={handleCartClick} aria-label="Shopping Cart">
              <ShoppingCart size={21} />
            </a>
          </li>  
          <li>
            {auth ? (
              <button
                onClick={() => {
                  handleRemove();
                  closeMenu();
                }}
                aria-label="Log Out"
                className="user-round-button"
              >
                <UserRound size={21} />
              </button>
            ) : (
              <a href="/signup" onClick={closeMenu} aria-label="Sign Up or Sign In" className="user-round-button">
                <UserRound size={21} />
              </a>
            )}
          </li>
          <li>
            <button 
              className="signup-button" 
              onClick={handleSignUpClick}
              aria-label="Sign In/Sign Up"
              type="button"
            >
              Sign In/Sign Up
            </button>
          </li>
        </ul>
      </nav>

      {/* Cart Modal */}
      {isCartOpen && <Cart isOpen={isCartOpen} setIsOpen={setIsCartOpen} onAddToCart={() => {}} />}

      {/* Mobile Menu Icons */}
      <div className={`mobile-menu-icons ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="#search" aria-label="Search">
          <Search size={24} />
        </a>
        <a href="#cart" onClick={handleCartClick} aria-label="Cart">
          <ShoppingCart size={24} />
        </a>
        {auth ? (
          <button
            onClick={() => {
              handleRemove();
              closeMenu();
            }}
            aria-label="Log Out"
            className="user-round-button"
          >
            <UserRound size={24} />
          </button>
        ) : (
          <a href="/signup" onClick={closeMenu} aria-label="Sign Up or Sign In" className="user-round-button">
            <UserRound size={24} />
          </a>
        )}
        <button 
          className="signup-button" 
          onClick={handleSignUpClick}
          aria-label="Sign In/Sign Up"
        >
          Sign In/Sign Up
        </button>
      </div>
    </>
  );
};

export default Navbar;