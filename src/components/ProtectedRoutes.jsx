import { Navigate , useLocation } from "react-router-dom";

import Cookies from 'js-cookie';

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({ children }) => {
  const location = useLocation();
  const token = Cookies.get("token");  
  console.log(token);
  if (token == null) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } 

  return <>{children}</>;
}
export default ProtectedRoutes;