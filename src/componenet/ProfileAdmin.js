import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsers, deleteUser } from '../redux/slices/adminSlice';

const ProfileAdmin = () => {
  const { isAdmin, USER } = useSelector((state) => state.admi);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAdmin) {
      navigate('/LoginAdmin');
    }
  }, [isAdmin]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div>
      {USER && USER.map((el) => (
        <div key={el._id}>
          <h1>{el.name}</h1>
          <button onClick={() => handleDeleteUser(el._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProfileAdmin;
