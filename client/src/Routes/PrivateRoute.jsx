import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ Component, isAuthenticated, ...props }) => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/admin-login" />;
};

export default PrivateRoute;
