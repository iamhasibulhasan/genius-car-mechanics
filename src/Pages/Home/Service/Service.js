import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';


const Service = (props) => {
    const { service } = props;
    const { id, name, img, price, description } = service;
    return (
        <div className="service pb-3">
            <img src={service.img} />
            <h2>{name}</h2>
            <h4>Price: ${price}</h4>
            <p>{description}</p>
            <Link to={`/booking/${id}`}>
                <button className='btn btn-warning'>Book {name.toLowerCase()}</button>
            </Link>

        </div>
    );
};

export default Service;