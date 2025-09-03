import AuthCard from "@/shared/components/common/AuthCard";
import { useMutation } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import useAuthService from "@/shared/services/authService";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";

const EmailVerification = () => {
  const [countdown, setCountdown] = useState(3);
  const { token } = useParams();
  const navigate = useNavigate();
  const { verifyEmail: verifyEmailService } = useAuthService();
  const { enqueueSnackbar } = useSnackbar();

  const startCountdown = () => {
    setCountdown(3);

    setTimeout(() => {
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            navigate("/login");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 1000);
  };

  const verifyEmailMutation = useMutation({
    mutationFn: (data: { token: string }) => verifyEmailService(data),
    onSuccess: () => {
      setCountdown(0);
      enqueueSnackbar("Email verified", { variant: "success" });
    },
    onError: () => {
      setCountdown(0);
      enqueueSnackbar("Email verification failed", { variant: "error" });
    },
  });

  useEffect(() => {
    if (!token || token.length === 0) {
      startCountdown();
    } else {
      verifyEmailMutation.mutate({ token });
    }
  }, [token]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background">
      <AuthCard title="Email Verification" description="Verify your email">
        {verifyEmailMutation.isPending && (
          <div className="text-center">
            <p>Verifying your email...</p>
          </div>
        )}
        {verifyEmailMutation.isSuccess && (
          <div className="text-green-500">Email verified</div>
        )}
        {countdown > 0 && (
          <div className="text-sm text-gray-500">
            Redirecting in {countdown}...
          </div>
        )}
        {verifyEmailMutation.isError && (
          <div className="text-red-500">Email verification failed</div>
        )}
      </AuthCard>
    </div>
  );
};

export default EmailVerification;
