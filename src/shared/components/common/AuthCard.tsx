import { cn } from "@/shared/lib/utils";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const AuthCard = ({ children, title, description, className }: Props) => {
  return (
    <div
      className={cn(
        "bg-background rounded-lg p-8 shadow-md w-4/5 max-w-[500px] flex flex-col gap-2 justify-center items-center",
        className
      )}
    >
      <h1 className="text-2xl font-bold text-primary">{title}</h1>
      <p className="text-sm text-muted-foreground">{description}</p>
      {children}
    </div>
  );
};

export default AuthCard;
