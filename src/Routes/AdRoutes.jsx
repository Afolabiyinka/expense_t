import { Routes, Route } from "react-router-dom";
import Pricing from "../Pages/Pricing";
import Home from "../Pages/Home";
import Features from "../Pages/Features";
import NavBar from "../Pages/NavBar";
import Footer from "../Pages/Footer";
import NotFound from "../Pages/NotFound";
import OnBoarding from "../Pages/OnBoarding";
const HomeRoute = () => {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<Pricing />} />{" "}
        <Route path="onboarding" element={<OnBoarding />} />
        <Route path="*" element={<NotFound path="/" />} />
      </Route>
    </Routes>
  );
};

export default HomeRoute;
