import { useContext } from "react";
import PropTypes from "prop-types";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../../providers/FirebaseProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user} = useContext(AuthContext);
  // if (loading) {
  //   return (
  //     <div className="h-[calc(100vh-470px)] flex justify-center items-center">
  //       <span className="loading loading-spinner loading-lg bg-primary"></span>
  //     </div>
  //   );
  // }
  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"} />;
  }
  return (
    <div>
      {children}
    </div>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
