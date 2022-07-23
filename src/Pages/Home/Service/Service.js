import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100 p-2 ' src={img} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <small>{description}</small>
            <br />
            <button onClick={() => navigateToServiceDetail(id)} className='btn-primary rounded'>BOOK {name}</button>
        </div>
    );
};

export default Service;