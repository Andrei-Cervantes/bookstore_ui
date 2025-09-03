import { type ReactElement } from "react";

// Page imports
import Home from "@/features/private/home/Home";
import Login from "@/features/public/login/Login";
import Register from "@/features/public/register/Register";
import EmailVerification from "@/features/public/email-verification/EmailVerification";
import ForgotPassword from "@/features/public/forgot-password/ForgotPassword";
import ResetPassword from "@/features/public/reset-password/ResetPassword";
import ResendEmailVerification from "@/features/public/resend-email-verification/ResendEmailVerification";
import Landing from "@/features/public/landing/Landing";

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
    path: "/verify-email/:token",
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
