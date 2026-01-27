import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import eTLogo from "../../assets/Icons and Logos/Gemini_Generated_Image_iojhbviojhbviojh.png";

interface NavItemsProps {
  onClick: () => void;
}

function NavItems({ onClick }: NavItemsProps) {
  const NAVLINKS = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contributors", path: "/contributors" },
  ];

  const location = useLocation();

  return (
    <nav>
      <ul className="mt-12 mr-12 flex flex-col gap-y-3 lg:mt-2 lg:flex-row lg:items-center justify-center lg:gap-x-6 z-50 ">
        {NAVLINKS.map((navlink) => (
          <li
            key={navlink.name}
            className="flex items-center gap-x-2 p-1 text-[0.93rem] font-medium transition-colors duration-1000  group"
          >
            <Link
              to={navlink.path}
              onClick={onClick}
              className={` hover:text-gray-500 transition-colors duration-1000 ${
                location.pathname === navlink.path
                  ? "underline underline-offset-4  text-wrap"
                  : ""
              }`}
            >
              {navlink.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useState(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 13);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.location]);

  return (
    <motion.div className="flex flex-col items-center justify-center relative">
      <motion.div
        transition={{ duration: 0.6 }}
        animate={{}}
        className={`${
          isScrolled
            ? "backdrop-blur-3xl w-full lg:w-fit fixed top-2  shadow translate-y-2.5 transition-all duration-750 ease-in-out"
            : "w-full lg:w-fit"
        } lg:rounded-full rounded-3xl mt-2
           shadow  z-50  flex justify-between lg:justify-center lg:gap-56 p-3 text-gray-900 w-full ${
             openNav ? "translate-y-0 " : "translate-y-0"
           }`}
      >
        <div>
          <a href="/">
            <img
              src={eTLogo}
              alt=""
              className="h-12 bg-white  rounded-full w-[13rem]  mr-2"
            />
          </a>
        </div>
        {/* Mobile Nav */}
        <AnimatePresence>
          {openNav && (
            <motion.div
              className="block lg:hidden"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <NavItems onClick={() => setOpenNav(false)} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Nav */}
        <div className="hidden lg:block">
          <NavItems onClick={() => setOpenNav(!openNav)} />
        </div>

        <span
          className="block lg:hidden ml-1 mt-1.5 transition-all fixed top-1 right-2 ease-in-out duration-1000 bg-inherit p-2 rounded-full"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <X
              size={30}
              className={` stroke-[1px] ${
                openNav ? "active:rotate-180 transition-all duration-1000" : ""
              }`}
            />
          ) : (
            <Menu
              size={30}
              className={`  rounded-md stroke-[1px] ${
                openNav ? "active:rotate-90 transition-all duration-1000" : ""
              }`}
            />
          )}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default NavBar;
