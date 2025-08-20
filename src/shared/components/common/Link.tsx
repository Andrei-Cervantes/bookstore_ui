import { Link as RouterLink } from "react-router-dom";

const Link = ({
  children,
  to,
  ...props
}: {
  children: React.ReactNode;
  to: string;
}) => {
  return (
    <RouterLink to={to} {...props}>
      {children}
    </RouterLink>
  );
};

export default Link;
