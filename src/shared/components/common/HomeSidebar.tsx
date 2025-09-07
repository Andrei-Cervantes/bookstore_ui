import {
  Sidebar,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "@/shared/components/ui/sidebar";
import { Button } from "@/shared/components/ui/button";
import { Loader2Icon, LogOutIcon } from "lucide-react";
import useAuthService from "@/shared/services/authService";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useUserStore } from "@/shared/stores/userStore";
import { useTokenStore } from "@/shared/stores/tokenStore";

const HomeSidebar = () => {
  const { logout } = useAuthService();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { removeUser } = useUserStore();
  const { removeTokens } = useTokenStore();

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      removeUser();
      removeTokens();
      navigate("/login");
    },
    onError: () => {
      enqueueSnackbar("Logout failed", { variant: "error" });
    },
  });

  return (
    <Sidebar>
      <SidebarHeader>
        <h1>Home</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Books</SidebarGroupLabel>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <Button
            disabled={logoutMutation.isPending}
            onClick={() => logoutMutation.mutate()}
          >
            {logoutMutation.isPending ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              <LogOutIcon />
            )}
            <span>Logout</span>
          </Button>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
};

export default HomeSidebar;
