import { Routes, Route, Navigate } from "react-router-dom";
import { appRoutes } from "./routes";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <Routes>
      {appRoutes.map(({ path, element, protected: isProtected }) => (
        <Route
          key={path}
          path={path}
          element={
            isProtected ? <ProtectedRoute>{element}</ProtectedRoute> : element
          }
        />
      ))}

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default Router;
