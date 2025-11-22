import { useEffect } from "react";
import NavBar from "../Website/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Website/Footer";
import Lenis from "lenis";

const MainLayout = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
  return (
    <div className="flex justify-center items-center flex-col">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
