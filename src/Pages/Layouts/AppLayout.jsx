import Aside from "../App/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex h-screen justify-start items-start p-1 ">
      <Aside />
      <div className="w-[83%] h-full p-1">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
