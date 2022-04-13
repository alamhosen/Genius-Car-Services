import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate('/login')
    }

    const handleRegister = event =>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);
    }

    return (
        <div className='register-form'>
            <h2 style={{textAlign:'center'}}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your name'/>
                <input type="email" name="email" id="" placeholder='Email address' required/>
                <input type="password" name="password" id="" placeholder='Password' required />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-danger pu-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link>
            </p>
        </div>
    );
};

export default Register;