import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserLogin } from '../Redux/AuthReducer/action';

export const CompleteSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleCompleteSignIn = () => {
      const email = window.localStorage.getItem('emailForSignIn');

      if (email) {
        try {
          // Simulate successful sign-in (You can add your own validation)
          window.localStorage.setItem('user', JSON.stringify({ email }));
          window.localStorage.removeItem('emailForSignIn');
          dispatch(setUserLogin(true)); // Dispatch to Redux
          navigate('/dashboard'); // Redirect to a protected route
        } catch (error) {
          console.error('Error during sign-in:', error);
          navigate('/error'); // Redirect to an error page
        }
      } else {
        console.warn('No email found in localStorage for sign-in.');
        navigate('/login'); // Redirect to login if no email found
      }
    };

    handleCompleteSignIn();
  }, [navigate, dispatch]);

  return <div>Processing sign-in...</div>;
};
