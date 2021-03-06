import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import {useSignInWithGithub, useSignInWithGoogle} from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error || errorGit) {
         errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {errorGit?.message}</p>
          </div>
      }

      if(user || userGit){
          navigate('/home')
      }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <div className='px-2'>OR</div>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()}
                className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img style={{ height: "30px" }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span></button>
                <button className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span></button>
                <button onClick={() => signInWithGithub()}
                className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img src={github} alt="" />
                    <span className='px-2'>Github Sign In</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;