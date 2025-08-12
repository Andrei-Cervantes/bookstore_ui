import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./routes";
import ProtectedRoute from "./ProtectedRoute";
import PrivateLayout from "@/layout/PrivateLayout";
import PublicLayout from "@/layout/PublicLayout";
import NotFoundPage from "@/pages/NotFoundPage";

const Router = () => {
  return (
    <Routes>
      {/* Private Routes */}
      <Route element={<PrivateLayout />}>
        {appRoutes
          .filter((route) => route.protected)
          .map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<ProtectedRoute>{element}</ProtectedRoute>}
            />
          ))}
      </Route>

      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        {appRoutes
          .filter((route) => !route.protected)
          .map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
      </Route>

      {/* Fallback Route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
