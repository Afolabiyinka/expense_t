import Aside from "../App/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex h-screen p-1 ">
      <Aside />
      <Outlet />
    </div>
  );
};

export default AppLayout;
