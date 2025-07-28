import React, { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { Menu, X, DollarSign } from "lucide-react";
import ModeToggle from "../Components/ModeToggle";

function NavItems({ onClick }) {
  const NAVLINKS = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contributors", path: "/contributors" },
  ];

  const location = useLocation();

  return (
    <nav>
      <ul className="mt-12 mr-12 flex flex-col gap-y-3 lg:mt-0 lg:flex-row lg:items-center justify-center lg:gap-x-6 z-50 ">
        {NAVLINKS.map((navlink) => (
          <li
            key={navlink.name}
            className="flex items-center gap-x-2 p-2 text-sm font-medium transition-colors duration-1000  group"
          >
            <Link
              to={navlink.path}
              onClick={onClick}
              className={` hover:text-gray-500 transition-colors duration-1000 ${
                location.pathname === navlink.path
                  ? "underline underline-offset-4 text-wrap"
                  : ""
              }`}
            >
              {navlink.name}
            </Link>
          </li>
        ))}
        {/* <ModeToggle /> */}
      </ul>
    </nav>
  );
}
const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div>
      <div
        className={`shadow-md rounded-3xl  m-1.5 flex justify-between lg:justify-center b lg:gap-56 px-3 py-4 transition-transform duration-1000  border-[1px] backdrop-blur-2xl ${
          openNav ? "translate-y-4" : "translate-y-0"
        }`}
      >
        <a
          href="/"
          className="flex gap-1 h-11 w-[11rem] rounded-xl justify-center items-center text-xl md:text-2xl  font-semibold tracking-wide"
        >
          <DollarSign />
          Expense T
        </a>
        {/* Mobile Nav */}
        {openNav && (
          <div className="block lg:hidden">
            <NavItems onClick={() => setOpenNav(false)} />
          </div>
        )}

        {/* Desktop Nav */}
        <div className="hidden lg:block">
          <NavItems />
        </div>

        <span
          className="block lg:hidden ml-1 mt-1.5"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <X size={30} /> : <Menu size={30} />}
        </span>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
