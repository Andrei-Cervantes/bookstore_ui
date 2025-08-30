import AuthCard from "@/shared/components/common/AuthCard";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background">
      <AuthCard title="Forgot Password" description="Reset your password">
        <ForgotPasswordForm />
      </AuthCard>
    </div>
  );
};

export default ForgotPassword;
