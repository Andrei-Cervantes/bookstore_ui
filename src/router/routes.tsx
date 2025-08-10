import { type ReactElement } from "react";

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
    element: <HomePage />,
    protected: true,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];
