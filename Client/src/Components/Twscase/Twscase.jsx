import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Twscase.css';

const Twscase = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  const twsCases = [
    {
      id: 1,
      name: "Compact TWS Case",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqMdBuqsiKAtujHyz9t8HcQnE6SztHphlJDA&s",
      keyFeatures: "Compact, Protective",
      detailedDescription: `This compact TWS case is designed to offer complete protection for your earbuds while being lightweight and easy to carry.`,
      price: 500,
      reviews: "150 reviews",
    },
    {
      id: 2,
      name: "Premium Leather TWS Case",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBXGe1b_WZ7PNuG60LQbtcHT6RH0-uBZURQ&s",
      keyFeatures: "Leather, Durable",
      detailedDescription: `Made from high-quality leather, this TWS case offers a luxurious feel and long-lasting protection for your wireless earbuds.`,
      price: 700,
      reviews: "120 reviews",
    },
    {
      id: 3,
      name: "Waterproof TWS Case",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5Hw9iIHgOrlStGLD8m4EyPIPCd8UyszOXw&s",
      keyFeatures: "Waterproof, Shockproof",
      detailedDescription: `Keep your earbuds safe from water damage with this waterproof TWS case, which also provides shockproof protection.`,
      price: 650,
      reviews: "180 reviews",
    },
    {
      id: 4,
      name: "Magnetic TWS Case",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNzlwEA-s3tPNL4R9ppvJI-4qZijR7joIbbQ&s",
      keyFeatures: "Magnetic closure, Sleek design",
      detailedDescription: `This sleek TWS case features a magnetic closure that keeps your earbuds securely in place while providing a modern, minimalist look.`,
      price: 600,
      reviews: "150 reviews",
    },
    {
      id: 5,
      name: "Hard Shell TWS Case",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNsuFwfgeW4XoA2grZa2oT8rw0ygw2q-0tg&s",
      keyFeatures: "Hard shell, Protective",
      detailedDescription: `A hard shell TWS case that offers maximum protection against drops and impacts, ensuring your earbuds are always safe.`,
      price: 550,
      reviews: "130 reviews",
    },
    {
      id: 6,
      name: "Slim TWS Case",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gPGc5DYJDoFpXSksthjrzdoxFndTK7pHBA&s",
      keyFeatures: "Slim design, Lightweight",
      detailedDescription: `This slim and lightweight TWS case offers easy portability while still providing protection for your earbuds.`,
      price: 480,
      reviews: "115 reviews",
    },
    {
      id: 7,
      name: "Luxury Wooden TWS Case",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaATqTXY8_n3foohEzXgpPYMA7hBPILEbl6A&s",
      keyFeatures: "Wooden, Elegant",
      detailedDescription: `A unique wooden TWS case that provides a luxurious and natural look while safeguarding your earbuds.`,
      price: 900,
      reviews: "95 reviews",
    },
    {
      id: 8,
      name: "Silicone TWS Case",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtr-NiH1LxwgejO6zQGU8BSMMHtliWEcXiOA&s",
      keyFeatures: "Soft silicone, Shockproof",
      detailedDescription: `This soft silicone TWS case offers shockproof protection while being soft to the touch and easy to grip.`,
      price: 450,
      reviews: "160 reviews",
    },
    {
      id: 9,
      name: "Transparent TWS Case",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTol03T8ox7pMsaBHFrW0MFJhVVFP0xSHVhw&s",
      keyFeatures: "Clear, Modern design",
      detailedDescription: `This transparent TWS case allows you to show off the design of your earbuds while keeping them safe and secure.`,
      price: 500,
      reviews: "140 reviews",
    },
    {
      id: 10,
      name: "Wireless Charging TWS Case",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF6qqvs2F56MUntuNxo969aZNm5u9DImnCJQ&s",
      keyFeatures: "Wireless charging, Convenient",
      detailedDescription: `This TWS case supports wireless charging, making it convenient and easy to power up your earbuds without cables.`,
      price: 750,
      reviews: "210 reviews",
    },
    {
      id: 11,
      name: "Carbon Fiber TWS Case",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0tPoNc4u2AQAOgmoifetWiuJhunB21FxcVA&s",
      keyFeatures: "Carbon fiber, Durable",
      detailedDescription: `Made from carbon fiber, this TWS case offers a strong, lightweight build and provides excellent protection against drops.`,
      price: 800,
      reviews: "130 reviews",
    },
    {
      id: 12,
      name: "Flip-Top TWS Case",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXjhMbg4na7yRTPBDOvTEiN41leYdYgVEAsw&s",
      keyFeatures: "Flip-top lid, Secure",
      detailedDescription: `This flip-top TWS case ensures your earbuds stay secure with a simple yet effective lid mechanism.`,
      price: 650,
      reviews: "100 reviews",
    },
    {
      id: 13,
      name: "Eco-friendly TWS Case",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Sustainable, Biodegradable",
      detailedDescription: `Made from eco-friendly materials, this biodegradable TWS case helps protect your earbuds and the environment.`,
      price: 550,
      reviews: "90 reviews",
    },
    {
      id: 14,
      name: "Aluminum TWS Case",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Aluminum, Scratch-resistant",
      detailedDescription: `This sleek aluminum TWS case is scratch-resistant and provides premium protection for your earbuds.`,
      price: 800,
      reviews: "140 reviews",
    },
    {
      id: 15,
      name: "Mini TWS Case",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Compact, Travel-friendly",
      detailedDescription: `This mini TWS case is perfect for travel, offering a compact and portable solution for protecting your earbuds.`,
      price: 450,
      reviews: "110 reviews",
    },
    {
      id: 16,
      name: "Retro TWS Case",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Vintage look, Protective",
      detailedDescription: `A retro-inspired TWS case that combines a vintage design with modern protection features for your earbuds.`,
      price: 650,
      reviews: "105 reviews",
    },
    {
      id: 17,
      name: "Sporty TWS Case",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Sporty design, Shockproof",
      detailedDescription: `This sporty TWS case offers extra protection against impacts and is designed for an active lifestyle.`,
      price: 600,
      reviews: "120 reviews",
    },
    {
      id: 18,
      name: "Neon TWS Case",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Neon colors, Durable",
      detailedDescription: `This vibrant neon TWS case offers a pop of color and ensures your earbuds are well-protected.`,
      price: 550,
      reviews: "130 reviews",
    },
    {
      id: 19,
      name: "Vintage Leather TWS Case",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Vintage leather, Durable",
      detailedDescription: `A vintage leather TWS case with a classic look and excellent protection for your wireless earbuds.`,
      price: 750,
      reviews: "110 reviews",
    },
    {
      id: 20,
      name: "Designer TWS Case",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Designer, Luxury",
      detailedDescription: `This luxury designer TWS case is perfect for those who want a stylish case with premium protection for their earbuds.`,
      price: 1200,
      reviews: "85 reviews",
    },
    {
      id: 21,
      name: "Tough TWS Case",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Heavy-duty, Shockproof",
      detailedDescription: `Designed for extreme protection, this tough TWS case can withstand drops, shocks, and impacts.`,
      price: 700,
      reviews: "160 reviews",
    },
    {
      id: 22,
      name: "Holographic TWS Case",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Holographic design, Protective",
      detailedDescription: `This eye-catching holographic TWS case offers a unique design while providing excellent protection for your earbuds.`,
      price: 750,
      reviews: "95 reviews",
    },
    {
      id: 23,
      name: "Multicolor TWS Case",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Multicolor, Fun design",
      detailedDescription: `A fun and colorful TWS case that adds some personality to your earbuds while offering full protection.`,
      price: 600,
      reviews: "140 reviews",
    },
    {
      id: 24,
      name: "Smart TWS Case",
      image: "https://via.placeholder.com/150",
      keyFeatures: "Smart features, Charging indicator",
      detailedDescription: `This smart TWS case comes with a charging indicator and offers protection as well as convenient features.`,
      price: 850,
      reviews: "120 reviews",
    }
  ];
  

  return (
    <div className="tws-cases-container">
      {twsCases.map((caseItem) => (
        <div key={caseItem.id} className="tws-case-card" data-aos="fade-up">
          <img src={caseItem.image} alt={caseItem.name} className="tws-case-image" />
          <div className="tws-case-details">
            <h3 className="tws-case-title">{caseItem.name}</h3>
            <p className="tws-case-feature"><strong>Key Features:</strong> {caseItem.keyFeatures}</p>
            <p className="tws-case-price">₹{caseItem.price}</p>
            <p className="tws-case-reviews"><strong>Reviews:</strong> {caseItem.reviews}</p>
            <p className="tws-case-description">{caseItem.detailedDescription}</p>
            <button className="tws-case-btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Twscase;
