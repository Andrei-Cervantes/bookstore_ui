import { type ReactElement } from "react";
import ProtectedRoute from "./ProtectedRoute";

// Page imports
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";

export interface AppRoute {
  path: string;
  element: ReactElement;
  protected?: boolean;
}

export const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
    protected: true,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];
