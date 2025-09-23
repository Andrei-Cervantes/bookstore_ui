import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import useAuthService from "@/shared/services/authService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail } from "lucide-react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ErrorValidation from "@/shared/components/common/ErrorValidation";

const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
});

type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  // Forgot Password Service Mutation
  const { forgotPassword: forgotPasswordService } = useAuthService();
  const { enqueueSnackbar } = useSnackbar();
  const forgotPasswordMutation = useMutation({
    mutationFn: (data: ForgotPasswordSchema) => forgotPasswordService(data),
    onSuccess: () => {
      enqueueSnackbar("Password reset email sent", {
        variant: "success",
      });
    },
    onError: () => {
      enqueueSnackbar("Failed to send password reset email", {
        variant: "error",
      });
    },
  });

  const onSubmit = (data: ForgotPasswordSchema) =>
    forgotPasswordMutation.mutate(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-2"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm text-muted-foreground">
          Enter your email to reset your password
        </label>
        <div className="relative">
          <Input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="pl-8"
          />
          <Mail className="text-primary absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
        </div>
        {errors.email && <ErrorValidation error={errors.email.message} />}
      </div>
      <div className="flex justify-between mt-4 gap-2">
        <Button
          type="button"
          className="flex-1"
          variant="outline"
          onClick={() => navigate("/login")}
          disabled={forgotPasswordMutation.isPending}
        >
          Back to login
        </Button>
        <Button
          className="flex-1"
          type="submit"
          disabled={forgotPasswordMutation.isPending}
        >
          {forgotPasswordMutation.isPending ? "Sending email..." : "Send Email"}
        </Button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
