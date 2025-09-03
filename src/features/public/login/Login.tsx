import AuthCard from "@/shared/components/common/AuthCard";
import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background">
      <AuthCard title="Login" description="Login to your account">
        <LoginForm />
      </AuthCard>
    </div>
  );
};

export default Login;
