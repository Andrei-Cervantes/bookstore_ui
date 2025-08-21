import { Button } from "@/shared/components/ui/button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-primary">404 - Page Not Found</h1>
      <div className="flex gap-4">
        <Button variant="outline" asChild>
          <Link to="/">Go to Home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/login">Go to Login</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
