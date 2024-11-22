import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Chargingcable.css';

const Chargingcable = ( {addToCart} ) => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  const chargingCables = [
    {
      id: 1,
      name: "USB-C to Lightning Cable",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREqFP1JGHdprPl4e4sUWev8c5P8KaHXMz7OA&s",
      keyFeatures: "Fast charging, Durable material",
      detailedDescription: `This USB-C to Lightning cable is designed for fast charging and is made from a durable material to withstand daily use.`,
      price: 300,
      reviews: "150 reviews",
    },
    {
      id: 2,
      name: "Type-C to Type-C Cable",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3z-bNd4twXRA3Sw81PD43iDF1qxJKHcC-lA&s",
      keyFeatures: "Data transfer, 60W Power Delivery",
      detailedDescription: `This Type-C to Type-C cable offers fast data transfer and supports 60W Power Delivery for charging your devices quickly.`,
      price: 450,
      reviews: "120 reviews",
    },
    {
      id: 3,
      name: "Micro USB Cable",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVDPm5VD3e90tBPpLkUh0ZM0Xabazyg_3kAQ&s",
      keyFeatures: "Durable, 2 meters long",
      detailedDescription: `A sturdy and durable micro USB cable with a length of 2 meters, perfect for charging and data transfer.`,
      price: 200,
      reviews: "95 reviews",
    },
    {
      id: 4,
      name: "Braided USB-C Cable",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXV2em67H-dHlhMxI1IrOex9t6_I7LOl-BLA&s",
      keyFeatures: "Anti-tangle, Fast Charging",
      detailedDescription: `This braided USB-C cable offers fast charging and is designed to resist tangling, ensuring a long-lasting experience.`,
      price: 350,
      reviews: "135 reviews",
    },
    {
      id: 5,
      name: "Lightning Cable for iPhone",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22r4m-0DrzaVzYCP1nhPXjg94hbQHN9uRZQ&s",
      keyFeatures: "MFI Certified, 1.2m length",
      detailedDescription: `This MFI-certified Lightning cable ensures a safe and fast charging experience for your iPhone and iPad.`,
      price: 250,
      reviews: "180 reviews",
    },
    {
      id: 6,
      name: "USB-A to Lightning Cable",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2he7_bMNHAFpa9-loQJzhwxjikWKI1ZjSfA&s",
      keyFeatures: "MFI Certified, Durable build",
      detailedDescription: `This USB-A to Lightning cable is built to last and is MFI certified for a safe charging experience.`,
      price: 280,
      reviews: "140 reviews",
    },
    {
      id: 7,
      name: "USB-C to Micro USB Cable",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGw-iTXVAZCA1EO5CHcHnjdInGIAworC4uQ&s",
      keyFeatures: "Fast charging, 1.5 meters",
      detailedDescription: `This USB-C to Micro USB cable offers fast charging and data transfer for your devices, with a 1.5-meter length.`,
      price: 320,
      reviews: "130 reviews",
    },
    {
      id: 8,
      name: "USB-C to USB-A Cable",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11kO2KTkE0VskrrrDtDTB5qiBSvqgEsQ47g&s",
      keyFeatures: "Fast charging, 2 meters",
      detailedDescription: `A versatile USB-C to USB-A cable designed for fast charging with a 2-meter length, perfect for long-distance charging.`,
      price: 300,
      reviews: "110 reviews",
    },
    {
      id: 9,
      name: "Heavy-Duty Braided Micro USB Cable",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQMVOlhPSLTV8G5EkMc9QUUhGvD2NfhpqSw&s",
      keyFeatures: "Braided, Durable, 1 meter",
      detailedDescription: `This heavy-duty braided Micro USB cable is 1 meter long and designed for longevity, perfect for daily use.`,
      price: 350,
      reviews: "150 reviews",
    },
    {
      id: 10,
      name: "USB-C to USB-C Fast Charging Cable",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF_3oBHAwGNjTq6JxoWqy-SCC2PCjP9CRwvA&s",
      keyFeatures: "Fast charging, 1 meter",
      detailedDescription: `This USB-C to USB-C cable supports fast charging and is 1 meter long, perfect for quick charging of compatible devices.`,
      price: 400,
      reviews: "120 reviews",
    },
    {
      id: 11,
      name: "3-in-1 Charging Cable",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj4j-psnJxHJfivOiHUTLjQXa-tB97cUMxqA&s",
      keyFeatures: "Multiple connectors, Universal compatibility",
      detailedDescription: `This 3-in-1 charging cable includes USB-C, Micro USB, and Lightning connectors, making it compatible with most devices.`,
      price: 350,
      reviews: "160 reviews",
    },
    {
      id: 12,
      name: "USB-C to Lightning Cable (Short)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gtVWSg8S01XHdoe7GVcjwo7l1a5eHmkryg&s",
      keyFeatures: "Short cable, Fast charging",
      detailedDescription: `A short USB-C to Lightning cable designed for fast charging and portability, perfect for charging on the go.`,
      price: 250,
      reviews: "130 reviews",
    },
    {
      id: 13,
      name: "10ft USB-C to USB-A Cable",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Long cable, Fast charging",
      detailedDescription: `This 10-foot USB-C to USB-A cable is perfect for charging from a distance, offering fast charging capabilities.`,
      price: 450,
      reviews: "170 reviews",
    },
    {
      id: 14,
      name: "USB-C to Type-C (2-Pack)",
      image: "https://via.placeholder.com/150",
      keyFeatures: "2-pack, Fast charging, 1 meter each",
      detailedDescription: `A set of two 1-meter USB-C to Type-C cables designed for fast charging and reliability.`,
      price: 500,
      reviews: "200 reviews",
    },
    {
      id: 15,
      name: "Magnetic USB-C Cable",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Magnetic, Fast charging",
      detailedDescription: `This magnetic USB-C cable offers fast charging and easy magnetic connection for convenient use.`,
      price: 350,
      reviews: "145 reviews",
    },
    {
      id: 16,
      name: "Multi-port USB Charging Cable",
      image: "https://via.placeholder.com/150",
      keyFeatures: "3 connectors, 3 meters",
      detailedDescription: `This multi-port USB charging cable offers three connectors (USB-C, Micro USB, and Lightning) and a long 3-meter length.`,
      price: 500,
      reviews: "210 reviews",
    },
    {
      id: 17,
      name: "Fast Charge USB-C Cable for iPhone",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Fast charging, 1.5 meters",
      detailedDescription: `A USB-C cable for iPhone that supports fast charging with a 1.5-meter length for flexibility.`,
      price: 380,
      reviews: "180 reviews",
    },
    {
      id: 18,
      name: "Premium Braided Type-C Cable",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Braided, Anti-tangle",
      detailedDescription: `This premium braided Type-C cable resists tangling and offers fast charging for your devices.`,
      price: 400,
      reviews: "160 reviews",
    },
    {
      id: 19,
      name: "USB-C to Micro USB Fast Charging Cable",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Fast charging, 1 meter",
      detailedDescription: `This USB-C to Micro USB cable provides fast charging and is 1 meter long, perfect for quick charging and data transfer.`,
      price: 300,
      reviews: "130 reviews",
    },
    {
      id: 20,
      name: "Retractable USB-C Cable",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Retractable, Compact design",
      detailedDescription: `This retractable USB-C cable allows for easy storage and portability, ideal for traveling.`,
      price: 350,
      reviews: "140 reviews",
    },
    {
      id: 21,
      name: "USB-C to USB-C Charging Cable (Long)",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Long cable, Fast charging",
      detailedDescription: `This long USB-C to USB-C cable offers fast charging and is 2 meters in length for added convenience.`,
      price: 420,
      reviews: "150 reviews",
    },
    {
      id: 22,
      name: "USB-C to Type-A Cable",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Universal compatibility, 1 meter",
      detailedDescription: `This USB-C to Type-A cable provides universal compatibility and a length of 1 meter for everyday use.`,
      price: 270,
      reviews: "115 reviews",
    },
    {
      id: 23,
      name: "Type-C to Type-A Charging Cable (2-Pack)",
      image: "https://via.placeholder.com/150",
      keyFeatures: "2-pack, Fast charging",
      detailedDescription: `This 2-pack of Type-C to Type-A charging cables ensures fast charging and compatibility with multiple devices.`,
      price: 450,
      reviews: "190 reviews",
    },
    {
      id: 24,
      name: "Flexible USB-C Cable",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Flexible, Durable",
      detailedDescription: `This flexible USB-C cable offers fast charging and durability, ideal for flexible and heavy use.`,
      price: 380,
      reviews: "160 reviews",
    },
  ];
  
  return (
    <div className="charging-cables-container">
      {chargingCables.map((cable) => (
        <div key={cable.id} className="charging-cable-card" data-aos="fade-up">
          <img src={cable.image} alt={cable.name} className="charging-cable-image" />
          <div className="charging-cable-details">
            <h3 className="charging-cable-title">{cable.name}</h3>
            <p className="charging-cable-feature"><strong>Key Features:</strong> {cable.keyFeatures}</p>
            <p className="charging-cable-price">₹{cable.price}</p>
            <p className="charging-cable-reviews"><strong>Reviews:</strong> {cable.reviews}</p>
            <p className="charging-cable-description">{cable.detailedDescription}</p>
            <button className="shop-now" onClick={() => addToCart(cable)}>
    Add to Cart
</button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Chargingcable;
