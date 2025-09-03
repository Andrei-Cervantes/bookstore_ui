import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import useAuthService from "@/shared/services/authService";
import { useNavigate } from "react-router-dom";
import InputPassword from "@/shared/components/common/InputPassword";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { enqueueSnackbar } from "notistack";
import ErrorValidation from "@/shared/components/common/ErrorValidation";

const registerSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type RegisterSchema = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  // Register Service Mutation
  const { register: registerService } = useAuthService();
  const registerMutation = useMutation({
    mutationFn: (data: RegisterSchema) => registerService(data),
    onSuccess: () => {
      enqueueSnackbar(
        "Registration successful. An email has been sent to you to verify your account.",
        {
          variant: "success",
        }
      );
      navigate("/login");
    },
    onError: (error) => {
      enqueueSnackbar("Registration failed. Please try again.", {
        variant: "error",
      });
      console.log(error);
    },
  });

  const onSubmit = (data: RegisterSchema) => registerMutation.mutate(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-2"
    >
      <div>
        <Input type="text" placeholder="Name" {...register("name")} />
        {errors.name && <ErrorValidation error={errors.name.message} />}
      </div>
      <div>
        <Input type="email" placeholder="Email" {...register("email")} />
        {errors.email && <ErrorValidation error={errors.email.message} />}
      </div>
      <div>
        <InputPassword
          placeholder="Password"
          {...register("password")}
          withIcon={false}
        />
        {errors.password && <ErrorValidation error={errors.password.message} />}
      </div>
      <div>
        <InputPassword
          placeholder="Confirm Password"
          {...register("confirmPassword")}
          withIcon={false}
        />
        {errors.confirmPassword && (
          <ErrorValidation error={errors.confirmPassword.message} />
        )}
      </div>
      <Button
        type="submit"
        className="mt-4"
        disabled={registerMutation.isPending}
      >
        {registerMutation.isPending ? "Registering..." : "Register"}
      </Button>
    </form>
  );
};

export default RegisterForm;
