import Link from "@/shared/components/common/Link";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import useAuthService from "@/shared/services/authService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail } from "lucide-react";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { z } from "zod";

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordForm = () => {
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
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div className="flex justify-between">
        <Link to="/login" className="w-full">
          <Button variant="outline">Back to login</Button>
        </Link>
        <Button
          type="submit"
          className="mt-4 w-full"
          disabled={forgotPasswordMutation.isPending}
        >
          {forgotPasswordMutation.isPending ? "Sending email..." : "Send Email"}
        </Button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
