import React from "react";
import NavBar from "../Website/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Website/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
