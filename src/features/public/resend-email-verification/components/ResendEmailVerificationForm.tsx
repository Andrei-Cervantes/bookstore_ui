import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorValidation from "@/shared/components/common/ErrorValidation";
import useAuthService from "@/shared/services/authService";
import { useSnackbar } from "notistack";
import { useMutation } from "@tanstack/react-query";
import { Input } from "@/shared/components/ui/input";
import { Mail } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

const resendEmailVerificationSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ResendEmailVerificationSchema = z.infer<
  typeof resendEmailVerificationSchema
>;

const ResendEmailVerificationForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResendEmailVerificationSchema>({
    resolver: zodResolver(resendEmailVerificationSchema),
  });

  // Resend Verification Email Service Mutation
  const { resendVerificationEmail: resendVerificationEmailService } =
    useAuthService();
  const { enqueueSnackbar } = useSnackbar();
  const resendVerificationEmailMutation = useMutation({
    mutationFn: (data: ResendEmailVerificationSchema) =>
      resendVerificationEmailService(data),
    onSuccess: () => {
      enqueueSnackbar("Verification email sent", {
        variant: "success",
      });
    },
    onError: () => {
      enqueueSnackbar("Failed to send verification email", {
        variant: "error",
      });
    },
  });

  const onSubmit = (data: ResendEmailVerificationSchema) =>
    resendVerificationEmailMutation.mutate(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-2"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm text-muted-foreground">
          Enter your email to resend your email verification
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
          className="flex-1"
          variant="outline"
          onClick={() => navigate("/login")}
        >
          Back to login
        </Button>
        <Button
          className="flex-1"
          type="submit"
          disabled={resendVerificationEmailMutation.isPending}
        >
          {resendVerificationEmailMutation.isPending
            ? "Sending email..."
            : "Send Email"}
        </Button>
      </div>
    </form>
  );
};

export default ResendEmailVerificationForm;
