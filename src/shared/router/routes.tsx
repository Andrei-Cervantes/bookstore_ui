import { type ReactElement } from "react";

// Page imports
import Home from "@/features/private/home/pages/Home";
import Login from "@/features/public/login/pages/Login";
import Register from "@/features/public/register/pages/Register";

export interface AppRoute {
  path: string;
  element: ReactElement;
  protected?: boolean;
}

export const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <Home />,
    protected: true,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
