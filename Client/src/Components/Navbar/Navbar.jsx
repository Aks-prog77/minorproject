import React, { useState } from 'react';
import './Navbar.css';
import pe_logo3 from './logo.jpg';
import { Search, ShoppingCart, UserRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ cartItems, auth, handleRemove }) => {
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
    setIsMobileMenuOpen(false);
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src={pe_logo3} alt="Pearl Essence Logo" className="logo-image" a href= "/home"/>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu} a href ="/home">
          <span className="hamburger">&#9776;</span>
        </div>

        {/* Main Navigation Links */}
        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="/Home">Home</a></li>
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
            <button onClick={handleCartClick} aria-label="Shopping Cart" className="cart-button">
              <ShoppingCart size={21} />
            </button>
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
        </ul>
      </nav>

      {/* Cart Dropdown */}
      {isCartOpen && (
        <div className="cart-dropdown">
          <h3>Shopping Cart</h3>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
          <button className="checkout-button" onClick={() => navigate('/cart')}>
            Go to Cart
          </button>
        </div>
      )}

      {/* Mobile Menu Icons */}
      <div className={`mobile-menu-icons ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="#search" aria-label="Search">
          <Search size={24} />
        </a>
        <button onClick={handleCartClick} aria-label="Cart" className="cart-button">
          <ShoppingCart size={24} />
        </button>
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
      </div>
    </>
  );
};

export default Navbar;
