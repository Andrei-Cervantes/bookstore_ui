import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background">
      <h1 className="text-2xl font-bold text-primary">Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
