import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/slices/userSlices';
import { useNavigate } from 'react-router-dom';

const Registre = () => {
  const dispatch = useDispatch();
  const { isLoading, isAuth } = useSelector((state) => state.user);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (isAuth) {
      navigate('/profile');
    }
  }, [isAuth, navigate]); 
  const myname = useRef();
  const myemail = useRef();
  const mypassword = useRef();

  const handeluser = () => {
    const name = myname.current.value;
    const email = myemail.current.value;
    const password = mypassword.current.value;

    dispatch(register({ name, email, password }));
  }

  return (
    <div>
      <input type="text" placeholder="your name ..." ref={myname} />
      <input type="email" placeholder="your email ..." ref={myemail} />
      <input type="password" placeholder="your password ..." ref={mypassword} />
      <button onClick={handeluser}>envoyer</button>

      {isLoading && <p>Loading...</p>} 
    </div>
  )
}

export default Registre;
