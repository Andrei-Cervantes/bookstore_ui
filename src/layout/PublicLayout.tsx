import Header from "@/components/common/Header";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
