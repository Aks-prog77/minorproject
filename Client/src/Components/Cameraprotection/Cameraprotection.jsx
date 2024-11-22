import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Cameraprotection.css';

const Cameraprotection = ( {addToCart} ) => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  const lensProducts = [
    {
      id: 1,
      name: "Ultra Clear Camera Lens Protector",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPkRwWMd0kpBJz0nS5iwo9OyoUOFsz8ggjQ&s",
      keyFeatures: "Ultra Clear, Scratch-resistant",
      detailedDescription: "Protect your camera lens with this ultra-clear protector that preserves image quality while providing scratch resistance.",
      price: 300,
      reviews: "150 reviews",
    },
    {
      id: 2,
      name: "Tempered Glass Camera Lens Protector",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs2bWp9UPjAZWAqEmLyGIloeFiPd0zTF2Ieg&s",
      keyFeatures: "Tempered glass, Shockproof",
      detailedDescription: "Made from high-quality tempered glass, this lens protector ensures your camera lens stays safe from shocks and drops.",
      price: 350,
      reviews: "200 reviews",
    },
    {
      id: 3,
      name: "Full Coverage Camera Lens Protector",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqUy8UuLZBhh5Tbf7Tew-LSSWh8dmdTatlLQ&s",
      keyFeatures: "Full coverage, Anti-glare",
      detailedDescription: "Provides full coverage for your camera lens while reducing glare and maintaining image clarity.",
      price: 400,
      reviews: "180 reviews",
    },
    {
      id: 4,
      name: "Anti-Scratch Camera Lens Protector",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_VoDBt8RjWxtsu7fkv4SFibqx8OMyklUDWw&s",
      keyFeatures: "Anti-scratch, Durable",
      detailedDescription: "An anti-scratch lens protector that is durable and designed to withstand everyday wear and tear.",
      price: 250,
      reviews: "160 reviews",
    },
    {
      id: 5,
      name: "Crystal Clear Camera Lens Protector",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeuzyOOZf3qs9xAX8MILl4QxJag5U-TlnFjA&s",
      keyFeatures: "Crystal clear, Easy application",
      detailedDescription: "Enjoy crystal-clear photos with this lens protector that is easy to apply and offers long-lasting protection.",
      price: 350,
      reviews: "220 reviews",
    },
    {
      id: 6,
      name: "Privacy Camera Lens Protector",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_0kS2m12lxVqwSq5-pYqW8obZKL6wdUjFWw&s",
      keyFeatures: "Privacy protection, Matte finish",
      detailedDescription: "This lens protector features privacy protection with a matte finish to keep your camera lens secure and your photos private.",
      price: 300,
      reviews: "140 reviews",
    },
    {
      id: 7,
      name: "High Definition Camera Lens Protector",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9EhZMJGL6ostuNQMqvOJa20B15bhD3F20Xw&s",
      keyFeatures: "High definition, Ultra-thin",
      detailedDescription: "Ultra-thin high-definition protector that keeps your lens safe while not compromising on photo quality.",
      price: 400,
      reviews: "250 reviews",
    },
    {
      id: 8,
      name: "Shockproof Camera Lens Protector",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1y-JFPBdMRzPb7i-5YCwE9H3LAykIfq-iw&s",
      keyFeatures: "Shockproof, Lightweight",
      detailedDescription: "A shockproof lens protector that is lightweight and offers optimal protection for your camera lens.",
      price: 350,
      reviews: "180 reviews",
    },
    {
      id: 9,
      name: "Waterproof Camera Lens Protector",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GDCMkqMD3wlqd1k7j2ztOj3198U7-G2tWg&s",
      keyFeatures: "Waterproof, Scratch-resistant",
      detailedDescription: "Keep your camera lens dry and scratch-free with this waterproof lens protector.",
      price: 450,
      reviews: "200 reviews",
    },
    {
      id: 10,
      name: "Anti-fingerprint Camera Lens Protector",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxaKyzDnCan_R4Pcy-wM9spwT3dNIqVvJcA&s",
      keyFeatures: "Anti-fingerprint, Anti-glare",
      detailedDescription: "This protector reduces fingerprints and glare while keeping your lens safe from everyday smudges.",
      price: 350,
      reviews: "220 reviews",
    },
    {
      id: 11,
      name: "Eco-Friendly Camera Lens Protector",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ98cijcWmogMLmy4e20a2WquqQJnGDLsYeuA&s",
      keyFeatures: "Eco-friendly, Sustainable",
      detailedDescription: "Made from eco-friendly materials, this lens protector is safe for the environment and still offers top-tier protection.",
      price: 400,
      reviews: "150 reviews",
    },
    {
      id: 12,
      name: "Slim Camera Lens Protector",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRjErrZx1yCGii3fdo2xY_Msu4AaRmEf8oLg&s",
      keyFeatures: "Slim, High transparency",
      detailedDescription: "A slim, high-transparency lens protector that ensures maximum protection without compromising on image quality.",
      price: 250,
      reviews: "170 reviews",
    },
    {
      id: 13,
      name: "Carbon Fiber Camera Lens Protector",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Carbon fiber, Premium quality",
      detailedDescription: "A durable carbon fiber lens protector that combines strength with style, providing excellent protection for your camera lens.",
      price: 500,
      reviews: "180 reviews",
    },
    {
      id: 14,
      name: "Laser Cut Camera Lens Protector",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Laser cut, Precise fit",
      detailedDescription: "Precisely cut for a perfect fit, this laser-cut protector ensures your camera lens stays safe and secure.",
      price: 450,
      reviews: "160 reviews",
    },
    {
      id: 15,
      name: "Transparent Camera Lens Protector",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Transparent, Anti-scratch",
      detailedDescription: "This transparent lens protector is designed to be nearly invisible while offering top-notch protection.",
      price: 300,
      reviews: "200 reviews",
    },
    {
      id: 16,
      name: "Custom Fit Camera Lens Protector",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Custom fit, Easy installation",
      detailedDescription: "Custom-fit for your device, this lens protector is easy to install and offers full protection.",
      price: 350,
      reviews: "190 reviews",
    },
    {
      id: 17,
      name: "Tempered Glass Full Camera Protection",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Full coverage, Tempered glass",
      detailedDescription: "This tempered glass protector provides full coverage and unbeatable durability to your camera lens.",
      price: 400,
      reviews: "230 reviews",
    },
    {
      id: 18,
      name: "Luxury Camera Lens Protector",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Luxury design, Premium material",
      detailedDescription: "A luxury-designed lens protector crafted from premium materials to provide top-tier protection and style.",
      price: 600,
      reviews: "250 reviews",
    },
    {
      id: 19,
      name: "Multicolor Camera Lens Protector",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Multicolor, Durable",
      detailedDescription: "Add a pop of color to your device with this durable multicolor lens protector.",
      price: 350,
      reviews: "180 reviews",
    },
    {
      id: 20,
      name: "Invisible Camera Lens Protector",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Invisible, High clarity",
      detailedDescription: "An invisible protector with high clarity that ensures your lens stays protected without compromising image quality.",
      price: 250,
      reviews: "160 reviews",
    },
    {
      id: 21,
      name: "Heavy Duty Camera Lens Protector",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Heavy duty, Shockproof",
      detailedDescription: "A heavy-duty protector that offers excellent shock absorption to keep your camera lens safe during impacts.",
      price: 500,
      reviews: "210 reviews",
    },
    {
      id: 22,
      name: "Nano Coated Camera Lens Protector",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Nano coating, Anti-fingerprint",
      detailedDescription: "This lens protector features nano-coating that helps keep fingerprints away and ensures clarity.",
      price: 450,
      reviews: "190 reviews",
    },
    {
      id: 23,
      name: "Impact Resistant Camera Lens Protector",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Impact resistant, Scratch-proof",
      detailedDescription: "Built to resist impacts and scratches, this lens protector offers maximum protection for your camera lens.",
      price: 400,
      reviews: "220 reviews",
    },
    {
      id: 24,
      name: "Metallic Camera Lens Protector",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Metallic finish, Durable",
      detailedDescription: "A metallic finish protector that offers durability and an elegant look while safeguarding your lens.",
      price: 500,
      reviews: "250 reviews",
    }
  ];

  return (
    <div className="tws-cases-container">
      {lensProducts.map((lens) => (
        <div key={lens.id} className="tws-case-card" data-aos="fade-up">
          <img src={lens.image} alt={lens.name} className="tws-case-image" />
          <div className="tws-case-details">
            <h3 className="tws-case-title">{lens.name}</h3>
            <p className="tws-case-feature"><strong>Key Features:</strong> {lens.keyFeatures}</p>
            <p className="tws-case-price">₹{lens.price}</p>
            <p className="tws-case-reviews"><strong>Reviews:</strong> {lens.reviews}</p>
            <p className="tws-case-description">{lens.detailedDescription}</p>
            <button
              className="shop-now"
              onClick={() => addToCart(Cameraprotection)} // Pass the `lens` object
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cameraprotection;
