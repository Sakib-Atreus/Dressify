import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      setLoading(false); 
    }, 1500);

    return () => clearTimeout(timer); 
  }, []);

  if (loading || showLoader) { 
    return (
      <div className="max-w-7xl mx-auto pt-28 flex justify-center items-center h-screen">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace ></Navigate>;
};

export default PrivateRoute;