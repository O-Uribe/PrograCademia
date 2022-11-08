import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({
  user=null,
  val,
  redirectTo = "/",
  children,
}) => {
  if (!user & val===1) {
    return <Navigate to={redirectTo} replace />;
  }
  else if(!user & val===2){
    return children
  }else if(user!=null & val===2){
    return <Navigate to={redirectTo} replace />;
  }
  return children;
};