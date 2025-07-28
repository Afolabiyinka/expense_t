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
import ModeToggle from "../Components/ModeToggle";
import { useUser } from "../Context/UserContext";

const Aside = () => {
  const ASIDEITEMS = [
    { name: "Home", icon: Home, path: "/app/finances" },
    { name: "Finances", icon: DollarSign, path: "/app/transactions" },
    { name: "Graphs", icon: BarChart, path: "/app/graph" },
  ];

  const [asideOpen, setAsideOpen] = useState(false);
  const location = useLocation();
  const { user, setUser, handleUser } = useUser();
  const [isEditingName, setEditingName] = useState(false);

  return (
    <div className="w-full flex lg:flex-row h-[100vh] relative overflow-hidden">
      {/* ===== Overlay for Mobile ===== */}
      {asideOpen && (
        <div
          onClick={() => setAsideOpen(false)}
          className="fixed inset-0 bg-opacity-50 z-30 md:hidden"
        />
      )}

      {/* ===== Mobile Toggle Button ===== */}
      <button
        onClick={() => setAsideOpen(!asideOpen)}
        className="block md:hidden fixed top-1 left-1 z-50 p-3 m-1 rounded-full shadow-lg backdrop-blur-3xl"
      >
        {asideOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* ===== Sidebar ===== */}
      <div
        className={`
          fixed top-0 left-0 z-40 h-full
          ${asideOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0
          transition-transform duration-300 ease-in-out
          w-[17rem] backdrop-blur-lg border border-gray-800 p-6
          rounded-r-xl flex flex-col items-start justify-center gap-9
          
        `}
      >
        <Link
          to="/"
          className="flex gap-2  h-11 w-[13rem] rounded-lg justify-start p-1 items-center text-xl md:text-2xl  font-semibold tracking-wide"
        >
          <DollarSign />
          Expense T
        </Link>

        <form
          className="flex items-center justify-center mb-1  rounded-lg p-2"
          onSubmit={handleUser}
        >
          <span className="flex items-center gap-2">
            <p className="h-11 w-11 rounded-full text-2xl flex items-center justify-center font-serif bg-gradient-to-br  from-fuchsia-600 to-blue-500 text-white">
              {user?.charAt(0).toUpperCase()}
            </p>

            <input
              type="text"
              value={user}
              placeholder="username"
              onChange={(e) => setUser(e.target.value)}
              className={`w-[9rem] p-2  rounded-xl ${
                isEditingName ? "border bg-gray-400" : "outline-none"
              }`}
            />
          </span>
          <button className="cursor-pointer active:bg-gray-500 p-2 rounded-xl">
            {isEditingName ? (
              <button type="submit">
                <Check size={20} onClick={() => setEditingName(false)} />
              </button>
            ) : (
              <Pen size={20} onClick={() => setEditingName(true)} />
            )}
          </button>
        </form>

        <nav className="flex flex-col gap-4 w-full">
          {ASIDEITEMS.map(({ name, path, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-3 p-2 transition-all duration-200  ${
                location.pathname === path
                  ? "bg-gray-400 p-2 rounded-lg transition-all "
                  : ""
              }`}
              onClick={() => setAsideOpen(false)}
            >
              <Icon size={24} />
              <p>{name}</p>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <label className="">Change Theme</label>
        </div>
      </div>

      <div className="flex-1 p-2 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Aside;
