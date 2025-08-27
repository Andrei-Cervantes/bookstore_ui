import { Link as RouterLink } from "react-router-dom";
import { cn } from "@/shared/lib/utils";

const Link = ({
  children,
  to,
  className,
  ...props
}: {
  children: React.ReactNode;
  to: string;
  className?: string;
}) => {
  return (
    <RouterLink to={to} className={cn(className)} {...props}>
      {children}
    </RouterLink>
  );
};

export default Link;
