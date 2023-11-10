import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { logout } from '../redux/slices/userSlices';

const Navbar = ({type}) => {
  const { isAuth } = useSelector((state) => state.user);
  const { isAdmin } = useSelector((state) => state.admi);


  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
     { (type=="admin")?
      (isAdmin)? 
        // Check the 'type' parameter to determine the user type
          // Admin Navbar
          <>
            <Link to="/ProfileAdmin">Admin Profile</Link>
            <button onClick={handleLogout}>Log out</button>
          </>
         : 
          // Regular User Navbar
          <>
           <Link to="/LoginAdmin">Login</Link>
          {/* <Link to="/register">Register</Link> */}
          </>    
        
        
       : 
       (isAuth)? 
        // Check the 'type' parameter to determine the user type
          // Admin Navbar
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout}>Log out</button>
          </>
         : 
          // Regular User Navbar
          <>
           <Link to="/login">Login</Link>
           <Link to="/register">Register</Link> 
          </>    
       
  
      }
      </div>

  
  );
    }

export default Navbar;
