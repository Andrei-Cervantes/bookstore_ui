import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background">
      <h1 className="text-2xl font-bold text-primary">Register</h1>
      <RegisterForm />
    </div>
  );
};

export default Register;
