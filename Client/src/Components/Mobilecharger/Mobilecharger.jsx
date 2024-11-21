import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Mobilecharger.css';

const MobileCharger = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  const mobileChargers = [
    {
      id: 1,
      name: "Fast Charger for iPhone 13",
      image: "https://via.placeholder.com/150",
      keyFeatures: "18W Fast Charging, Compact design",
      detailedDescription: `This fast charger for iPhone 13 provides rapid 18W charging, designed to fit easily in your bag or pocket for on-the-go use.`,
      price: 500,
      reviews: "150 reviews",
    },
    {
      id: 2,
      name: "Dual Port USB Charger for Samsung Galaxy S21 Ultra",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Dual ports, 30W Power Delivery",
      detailedDescription: `Charge two devices simultaneously with this dual-port USB charger that supports 30W Power Delivery for fast and efficient charging.`,
      price: 700,
      reviews: "120 reviews",
    },
    {
      id: 3,
      name: "Wireless Charger for OnePlus 9 Pro",
      image: "https://via.placeholder.com/150",
      keyFeatures: "10W Wireless Charging, Sleek design",
      detailedDescription: `This sleek wireless charger offers a convenient 10W charging speed for OnePlus 9 Pro, keeping your desk tidy and clutter-free.`,
      price: 900,
      reviews: "95 reviews",
    },
    {
      id: 4,
      name: "Type-C Fast Charger for Google Pixel 5",
      image: "https://via.placeholder.com/150",
      keyFeatures: "USB-C, 25W Fast Charging",
      detailedDescription: `This Type-C charger for Google Pixel 5 supports 25W fast charging to keep your device powered up quickly during the day.`,
      price: 650,
      reviews: "135 reviews",
    },
    {
      id: 5,
      name: "Car Charger for iPhone 12",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Dual USB Ports, Quick Charge 3.0",
      detailedDescription: `This car charger provides dual USB ports and Quick Charge 3.0 technology for efficient charging while you’re on the go.`,
      price: 400,
      reviews: "180 reviews",
    },
    {
      id: 6,
      name: "Portable Power Bank for Samsung Galaxy Note 20",
      image: "https://via.placeholder.com/150",
      keyFeatures: "20,000mAh Capacity, Dual Charging Ports",
      detailedDescription: `This portable power bank offers 20,000mAh of power, allowing you to charge your Samsung Galaxy Note 20 and another device simultaneously.`,
      price: 950,
      reviews: "215 reviews",
    },
    {
      id: 7,
      name: "Dual Wireless Charger for iPhone 14",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Supports two devices, 15W Wireless Charging",
      detailedDescription: `Charge two devices at once with this dual wireless charger, providing fast 15W charging for iPhone 14 and other wireless-enabled devices.`,
      price: 1000,
      reviews: "140 reviews",
    },
    {
      id: 8,
      name: "Fast Charging Adapter for Xiaomi Mi 11",
      image: "https://via.placeholder.com/150",
      keyFeatures: "33W Fast Charging, USB-A to USB-C",
      detailedDescription: `This charging adapter offers 33W fast charging to Xiaomi Mi 11, reducing your device's charging time significantly.`,
      price: 850,
      reviews: "110 reviews",
    },
    {
      id: 9,
      name: "MagSafe Charger for iPhone 13 Pro Max",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Magnetic alignment, 15W Charging",
      detailedDescription: `This MagSafe charger aligns perfectly with your iPhone 13 Pro Max for fast 15W wireless charging.`,
      price: 1200,
      reviews: "185 reviews",
    },
    {
      id: 10,
      name: "Wall Charger for Oppo F19 Pro",
      image: "https://via.placeholder.com/150",
      keyFeatures: "VOOC Flash Charge, 30W Output",
      detailedDescription: `This wall charger supports VOOC Flash Charging for Oppo F19 Pro, providing 30W output to quickly power your device.`,
      price: 700,
      reviews: "98 reviews",
    },
    {
      id: 11,
      name: "Magnetic Charging Pad for iPhone 12",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Magnetic alignment, Compact size",
      detailedDescription: `This magnetic charging pad for iPhone 12 offers seamless and compact wireless charging with easy alignment.`,
      price: 800,
      reviews: "110 reviews",
    },
    {
      id: 12,
      name: "USB-C to USB-C Charger for Google Pixel 6",
      image: "https://via.placeholder.com/150",
      keyFeatures: "USB-C to USB-C, 30W Charging",
      detailedDescription: `This USB-C to USB-C charger provides 30W fast charging for Google Pixel 6, ensuring quick power-up times.`,
      price: 650,
      reviews: "120 reviews",
    },
    {
      id: 13,
      name: "Travel Charger for Samsung Galaxy A72",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Dual Ports, 18W Fast Charging",
      detailedDescription: `This travel charger includes dual ports for charging multiple devices and supports 18W fast charging for your Samsung Galaxy A72.`,
      price: 550,
      reviews: "150 reviews",
    },
    {
      id: 14,
      name: "Wireless Charging Dock for iPhone 11",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Qi-certified, 10W Wireless Charging",
      detailedDescription: `This wireless charging dock for iPhone 11 offers 10W wireless charging and is Qi-certified for safe and efficient power delivery.`,
      price: 750,
      reviews: "175 reviews",
    },
    {
      id: 15,
      name: "Fast Charging Car Charger for Realme 8 Pro",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Dual USB, 18W Quick Charge",
      detailedDescription: `This fast charging car charger offers 18W Quick Charge technology to keep your Realme 8 Pro powered while you’re driving.`,
      price: 450,
      reviews: "100 reviews",
    },
    {
      id: 16,
      name: "Wireless Charging Stand for Vivo V21e",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Adjustable stand, 10W Charging",
      detailedDescription: `This wireless charging stand provides 10W charging and an adjustable stand for easy viewing while charging your Vivo V21e.`,
      price: 800,
      reviews: "200 reviews",
    },
    {
      id: 17,
      name: "Dual USB Charger for iPhone 11 Pro",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Dual USB Ports, 18W Power Delivery",
      detailedDescription: `This dual USB charger for iPhone 11 Pro allows you to charge multiple devices simultaneously with 18W Power Delivery technology.`,
      price: 600,
      reviews: "130 reviews",
    },
    {
      id: 18,
      name: "Fast Wireless Charger for Redmi Note 10",
      image: "https://via.placeholder.com/150",
      keyFeatures: "15W Fast Charging, Anti-slip base",
      detailedDescription: `This fast wireless charger for Redmi Note 10 offers 15W fast charging and features an anti-slip base to keep your device secure.`,
      price: 750,
      reviews: "160 reviews",
    },
    {
      id: 19,
      name: "Portable USB Charger for Huawei P40 Pro",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Portable design, 18W Fast Charging",
      detailedDescription: `This portable USB charger allows you to charge your Huawei P40 Pro quickly with 18W fast charging and is easy to carry on the go.`,
      price: 500,
      reviews: "110 reviews",
    },
    {
      id: 20,
      name: "Multi-port USB Charger for iPhone SE (2020)",
      image: "https://via.placeholder.com/150",
      keyFeatures: "4 USB Ports, 60W Total Output",
      detailedDescription: `This multi-port USB charger offers 4 USB ports with a total output of 60W, providing fast charging for multiple devices at once.`,
      price: 950,
      reviews: "180 reviews",
    },
    {
      id: 21,
      name: "Fast Charging Wall Adapter for Samsung Galaxy Z Flip 4",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Super Fast Charging, 25W Output",
      detailedDescription: `This wall adapter for Samsung Galaxy Z Flip 4 provides Super Fast Charging technology with a 25W output to minimize charging time.`,
      price: 850,
      reviews: "120 reviews",
    },
    {
      id: 22,
      name: "Solar Charger for iPhone 7",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Eco-friendly, 12W Solar Charging",
      detailedDescription: `This solar charger offers an eco-friendly way to charge your iPhone 7 with 12W solar charging, perfect for outdoor adventures.`,
      price: 600,
      reviews: "105 reviews",
    },
    {
      id: 23,
      name: "Universal Fast Charger for All Smartphones",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Quick Charge 3.0, Universal Compatibility",
      detailedDescription: `This universal fast charger supports Quick Charge 3.0 and is compatible with most smartphones, ensuring a quick power-up for your device.`,
      price: 750,
      reviews: "145 reviews",
    },
    {
      id: 24,
      name: "Dual Wireless Charger for Samsung Galaxy Note 10",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Dual Charging, 10W Wireless Charging",
      detailedDescription: `Charge two devices at once with this dual wireless charger, offering 10W charging for your Samsung Galaxy Note 10 and other devices.`,
      price: 950,
      reviews: "110 reviews",
    },
  ];
  
  return (
    <div className="mobile-chargers-container">
      {mobileChargers.map((charger) => (
        <div key={charger.id} className="mobile-charger-card" data-aos="fade-up">
          <img src={charger.image} alt={charger.name} className="mobile-charger-image" />
          <div className="mobile-charger-details">
            <h3 className="mobile-charger-title">{charger.name}</h3>
            <p className="mobile-charger-feature"><strong>Key Features:</strong> {charger.keyFeatures}</p>
            <p className="mobile-charger-price">₹{charger.price}</p>
            <p className="mobile-charger-reviews"><strong>Reviews:</strong> {charger.reviews}</p>
            <p className="mobile-charger-description">{charger.detailedDescription}</p>
            <button className="mobile-charger-btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileCharger;
