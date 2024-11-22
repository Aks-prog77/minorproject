import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Backcover.css';

const BackCovers = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  const mobileBackCovers = [
    {
      id: 1,
      name: "Silicone Back Cover for iPhone 13",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0783QgAD_NAY_LoFiEfePR7F0iWtwR_nmdQ&s",
      keyFeatures: "Shockproof, Slim design, Anti-slip",
      detailedDescription: `This silicone back cover is designed for iPhone 13, offering superior shock absorption, a slim profile, and an anti-slip texture for a secure grip.`,
      price: 450,
      reviews: "120 reviews",
    },
    {
      id: 2,
      name: "Leather Back Cover for Samsung Galaxy S21 Ultra",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRehwaUEenLOWdqLBBZIFxNyXNS8h4SyuKw_w&s",
      keyFeatures: "Premium leather, Shock-resistant edges",
      detailedDescription: `Crafted with premium leather, this back cover for Galaxy S21 Ultra provides a luxurious feel while protecting your phone from accidental drops.`,
      price: 800,
      reviews: "98 reviews",
    },
    {
      id: 3,
      name: "Tough Armor Back Cover for OnePlus 9 Pro",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQanWi6F-XEYTvbIkQeeD4HUqzvMY9ZyaDw&s",
      keyFeatures: "Flexible TPU, Scratch-resistant",
      detailedDescription: `A flexible TPU case for Google Pixel 5 that offers scratch resistance and protects your phone from minor drops.`,
      price: 300,
      reviews: "75 reviews",
    },
    {
      id: 5,
      name: "Luxury PU Leather Case for iPhone 12",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTkZXvml0VQlGso2m4TDGvlQ1wC0UUwBYPNQ&s",
      keyFeatures: "Luxury PU leather, Anti-slip texture",
      detailedDescription: `This premium PU leather case offers a luxurious feel and excellent grip, designed specifically for iPhone 12.`,
      price: 650,
      reviews: "210 reviews",
    },
    {
      id: 6,
      name: "Frosted Back Cover for Xiaomi Mi 11",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3hS36ujHjI5sPOJVPK_gupozgMQawZilKw&s",
      keyFeatures: "Frosted matte finish, Anti-fingerprint",
      detailedDescription: `This frosted matte finish back cover for Xiaomi Mi 11 prevents fingerprints while providing sleek protection.`,
      price: 350,
      reviews: "132 reviews",
    },
    {
      id: 7,
      name: "Clear Transparent Case for iPhone 14",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoY3xBixZC1wOU8LFEibffH8yHZzqL57byGg&s",
      keyFeatures: "Crystal-clear, Scratch-resistant",
      detailedDescription: `This crystal-clear transparent case for iPhone 14 showcases your phone's design while providing scratch-resistant protection.`,
      price: 400,
      reviews: "110 reviews",
    },
    {
      id: 8,
      name: "Wooden Back Cover for Samsung Galaxy Note 20",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzpjWGjdayMR0TlbH41-Z8GLxPgcDSIDKTg&s",
      keyFeatures: "Real wood finish, Premium feel",
      detailedDescription: `Made from real wood, this back cover provides a unique design and premium finish for Samsung Galaxy Note 20.`,
      price: 850,
      reviews: "85 reviews",
    },
    {
      id: 9,
      name: "Shockproof Back Cover for Moto G60",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScDLyhW3QlN--20ErRwxjRhtfEwW20ai51bw&s",
      keyFeatures: "Dual-layer protection, Shockproof",
      detailedDescription: `The shockproof back cover for Moto G60 features dual-layer protection for the ultimate safety of your device.`,
      price: 500,
      reviews: "145 reviews",
    },
    {
      id: 10,
      name: "Carbon Fiber Case for Oppo F19 Pro",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8TKgRqObgSo3adY9_0tjn6q-SImvWS1vUqA&s",
      keyFeatures: "Carbon fiber texture, Lightweight",
      detailedDescription: `This lightweight carbon fiber case for Oppo F19 Pro offers durability and a stylish finish without adding bulk.`,
      price: 700,
      reviews: "175 reviews",
    },
    {
      id: 11,
      name: "Magnetic Back Cover for iPhone 13 Pro Max",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7iwdvRj4OlS9TshU8tp8cjRERi3C9HXFXg&s",
      keyFeatures: "Magnetic attachment, Secure fit",
      detailedDescription: `This magnetic back cover provides a secure fit for iPhone 13 Pro Max with easy attachment and detachment.`,
      price: 950,
      reviews: "190 reviews",
    },
    {
      id: 12,
      name: "Flip Leather Case for Samsung Galaxy A72",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgUZtK9UxqmP_eA4Ju26nT5IWd4wdmq4BJQ&s",
      keyFeatures: "Flip style, Wallet functionality",
      detailedDescription: `The flip leather case for Galaxy A72 doubles as a wallet, providing a convenient, stylish solution for carrying your essentials.`,
      price: 750,
      reviews: "210 reviews",
    },
    {
      id: 13,
      name: "Slim Armor Case for Realme 8 Pro",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0l7QNFXPe3afTQ14L2tFjWutun3B-o8Lyg&s",
      keyFeatures: "Slim design, Shockproof",
      detailedDescription: `This slim armor case offers shockproof protection in a slim form for Realme 8 Pro, giving you style and durability.`,
      price: 500,
      reviews: "99 reviews",
    },
    {
      id: 14,
      name: "Hybrid Back Cover for Vivo V21e",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmn9HiaqInnzdrPqTFRDTws9oYxVEO06D7dw&s",
      keyFeatures: "Hybrid design, Scratch-resistant",
      detailedDescription: `This hybrid back cover provides protection against drops and scratches for your Vivo V21e with a stylish finish.`,
      price: 550,
      reviews: "165 reviews",
    },
    {
      id: 15,
      name: "Bumper Case for iPhone 11",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKz5K0fdMy0xngiUlZHQb8QrXtMky2eMYFdg&s",
      keyFeatures: "Shock-absorbent bumper, Thin profile",
      detailedDescription: `Protect your iPhone 11 with this thin yet shock-absorbent bumper case that keeps your phone safe without adding bulk.`,
      price: 400,
      reviews: "125 reviews",
    },
    {
      id: 16,
      name: "Heavy Duty Back Cover for Samsung Galaxy M31",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBkDT0sfDSndWNfe2K1h4zZC73ifxficzZQ&s",
      keyFeatures: "Heavy-duty, Dual-layer protection",
      detailedDescription: `This heavy-duty back cover for Samsung Galaxy M31 offers dual-layer protection to safeguard against drops and impacts.`,
      price: 900,
      reviews: "180 reviews",
    },
    {
      id: 17,
      name: "Soft Silicone Case for Redmi Note 10",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5diDtDfb62ut20ia84iX0xRcUHhDFiGVpg&s",
      keyFeatures: "Soft touch silicone, Flexible fit",
      detailedDescription: `The soft silicone case provides a comfortable grip and flexible fit for your Redmi Note 10, protecting it from daily wear and tear.`,
      price: 350,
      reviews: "110 reviews",
    },
    {
      id: 18,
      name: "Flip Cover Case for Poco X3 Pro",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpc85T_bWe7Jlm_a37P9e4HI89ogA9Ni5Q0Q&s",
      keyFeatures: "Flip style, Card holder",
      detailedDescription: `This flip cover case for Poco X3 Pro has a cardholder functionality, making it convenient for carrying your essentials on the go.`,
      price: 600,
      reviews: "200 reviews",
    },
    {
      id: 19,
      name: "Soft Back Cover for Huawei P40 Pro",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHnikZ2CzvUBB56PDzC4D5AH5sV_zTyoMfQ&s",
      keyFeatures: "Soft finish, Ultra-thin",
      detailedDescription: `This ultra-thin, soft finish back cover for Huawei P40 Pro offers smooth protection while retaining the phone's sleek profile.`,
      price: 400,
      reviews: "95 reviews",
    },
    {
      id: 20,
      name: "Luxury Marble Case for iPhone SE (2020)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56x-qGwkgUbQriYDrQMmoOGv0zLrJ4C5lKA&s",
      keyFeatures: "Marble finish, Premium look",
      detailedDescription: `This marble-patterned back cover offers a premium look and feel, perfectly complementing your iPhone SE (2020).`,
      price: 700,
      reviews: "130 reviews",
    },
    {
      id: 21,
      name: "Armband Case for Galaxy Z Flip 4",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzwnMufG2rzMuQjltJsfwKiooBlgu4N9c4g&s",
      keyFeatures: "Armband, Sport-friendly",
      detailedDescription: `This armband case is designed for active users, providing hands-free carrying and protection for your Galaxy Z Flip 4 during workouts.`,
      price: 850,
      reviews: "55 reviews",
    },
    {
      id: 22,
      name: "Anti-shock Case for iPhone 12 Mini",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7oZQcEUnDUQIkQjtBcOT5M0gfYZDa7hLUSA&s",
      keyFeatures: "Anti-shock technology, Slim fit",
      detailedDescription: `The anti-shock case for iPhone 12 Mini provides excellent shock absorption with a slim profile that won't compromise your phone's look.`,
      price: 600,
      reviews: "160 reviews",
    },
    {
      id: 23,
      name: "Sporty Back Cover for Honor 9X",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLt814Sc_x0GwC-W21BWk_An3XzI2fPo_g0Q&s",
      keyFeatures: "Sporty design, Lightweight",
      detailedDescription: `This sporty back cover for Honor 9X is designed for the active lifestyle, providing lightweight protection with a dynamic look.`,
      price: 500,
      reviews: "180 reviews",
    },
    {
      id: 24,
      name: "Glow-in-the-dark Case for iPhone 7",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRPd91nWBo_PGD2V9g-4kw8kViHDU7_trffA&s",
      keyFeatures: "Glow-in-the-dark, Shockproof",
      detailedDescription: `The glow-in-the-dark case for iPhone 7 not only protects against shocks but also lights up in the dark, making it easy to find your phone at night.`,
      price: 400,
      reviews: "115 reviews",
    }
  ];
  
  return (
    <div className="mobile-back-covers-container">
      {mobileBackCovers.map((product) => (
        <div key={product.id} className="mobile-back-cover-card" data-aos="fade-up">
          <img src={product.image} alt={product.name} className="mobile-back-cover-image" />
          <div className="mobile-back-cover-details">
            <h3 className="mobile-back-cover-title">{product.name}</h3>
            <p className="mobile-back-cover-feature"><strong>Key Features:</strong> {product.keyFeatures}</p>
            <p className="mobile-back-cover-price">₹{product.price}</p>
            <p className="mobile-back-cover-reviews"><strong>Reviews:</strong> {product.reviews}</p>
            <p className="mobile-back-cover-description">{product.detailedDescription}</p>
            <button className="mobile-back-cover-btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BackCovers;
