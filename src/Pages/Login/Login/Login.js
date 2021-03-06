import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;

    // sign in with email and password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // forget password
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const from = location.state?.from?.pathname || "/";

    // handle error
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = async event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
        const {data} = await axios.post('http://localhost:5000/login', {email})
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }

    const navigateRegister = event => {
        navigate('/register')
    }

    // navigate user to home page

    if (user) {
        // navigate(from, { replace: true });
    }

    // reset password
    const resetPassword = async () =>{
        const email = emailRef.current.value;

        if(email){
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('Please enter your email address')
        }
        
    }

    return (
        <div className='container mx-auto w-50'>
            <h2 className='text-center text-primary my-3'>Please Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='mx-auto w-50 d-block' onClick={handleSubmit} variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p className='pt-3'>New to grnius car? <Link to='/register' className='text-primary pu-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link>
            </p>
            <p className='pt-3'>Forget Password? <button className='btn btn-link text-primary pu-auto text-decoration-none' onClick={resetPassword}>Reset Password</button>
            </p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;