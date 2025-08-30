import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import useAuthService from "@/shared/services/authService";
import { useNavigate } from "react-router-dom";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import InputPassword from "@/shared/components/common/InputPassword";
import { Mail } from "lucide-react";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { useEffect, useState } from "react";
import { useTokenStore } from "@/shared/stores/tokenStore";
import { useUserStore } from "@/shared/stores/userStore";
import { useSnackbar } from "notistack";
import { AxiosError } from "axios";
import type { CommonResponse, TokenResponse } from "@/shared/types/authTypes";
import { Link } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginSchema = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const { setTokens } = useTokenStore();
  const { setUser } = useUserStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  // Login Service Mutation
  const { login: loginService } = useAuthService();
  const { enqueueSnackbar } = useSnackbar();
  const loginMutation = useMutation({
    mutationFn: (data: LoginSchema) => loginService(data),
    onSuccess: (data: CommonResponse<TokenResponse>) => {
      const { data: userData } = data;
      const { tokens: tokensData } = userData;

      enqueueSnackbar("Login successful", {
        variant: "success",
      });
      setTokens(tokensData.accessToken, tokensData.refreshToken);
      setUser({
        id: userData.id,
        avatar: userData.avatar,
        email: userData.email,
        isActive: userData.isActive,
        isVerified: userData.isVerified,
        name: userData.name,
        role: userData.role,
      });
      navigate("/");
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.data.message === "Email not verified") {
          enqueueSnackbar("Email not verified", {
            variant: "error",
          });
        } else {
          enqueueSnackbar("Invalid email or password", {
            variant: "error",
          });
        }
      }
    },
  });

  const onSubmit = (data: LoginSchema) => loginMutation.mutate(data);

  // Load saved credentials on component mount
  useEffect(() => {
    const savedRememberMe = localStorage.getItem("rememberMe");
    const savedCredentials = localStorage.getItem("savedCredentials");

    if (savedRememberMe === "true" && savedCredentials) {
      try {
        const credentials = JSON.parse(savedCredentials);
        setRememberMe(true);
        setValue("email", credentials.email);
        setValue("password", credentials.password);
      } catch (error) {
        console.error("Error parsing saved credentials:", error);
        localStorage.removeItem("savedCredentials");
      }
    }
  }, [setValue]);

  // Handle Remember Me checkbox changes only
  const handleRememberMeChange = (checked: boolean | "indeterminate") => {
    const newValue = checked === "indeterminate" ? false : checked;
    setRememberMe(newValue);

    if (newValue) {
      localStorage.setItem("rememberMe", "true");
      const formData = {
        email: watch("email") || "",
        password: watch("password") || "",
      };
      localStorage.setItem("savedCredentials", JSON.stringify(formData));
    } else {
      localStorage.removeItem("rememberMe");
      localStorage.removeItem("savedCredentials");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-2"
    >
      <div>
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
      <div>
        <InputPassword placeholder="Password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={handleRememberMeChange}
          />
          <label htmlFor="remember" className="text-sm text-muted-foreground">
            Remember me
          </label>
        </div>
        <Link
          className="text-sm text-primary hover:underline hover:underline-offset-2"
          to="/forgot-password"
        >
          Forgot password?
        </Link>
      </div>
      <Button type="submit" className="mt-4" disabled={loginMutation.isPending}>
        {loginMutation.isPending ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
