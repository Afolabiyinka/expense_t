import { Link, useLocation, Outlet } from "react-router-dom";
import { useState } from "react";
import {
  X,
  Menu,
  Home,
  DollarSign,
  BarChart,
  Tags,
  Pen,
  Check,
} from "lucide-react";
import { useUser } from "../../Context/UserContext";
import expenseTLogo from "../../../public/android-chrome-192x192.png";
import ProfilePicUpload from "./ProfilePic";
const Aside = () => {
  const ASIDEITEMS = [
    { name: "Home", icon: Home, path: "/app/finances" },
    { name: "Finances", icon: DollarSign, path: "/app/transactions" },
    { name: "Graphs", icon: BarChart, path: "/app/graph" },
    { name: "Categories", icon: Tags, path: "/app/categories" },
  ];

  const [asideOpen, setAsideOpen] = useState(false);
  const location = useLocation();
  const { user, setUser, handleUser } = useUser();
  const [isEditingName, setEditingName] = useState(false);
  // const

  return (
    <div className="w-full flex lg:flex-row h-screen relative">
      {/* ===== Overlay for Mobile ===== */}
      {asideOpen && (
        <div
          onClick={() => setAsideOpen(false)}
          className="fixed inset-0 bg-opacity-50 z-30 lg:hidden"
        />
      )}

      {/* ===== Mobile Toggle Button ===== */}
      <button
        onClick={() => setAsideOpen(!asideOpen)}
        className="block lg:hidden fixed top-1 left-1 z-50 p-3 m-1 rounded-full shadow-lg backdrop-blur-3xl"
      >
        {asideOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* ===== Sidebar ===== */}
      <div
        className={`
          fixed top-0 left-0 z-40 h-full lg:h-full
          ${asideOpen ? "translate-x-0" : "-translate-x-full"}
          lg:relative lg:translate-x-0
          transition-transform duration-300 ease-in-out
          lg:w-[17rem] w-[20rem] backdrop-blur-2xl border border-gray-300 p-2 lg:p-4
          rounded-r-xl flex flex-col items-start justify-center gap-9
          
          
        `}
      >
        <Link
          to="/"
          className="flex gap-2  justify-start p-1 items-center text-xl md:text-2xl  font-semibold tracking-wide"
        >
          <img
            src={expenseTLogo}
            className="h-11 w-11
          "
          />
          Expense T
        </Link>

        <form
          className="flex items-center justify-center mb-1  border border-gray-400 rounded-lg p-1.5 py-2 shadow-sm"
          onSubmit={handleUser}
        >
          <span className="flex items-center gap-2">
            <ProfilePicUpload />

            <input
              type="text"
              value={user}
              placeholder="username"
              onChange={(e) => setUser(e.target.value)}
              className={`w-[12.5rem] lg:w-[8.5rem] p-1  rounded-lg ${
                isEditingName
                  ? "border bg-gray-200 border-gray-300 outline-0"
                  : "outline-none"
              }`}
            />
          </span>
          <button className="cursor-pointer active:animate-ping duration-300 p-1.5 rounded-xl">
            {isEditingName ? (
              <button type="submit">
                <Check size={21} onClick={() => setEditingName(false)} />
              </button>
            ) : (
              <Pen size={20} onClick={() => setEditingName(true)} />
            )}
          </button>
        </form>

        <nav className="flex flex-col gap-7 w-full  border border-gray-400 rounded-lg p-2 shadow-sm">
          {ASIDEITEMS.map(({ name, path, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-3 p-1 transition-all duration-200  ${
                location.pathname === path
                  ? "shadow-lg rounded-lg transition-all p-2.5"
                  : ""
              }`}
              onClick={() => setAsideOpen(false)}
            >
              <Icon size={24} className="text-gray-700" />
              <p>{name}</p>
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex-1 p-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Aside;
