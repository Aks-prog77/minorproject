import React, { useEffect } from "react";
import "./Career.css"; // Add custom styles

const Career = () => {
  const jobOpenings = [
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-Time",
      description:
        "We are looking for a skilled Frontend Developer with experience in React to build stunning user interfaces for our platform.",
    },
    {
      title: "Marketing Specialist",
      location: "Delhi, India",
      type: "Part-Time",
      description:
        "Join our marketing team to design and implement creative campaigns that drive growth.",
    },
    {
      title: "Customer Support Executive",
      location: "Remote",
      type: "Full-Time",
      description:
        "Help us deliver excellent customer service by managing queries and resolving issues efficiently.",
    },
    {
      title: "Logistics Manager",
      location: "Delhi, India",
      type: "Full-Time",
      description:
        "Ensure smooth and efficient delivery operations for our growing customer base.",
    },
  ];

  // Scroll to the top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="career">
      <h2>Join Our Team</h2>
      <p>
        At Accesszone, we are committed to creating a collaborative and inclusive
        work environment. Explore our open positions below and find your next
        career opportunity.
      </p>

      <div className="job-list">
        {jobOpenings.map((job, index) => (
          <div key={index} className="job-card">
            <h3>{job.title}</h3>
            <p className="job-location">
              <strong>Location:</strong> {job.location}
            </p>
            <p className="job-type">
              <strong>Type:</strong> {job.type}
            </p>
            <p className="job-description">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
