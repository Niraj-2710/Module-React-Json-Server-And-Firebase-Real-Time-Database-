import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Firebase = () => {
    const navigate = useNavigate();

  const H_Login = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        navigate('/dashboard');
      })
      .catch(error => alert(error.message));
  };
  
  return (
     <div>
      <h2>Login Hear</h2>
      <button onClick={H_Login}>Sign In Microsoft</button>
    </div>
  )
}

export default Firebase
