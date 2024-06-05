import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Shared/Loading";
import useAuth from "../Hooks/useAuth";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }
  // alert("please login First");
  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivateRoute;
