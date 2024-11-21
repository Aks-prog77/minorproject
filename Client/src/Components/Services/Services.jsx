import React, { useEffect } from 'react';
import './Services.css';

const ServiceItem = ({ icon, title, description }) => {
    return (
        <div className="service-item">
            <span className="service-icon">{icon}</span>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

const Services = () => {
    const services = [
        {
            icon: '🔧',
            title: 'Screen Repair',
            description: 'Fast and reliable screen repair for all mobile devices.',
        },
        {
            icon: '🔋',
            title: 'Battery Replacement',
            description: 'Quick battery replacement for improved performance.',
        },
        {
            icon: '🎧',
            title: 'Accessories Installation',
            description: 'Installation of screen protectors, cases, and other accessories.',
        },
        {
            icon: '💡',
            title: 'Device Customization',
            description: 'Personalize your device with custom skins and more.',
        },
    ];

    // Scroll to the top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="services">
            <h2 className="services-title">Our Services</h2>
            <div className="services-list">
                {services.map((service, index) => (
                    <ServiceItem
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;
