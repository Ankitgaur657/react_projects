import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function AuthLayout({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status); // Assuming boolean (true/false)

  useEffect(() => {
    // Check if authentication is required
    if (authentication && !authStatus) {
      navigate('/login');
    } 
    // Redirect authenticated users away from public routes
    else if (!authentication && authStatus) {
      navigate('/');
    } else {
      // Only set loader to false if no navigation occurs
      setLoader(false);
    }
  }, [authStatus, navigate, authentication]);

  return <>{loader ? <div>Loading...</div> : children}</>;
}
