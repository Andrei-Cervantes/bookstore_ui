import { Navigate } from "react-router-dom";
import { useTokenStore } from "../stores/tokenStore";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { accessToken } = useTokenStore();
  const isAuthenticated = !!accessToken;

  if (isAuthenticated) {
    return <Navigate to="/books" replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
