import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceID} = useParams()
    return (
        <div>
            <h2>Welcome to service detail: {serviceID}</h2>
            <div className='text-center'>
                <Link to='/checkout' className='btn btn-primary'>Proceed Checkout</Link>
            </div>
        </div>
    );
};

export default ServiceDetail;