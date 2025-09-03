import AuthCard from "@/shared/components/common/AuthCard";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background">
      <AuthCard title="Register" description="Create an account">
        <RegisterForm />
      </AuthCard>
    </div>
  );
};

export default Register;
