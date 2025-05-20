import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ userData }) => {
  return userData ? (
    <div>
    
      <Outlet />
    </div>
  ) : (
    <Navigate to="/sign-in" />
  );
};

export default PrivateRoutes;
