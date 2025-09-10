import {
  Sidebar,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarContent,
  SidebarFooter,
  SidebarGroupContent,
  SidebarMenuButton,
  SidebarMenu,
  SidebarMenuItem,
} from "@/shared/components/ui/sidebar";
import { Button } from "@/shared/components/ui/button";
import {
  BookOpenText,
  Loader2Icon,
  LogOutIcon,
  Search,
  UserCog,
  Bookmark,
  BookOpen,
} from "lucide-react";
import useAuthService from "@/shared/services/authService";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useUserStore } from "@/shared/stores/userStore";
import { useTokenStore } from "@/shared/stores/tokenStore";

const sidebarItems = [
  {
    title: "Books",
    url: "/books",
    icon: BookOpenText,
  },
  {
    title: "Bookmarks",
    url: "/bookmarks",
    icon: Bookmark,
  },
  {
    title: "Borrow Books",
    url: "/borrow-books",
    icon: BookOpen,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
];

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
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Arborary</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/profile">
                    <UserCog />
                    <span>Profile</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
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
