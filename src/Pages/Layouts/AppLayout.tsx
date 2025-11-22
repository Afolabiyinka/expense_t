import { Toaster } from "sonner";
import Aside from "../App/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = () => {
  return (
    <div className="flex h-screen justify-start items-start p-1 ">
      <Aside />
      <div className="md:w-[83%] w-full h-full p-1">
        <Outlet />
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default AppLayout;
