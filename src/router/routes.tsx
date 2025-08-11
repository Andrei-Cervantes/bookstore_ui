import { type ReactElement } from "react";

// Page imports
import HomePage from "@/pages/Private/HomePage";
import LoginPage from "@/pages/Public/LoginPage";
import RegisterPage from "@/pages/Public/RegisterPage";

export interface AppRoute {
  path: string;
  element: ReactElement;
  protected?: boolean;
}

export const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <HomePage />,
    protected: true,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
];
