import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login", { state: location.pathname });
    }
  }, [currentUser, location.pathname, navigate]);
  return currentUser ? children : null;
};

export default PrivateRoute;
