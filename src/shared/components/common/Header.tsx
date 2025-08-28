import { Button } from "@/shared/components/ui/button";
import { ModeToggle } from "../mode-toggle";
import Link from "./Link";
import useMobile from "@/shared/hooks/useMobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

const Header = () => {
  const isMobile = useMobile();

  return (
    <div className="flex justify-between items-center p-4 bg-background border-b border-border">
      <h1 className="text-2xl font-bold text-primary">Arborary</h1>
      <div className="flex items-center gap-4">
        <ModeToggle />
        {isMobile ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant="outline"
                size="icon"
                className="hover:cursor-pointer"
              >
                <MenuIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link className="w-full" to="/login">
                  Login
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link className="w-full" to="/register">
                  Register
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/register">Register</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
