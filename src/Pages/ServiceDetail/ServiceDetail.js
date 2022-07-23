import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='text-center'>
            <h2>Service Details: {serviceId}</h2>
            <Link to={'/checkout'}>
                <button className='btn btn-primary '>PROCEED CHECKOUT</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;