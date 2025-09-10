import HomeSidebar from "@/shared/components/common/HomeSidebar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/shared/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <SidebarProvider>
      <HomeSidebar />
      <SidebarInset>
        <div className="relative flex-1">
          <SidebarTrigger className="absolute top-2 left-2 z-10" />
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default PrivateLayout;
