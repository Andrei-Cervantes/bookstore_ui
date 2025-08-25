import { useState } from "react";
import { Input } from "../ui/input";
import { Eye, EyeOff, Lock } from "lucide-react";

const InputPassword = ({ ...props }: React.ComponentProps<"input">) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Lock className="text-primary absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
      <Input
        type={showPassword ? "text" : "password"}
        {...props}
        className="pl-8"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-300"
      >
        {showPassword ? (
          <EyeOff className="text-primary" />
        ) : (
          <Eye className="text-primary" />
        )}
      </button>
    </div>
  );
};

export default InputPassword;
