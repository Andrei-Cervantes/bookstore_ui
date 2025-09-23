import { useState } from "react";
import { Input } from "../ui/input";
import { Eye, EyeOff, Lock } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface Props extends React.ComponentProps<"input"> {
  withIcon?: boolean;
}

const InputPassword = ({ withIcon = true, ...props }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      {withIcon && (
        <Lock className="text-primary absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
      )}
      <Input
        type={showPassword ? "text" : "password"}
        {...props}
        className={cn(withIcon && "pl-8")}
      />
      <button
        tabIndex={-1}
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-300 hover:cursor-pointer hover:scale-105"
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
