import { Navigate } from "react-router-dom";
import { useTokenStore } from "../stores/tokenStore";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { accessToken } = useTokenStore();
  const isAuthenticated = !!accessToken;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
