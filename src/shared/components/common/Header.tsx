import { Button } from "@/shared/components/ui/button";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-background border-b border-border">
      <h1 className="text-2xl font-bold text-primary">Arborary</h1>
      <div className="flex items-center gap-4">
        <Button variant="outline">Login</Button>
        <Button variant="outline">Register</Button>
      </div>
    </div>
  );
};

export default Header;
