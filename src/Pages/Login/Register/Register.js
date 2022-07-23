import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegisterSubmit = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }
    return (
        <div className='register-form'>
            <h2 className='text-center text-primary my-4'>Please Register</h2>
            <form onSubmit={handleRegisterSubmit}>
                <input type="text" name="Your Name" id="" placeholder='Your Name' />

                <input type="email" name="Email" id="" placeholder='Email Address' required />

                <input type="password" id="" placeholder='Password' required />

                <input className='btn-submit' type="submit" value="Register" />
            </form>
            <p className='m-2'>Already have an account? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;