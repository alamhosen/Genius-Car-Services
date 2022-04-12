import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, img, price, description} = service;
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>${price}</h4>
            <p>{description}</p>
            <button className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;