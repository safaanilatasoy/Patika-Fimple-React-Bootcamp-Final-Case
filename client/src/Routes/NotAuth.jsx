import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ isAuthenticated }) => {
  return !isAuthenticated() ? <Outlet /> : <Navigate to="/admin-dashboard" />;
};

export default PrivateRoute;
