import Header from "@/components/common/Header";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
