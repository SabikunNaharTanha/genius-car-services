import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 p-3 bg-secondary text-white '>
            <h5><small>Copyright @ {year}</small></h5>
        </footer>
    );
};

export default Footer;