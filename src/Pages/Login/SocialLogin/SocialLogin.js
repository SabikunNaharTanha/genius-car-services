import React from 'react';
import google from '../../../Images/Social/google.png';
import facebook from '../../../Images/Social/facebook.png';
import github from '../../../Images/Social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, loading, user, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement =
            <p className='text-danger'>Error: {error?.message} {error1.message}</p>
    }

    if (user || user1) {
        navigate('/home');
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-3 px-3'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>

            {errorElement}

            <div className=''>

                <button onClick={() => signInWithGoogle()} style={{ backgroundColor: 'lightgrey', color: 'rgb(80, 79, 79)', fontWeight: '500' }} className='btn w-50 d-block mx-auto my-3'>
                    <img style={{ width: '30px', marginRight: '10px' }} src={google} alt="" />
                    Google Sign In
                </button>

                <button onClick={() => signInWithGithub()} style={{ backgroundColor: 'lightgrey', color: 'rgb(80, 79, 79)', fontWeight: '500' }} className='btn w-50 d-block mx-auto my-3'>
                    <img style={{ width: '30px', marginRight: '10px' }} src={github} alt="" />
                    Github Sign In
                </button>

                <button style={{ backgroundColor: 'lightgrey', color: 'rgb(80, 79, 79)', fontWeight: '500' }} className='btn w-50 d-block mx-auto my-3'>
                    <img style={{ width: '30px', marginRight: '10px' }} src={facebook} alt="" />
                    Facebook Sign In
                </button>
            </div>
        </div >
    );
};

export default SocialLogin;