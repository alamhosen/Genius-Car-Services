import React from 'react';
import notFound from '../../../images//notFound.jpg'

const NotFound = () => {
    return (
        <div className='container'>
            <h2 className='text-primary text-center my-4'>Machanic is sleeping...</h2>
            <img className='w-50 mx-auto d-block rounded' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;