import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Tempered.css';

const Tempered = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

const temperedGlasses = [
  {
    id: 1,
    name: "Tempered Glass iPhone 12",
    image: "https://via.placeholder.com/150",
    keyFeatures: "Scratch-resistant, 9H Hardness, High Clarity",
    detailedDescription: `Designed for the iPhone 12, this tempered glass offers 9H hardness to protect against scratches and minor impacts. With its anti-fingerprint coating, it ensures a clear screen all day. Easy to install, bubble-free design for precision fit. Perfect for daily use.`,
    price: 500,
    reviews: "95 reviews",
  },
  {
    id: 2,
    name: "Tempered Glass Samsung Galaxy S21",
    image: "https://via.placeholder.com/150",
    keyFeatures: "Edge-to-edge protection, Oleophobic Coating",
    detailedDescription: `Specifically crafted for the Galaxy S21, this glass provides edge-to-edge protection and ultra-thin clarity for touch sensitivity. The oleophobic coating prevents smudges and makes cleaning easy.`,
    price: 550,
    reviews: "78 reviews",
  },
  {
    id: 3,
    name: "Tempered Glass OnePlus 9",
    image: "https://via.placeholder.com/150",
    keyFeatures: "High transparency, Anti-shatter film",
    detailedDescription: `Offering unmatched clarity, this tempered glass is designed for OnePlus 9. It includes anti-shatter film, high transparency, and a slim profile to maintain a sleek look.`,
    price: 600,
    reviews: "83 reviews",
  },
  {
    id: 4,
    name: "Tempered Glass iPhone 13 Pro",
    image: "https://via.placeholder.com/150",
    keyFeatures: "Privacy filter, 9H hardness",
    detailedDescription: `Protect your iPhone 13 Pro with this privacy tempered glass. It ensures your screen content is visible only to you while providing scratch resistance and anti-fingerprint coating.`,
    price: 650,
    reviews: "112 reviews",
  },
  {
    id: 5,
    name: "Tempered Glass Samsung Galaxy Note 20",
    image: "https://via.placeholder.com/150",
    keyFeatures: "Ultra-thin, HD clarity",
    detailedDescription: `This ultra-thin tempered glass for the Galaxy Note 20 offers seamless touch sensitivity and HD clarity. It features an oleophobic coating for smudge-free usage and a sleek design.`,
    price: 700,
    reviews: "90 reviews",
  },
  {
    id: 6,
    name: "Tempered Glass Google Pixel 6",
    image: "https://via.placeholder.com/150",
    keyFeatures: "Scratch-resistant, Bubble-free installation",
    detailedDescription: `Designed for Google Pixel 6, this tempered glass protects your screen from scratches and dust. Its bubble-free adhesive makes installation quick and easy.`,
    price: 750,
    reviews: "87 reviews",
  },
  {
    id: 7,
    name: "Tempered Glass Xiaomi Redmi Note 10",
    image: "https://via.placeholder.com/150",
    keyFeatures: "Anti-glare, Full coverage",
    detailedDescription: `This tempered glass for Redmi Note 10 features anti-glare technology and provides full-screen coverage. It protects against daily wear and tear while offering high touch sensitivity.`,
    price: 800,
    reviews: "100 reviews",
  },
  {
    id: 8,
    name: "Tempered Glass Oppo Reno 6",
    image: "https://via.placeholder.com/150",
    keyFeatures: "Ultra-clear, Shockproof",
    detailedDescription: `Crafted for Oppo Reno 6, this glass is ultra-clear with a shockproof layer for superior durability. Its high transparency and smooth edges enhance the user experience.`,
    price: 850,
    reviews: "76 reviews",
  },
  {
    id: 9,
    name: "Tempered Glass Vivo V21",
    image: "https://via.placeholder.com/150",
    keyFeatures: "Fingerprint resistant, Slim design",
    detailedDescription: `This Vivo V21 tempered glass features a slim design and a fingerprint-resistant coating. It ensures crystal-clear viewing with excellent durability.`,
    price: 900,
    reviews: "84 reviews",
  },
  {
    id: 10,
    name: "Tempered Glass iPhone SE (2020)",
    image: "https://via.placeholder.com/150",
    keyFeatures: "9H hardness, Anti-dust layer",
    detailedDescription: `Made for iPhone SE (2020), this tempered glass combines 9H hardness with an anti-dust layer for long-lasting protection. It delivers excellent clarity and scratch resistance.`,
    price: 950,
    reviews: "120 reviews",
  },
  {
    id: 11,
    name: "Tempered Glass Samsung Galaxy A72",
    image: "https://via.placeholder.com/150",
    keyFeatures: "Full HD clarity, Edge guard",
    detailedDescription: `Designed for Galaxy A72, this tempered glass offers edge protection and full HD clarity. It enhances screen durability while maintaining its sleek appearance.`,
    price: 1000,
    reviews: "102 reviews",
  },
  {
    id: 12,
    name: "Tempered Glass Realme GT Master Edition",
    image: "https://via.placeholder.com/150",
    keyFeatures: "Anti-scratch, Smooth touch",
    detailedDescription: `This tempered glass provides anti-scratch protection for Realme GT Master Edition. Its ultra-smooth surface ensures accurate touch responses.`,
    price: 1050,
    reviews: "98 reviews",
  },
  {
    id: 13,
    name: "Tempered Glass Motorola Edge 20",
    image: "https://via.placeholder.com/150",
    keyFeatures: "High durability, Crystal clear",
    detailedDescription: `Motorola Edge 20 tempered glass combines durability with crystal-clear visuals. It resists impacts and scratches while retaining touch sensitivity.`,
    price: 1100,
    reviews: "75 reviews",
  },
  {
    id: 14,
    name: "Tempered Glass Huawei P30 Pro",
    image: "https://via.placeholder.com/150",
    keyFeatures: "Bubble-free, 3D curved edges",
    detailedDescription: `Crafted for Huawei P30 Pro, this tempered glass ensures bubble-free installation and 3D curved edges for a flawless fit. Perfect for extended usage.`,
    price: 1150,
    reviews: "89 reviews",
  },
  {
    id: 15,
    name: "Tempered Glass Xiaomi Mi 11",
    image: "https://via.placeholder.com/150",
    keyFeatures: "Full protection, High touch response",
    detailedDescription: `Providing full-screen protection for Mi 11, this glass features high touch response and a scratch-resistant surface. Ideal for gamers and professionals.`,
    price: 1200,
    reviews: "86 reviews",
  },
  {
    id: 16,
    name: "Tempered Glass iPhone XR",
    image: "https://via.placeholder.com/150",
    keyFeatures: "Scratch-resistant, UV protection",
    detailedDescription: `This iPhone XR glass protects your screen with UV coating and a scratch-resistant layer. It offers high transparency and excellent screen clarity.`,
    price: 1250,
    reviews: "93 reviews",
  },
  {
    id: 17,
    name: "Tempered Glass iPhone 11 Pro Max",
    image: "https://via.placeholder.com/150",
    keyFeatures: "Anti-fingerprint, High durability",
    detailedDescription: `Perfect for the iPhone 11 Pro Max, this tempered glass is designed to resist fingerprints while providing durable protection against scratches and drops.`,
    price: 1300,
    reviews: "110 reviews",
  },
  {
    id: 18,
    name: "Tempered Glass Samsung Galaxy Z Fold 3",
    image: "https://via.placeholder.com/150",
    keyFeatures: "Foldable, Ultra-thin",
    detailedDescription: `This tempered glass is specially designed for Samsung Galaxy Z Fold 3. It is ultra-thin and foldable, offering maximum protection without compromising the folding mechanism.`,
    price: 1350,
    reviews: "65 reviews",
  },
  {
    id: 19,
    name: "Tempered Glass Oppo F19 Pro+",
    image: "https://via.placeholder.com/150",
    keyFeatures: "Fingerprint-resistant, Scratch-proof",
    detailedDescription: `Oppo F19 Pro+ users will appreciate the scratch-proof, fingerprint-resistant coating on this tempered glass, which enhances the phone’s clarity and touch experience.`,
    price: 1400,
    reviews: "78 reviews",
  },
  {
    id: 20,
    name: "Tempered Glass iPhone 14 Pro Max",
    image: "https://via.placeholder.com/150",
    keyFeatures: "Anti-blue light, High response",
    detailedDescription: `This tempered glass is tailored for iPhone 14 Pro Max. It includes anti-blue light technology to reduce eye strain and high response sensitivity for gaming and daily use.`,
    price: 1450,
    reviews: "115 reviews",
  },
  {
    id: 21,
    name: "Tempered Glass Samsung Galaxy A52",
    image: "https://via.placeholder.com/150",
    keyFeatures: "Full edge protection, 9H hardness",
    detailedDescription: `Offering 9H hardness and full edge protection, this tempered glass for Samsung Galaxy A52 prevents cracks and scratches while maintaining touch sensitivity.`,
    price: 1500,
    reviews: "105 reviews",
  },
  {
    id: 22,
    name: "Tempered Glass Xiaomi Redmi Note 11 Pro",
    image: "https://via.placeholder.com/150",
    keyFeatures: "Scratch-resistant, High clarity",
    detailedDescription: `This tempered glass for Xiaomi Redmi Note 11 Pro offers scratch-resistant protection while maintaining high clarity for an optimal viewing experience.`,
    price: 1550,
    reviews: "92 reviews",
  },
  {
    id: 23,
    name: "Tempered Glass Vivo X70 Pro",
    image: "https://via.placeholder.com/150",
    keyFeatures: "Ultra-clear, 9H hardness",
    detailedDescription: `Designed for Vivo X70 Pro, this tempered glass offers ultra-clear viewing with 9H hardness for maximum protection against scratches and impacts.`,
    price: 1600,
    reviews: "88 reviews",
  },
  {
    id: 24,
    name: "Tempered Glass iPhone 8 Plus",
    image: "https://via.placeholder.com/150",
    keyFeatures: "Anti-glare, Full protection",
    detailedDescription: `This iPhone 8 Plus glass provides anti-glare protection while offering full coverage against scratches and impacts. It ensures clear visuals with high touch sensitivity.`,
    price: 1650,
    reviews: "105 reviews",
  },
];

  return (
    <div className="tempered-glasses-container">
      {temperedGlasses.map((product) => (
        <div
          key={product.id}
          className="tempered-product-card"
          data-aos="fade-up"
        >
          <img
            src={product.image}
            alt={product.name}
            className="tempered-product-image"
          />
          <div className="tempered-product-details">
            <h3 className="tempered-product-title">{product.name}</h3>
            <p className="tempered-product-feature">
              <strong>Key Features:</strong> {product.keyFeatures}
            </p>
            <p className="tempered-product-price">₹{product.price}</p>
            <p className="tempered-product-reviews">
              <strong>Reviews:</strong> {product.reviews}
            </p>
            <p className="tempered-product-description">
              {product.detailedDescription}
            </p>
            <button className="tempered-add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tempered;