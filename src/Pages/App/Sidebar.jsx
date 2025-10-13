import { Link, useLocation, Outlet } from "react-router-dom";
import { useState } from "react";
import { X, Menu, Home, DollarSign, BarChart, Tags } from "lucide-react";
import { useUser } from "./user/hooks/UserContext";
import expenseTLogo from "../../assets/Icons and Logos/Gemini_Generated_Image_iojhbviojhbviojh.png";
import ProfilePicUpload from "./user/components/ProfilePic";
import EditUserDetails from "../App/user/components/EditDetails";
import { motion } from "framer-motion";

const Aside = () => {
  const ASIDEITEMS = [
    { name: "Home", icon: Home, path: "/app/finances" },
    { name: "Finances", icon: DollarSign, path: "/app/transactions" },
    { name: "Graphs", icon: BarChart, path: "/app/graph" },
    { name: "Categories", icon: Tags, path: "/app/categories" },
  ];

  const [asideOpen, setAsideOpen] = useState(false);
  const location = useLocation();
  const { user } = useUser();
  const [isEditingInfo, setEditingInfo] = useState(false);
  // const

  return (
    <>
      {/* ===== Overlay for Mobile ===== */}
      {asideOpen && (
        <div
          onClick={() => setAsideOpen(false)}
          className="backdrop-blur-lg fixed z-30 w-full h-full block lg:hidden"
        />
      )}
      {/* ===== Mobile Toggle Button ===== */}
      <button
        onClick={() => setAsideOpen(!asideOpen)}
        className="block lg:hidden fixed top-3 left-4 z-50 p-3 m-1 rounded-full shadow-lg backdrop-blur-3xl "
      >
        {asideOpen ? (
          <X size={30} className="stroke-[1.5px]" />
        ) : (
          <Menu size={30} className="stroke-[1.5px]" />
        )}
      </button>

      {/* ===== Sidebar ===== */}
      <motion.div
        initial={{ x: -50 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className={`
          fixed top-0 left-0 z-30 h-[99%] bg-red-700 w-[17rem] rounded-3xl m-1
          ${asideOpen ? "translate-x-0" : "-translate-x-full"}
          lg:relative lg:translate-x-0
          transition-transform duration-300 ease-in-out
          lg:w-[17rem] w-[20rem] bg-white border border-gray-300 p-2 lg:p-4
           flex flex-col items-start justify-center gap-9
          
          
        `}
      >
        {/* Expense T Logo */}
        <div>
          <a href="/">
            <img
              src={expenseTLogo}
              alt=""
              className="h-12 bg-white  rounded-full w-[13rem]  mr-2"
            />
          </a>
        </div>

        {/* User Info */}
        <div className="w-full">
          <motion.div
            className="flex items-center justify-start mb-1  border border-gray-400 rounded-full w-full py-2 p-3 shadow-sm cursor-pointer hover:bg-gray-200 transition-all duration-700s"
            onClick={() => setEditingInfo(true)}
            whileTap={{ scaleY: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="flex items-center gap-2">
              <ProfilePicUpload />
              <p className="font-bold">{user}</p>
            </span>
          </motion.div>

          {/* Editing user info component */}
          <div>
            {isEditingInfo && (
              <EditUserDetails setEditingInfo={setEditingInfo} />
            )}
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-7 w-full  border border-gray-400 rounded-3xl p-2 shadow-sm">
          {ASIDEITEMS.map(({ name, path, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-3 p-1 transition-all duration-1000  ${
                location.pathname === path
                  ? "shadow-xl rounded-[1.4rem] transition-all duration-1000 p-3 bg-gray-700 text-white stroke-[2px]"
                  : ""
              }`}
              onClick={() => setAsideOpen(false)}
            >
              <Icon
                size={24}
                className={`${
                  location.pathname === path ? "stroke-[2px]" : "stroke-[1px]"
                }`}
              />
              <p>{name}</p>
            </Link>
          ))}
        </nav>
      </motion.div>
    </>
  );
};

export default Aside;
