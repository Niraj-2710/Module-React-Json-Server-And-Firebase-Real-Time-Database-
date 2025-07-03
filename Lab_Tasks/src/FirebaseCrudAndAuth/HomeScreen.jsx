import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const H_Screen = () => {
    const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth);
    navigate('/');
  };

  return (
     <div>
      <h2>Welcome To The World{auth.currentUser?.displayName}</h2>
      <button onClick={handleLogout}>Logout Hear</button>
    </div>
  )
}

export default H_Screen
