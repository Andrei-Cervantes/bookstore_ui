import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./routes";
import ProtectedRoute from "./ProtectedRoute";
import NotFoundPage from "@/pages/NotFoundPage";

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
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
