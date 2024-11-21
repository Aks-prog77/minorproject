import React, { useEffect } from "react";
import "./Clients.css"; // Add custom styles

const Clients = () => {
  const clientTestimonials = [
    {
      name: "Ritesh Jaiwal",
      feedback: "Accesszone provides top-notch accessories! Highly recommended.",
    },
    {
      name: "Roshan Singh",
      feedback: "Superb quality and fast delivery. I'll order again!",
    },
    {
      name: "Anushka",
      feedback: "Great value for money. The service was exceptional.",
    },
    {
      name: "Megha",
      feedback: "Amazing variety of products. Loved my experience with Accesszone.",
    },
    {
      name: "Gagan",
      feedback: "Quick support and excellent product quality.",
    },
    {
      name: "Sambhav",
      feedback: "I've recommended Accesszone to all my friends. Great store!",
    },
  ];

  // Scroll to the top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="clients">
      <h2>What Our Clients Say</h2>
      <div className="client-list">
        {clientTestimonials.map((client, index) => (
          <div key={index} className="client-card">
            <h3>{client.name}</h3>
            <p>{client.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
