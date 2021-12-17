import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from './../Service/Service';



const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    // console.log(services);
    return (
        <div className="container text-center" id="services">
            <h1 className="text-warning my-3">Our Services</h1>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;