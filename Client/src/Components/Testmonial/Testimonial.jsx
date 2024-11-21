import React, { useEffect } from 'react';
import './Testimonial.css';

const TestimonialItem = ({ photo, name, rating, review }) => {
    return (
        <div className="testimonial-item">
            <img src={photo} alt={`${name}'s photo`} className="testimonial-photo" />
            <h3>{name}</h3>
            <p className="testimonial-rating">Rating: {rating} / 5</p>
            <p className="testimonial-review">{review}</p>
        </div>
    );
};

const Testimonial = () => {
    const testimonials = [
        {
            photo: 'https://via.placeholder.com/80',
            name: 'Akshit Verma',
            rating: 5,
            review: 'The best phone cases I have ever used! Durable, stylish, and affordable.',
        },
        {
            photo: 'https://via.placeholder.com/80',
            name: 'Akshat Sharma',
            rating: 4,
            review: 'Great quality accessories! The screen protectors are scratch-resistant and easy to apply.',
        },
        {
            photo: 'https://via.placeholder.com/80',
            name: 'Tamim Arif',
            rating: 5,
            review: 'Customer service was excellent, and my new charger works perfectly!',
        },
        {
            photo: 'https://via.placeholder.com/80',
            name: 'Prashant Kumar',
            rating: 4,
            review: 'Fast shipping and quality products. Will definitely shop here again!',
        },
    ];

    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="testimonials">
            <h2 className="testimonials-title">Customer Testimonials</h2>
            <div className="testimonial-list">
                {testimonials.map((testimonial, index) => (
                    <TestimonialItem
                        key={index}
                        photo={testimonial.photo}
                        name={testimonial.name}
                        rating={testimonial.rating}
                        review={testimonial.review}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
