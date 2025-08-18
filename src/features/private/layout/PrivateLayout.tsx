import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div>
      <p>Private Layout</p>
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
