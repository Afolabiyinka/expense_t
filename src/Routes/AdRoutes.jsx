import { Routes, Route } from "react-router-dom";
import Pricing from "../Pages/Website/Pricing";
import Features from "../Pages/Website/Features";
import NavBar from "../Pages/Website/NavBar";
import NotFound from "../Pages/App/NotFound";
import OnBoarding from "../Pages/Website/OnBoarding";
import AdPages from "../Pages/Website/AdPages";
const HomeRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<NavBar />}>
          <Route index element={<AdPages />} />
          <Route path="features" element={<Features />} />
          <Route path="pricing" element={<Pricing />} />{" "}
          <Route path="onboarding" element={<OnBoarding />} />
          <Route path="*" element={<NotFound path="/" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default HomeRoute;
