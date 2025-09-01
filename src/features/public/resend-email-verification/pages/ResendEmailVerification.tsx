import AuthCard from "@/shared/components/common/AuthCard";
import ResendEmailVerificationForm from "../components/ResendEmailVerificationForm";

const ResendEmailVerification = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background">
      <AuthCard
        title="Resend Email Verification"
        description="Resend your email verification"
      >
        <ResendEmailVerificationForm />
      </AuthCard>
    </div>
  );
};

export default ResendEmailVerification;
