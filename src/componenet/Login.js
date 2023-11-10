import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/slices/userSlices';
import { useNavigate } from 'react-router-dom'; 
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'; // Import the necessary components for Google Maps

const googleApiKey = 'AIzaSyCDo1_Nt0vyGI3SbPfqr2KuHMCRwcVfX_k';
const Login = () => {
  const dispatch = useDispatch();
  const { isLoading, isAuth } = useSelector((state) => state.user);
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleUser = () => {
    dispatch(
      login({
        email: email.current.value,
        password: password.current.value,
      })
    );
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/profile'); 
    }
  }, [isAuth]); 

  return (
    <div>
      <input type="email" placeholder="your email ..." ref={email} />
      <input type="password" placeholder="your password ..." ref={password} />
      <button onClick={handleUser}>Login</button>
      {isLoading && <p>Loading...</p>} 
      
    </div>
  );
};

export default Login;