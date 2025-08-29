import { type ReactElement } from "react";

// Page imports
import Home from "@/features/private/home/pages/Home";
import Login from "@/features/public/login/pages/Login";
import Register from "@/features/public/register/pages/Register";
import EmailVerification from "@/features/public/email-verification/pages/EmailVerification";
import ForgotPassword from "@/features/public/forgot-password/pages/ForgotPassword";
import ResetPassword from "@/features/public/reset-password/pages/ResetPassword";
import ResendEmailVerification from "@/features/public/resend-email-verification/pages/ResendEmailVerification";
import Landing from "@/features/public/landing/pages/Landing";

export interface AppRoute {
  path: string;
  element: ReactElement;
  protected?: boolean;
}

export const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/books",
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
  {
    path: "/verify-email",
    element: <EmailVerification />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/resend-verification-email",
    element: <ResendEmailVerification />,
  },
];
