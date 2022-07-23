import React from 'react';
import sleeping from '../../../Images/sleeping.jpg';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-danger text-center m-4'>404 Not Found</h1>
            <img className='w-100' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;