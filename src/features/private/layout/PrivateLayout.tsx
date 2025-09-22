import HomeSidebar from "@/shared/components/common/HomeSidebar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarRail,
} from "@/shared/components/ui/sidebar";
import useAuthService from "@/shared/services/authService";
import { useUserStore } from "@/shared/stores/userStore";
import { Outlet, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useTokenStore } from "@/shared/stores/tokenStore";

const PrivateLayout = () => {
  const { getCurrentUser } = useAuthService();
  const { setUser, removeUser } = useUserStore();
  const { enqueueSnackbar } = useSnackbar();
  const { removeTokens } = useTokenStore();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await getCurrentUser();
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching current user:", error);
        removeTokens();
        removeUser();
        enqueueSnackbar("Session expired. Please log in again.", {
          variant: "error",
        });
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []); // Empty dependency array - this should only run once on mount

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <SidebarProvider>
      <HomeSidebar />
      <SidebarInset>
        <div className="relative flex-1">
          <SidebarRail className="cursor-pointer" />
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default PrivateLayout;
