import React from 'react';
import './Service.css';


const Service = (props) => {
    const { service } = props;
    const { name, img, price, description } = service;
    return (
        <div className="service">
            <img src={service.img} />
            <h2>{name}</h2>
            <h4>Price: ${price}</h4>
            <p>{description}</p>

        </div>
    );
};

export default Service;