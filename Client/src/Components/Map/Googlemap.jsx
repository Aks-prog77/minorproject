import React from 'react';
import './Googlemap.css'; // Include the CSS file

const GoogleMap = () => {
  return (
    <div className="map-container">
      <iframe
        title="Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.0250432722037!2d77.10623627496201!3d28.7187975756178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d014e7953d073%3A0xa1df99c8551f3812!2sJagan%20Institute%20of%20Management%20Studies%20-%20JIMS%20Rohini!5e0!3m2!1sen!2sin!4v1723105335479!5m2!1sen!2sin" // Replace with your map's embed URL
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
