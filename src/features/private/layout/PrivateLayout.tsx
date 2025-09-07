import HomeSidebar from "@/shared/components/common/HomeSidebar";
import { SidebarProvider, SidebarInset } from "@/shared/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <SidebarProvider>
      <HomeSidebar />
      <SidebarInset>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default PrivateLayout;
