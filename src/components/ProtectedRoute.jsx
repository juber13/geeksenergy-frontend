/* eslint-disable react/prop-types */
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie'

const Protectedroutes = ({children}) => {

const location = useLocation();
  const token = Cookies.get("token");  
  console.log(token);
  if (token == null) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } 

  return <>{children}</>;
}

export default Protectedroutes