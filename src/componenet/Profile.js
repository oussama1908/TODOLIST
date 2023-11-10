import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddTask from './AddTask'; 
import { Task } from './Task';

const Profile = () => {
  const { isAuth } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth, navigate]);

  return (
    <div>
      <h1>Profile</h1>

      <AddTask />
      <Task />
    </div>
  );
}

export default Profile;
