import { Outlet, Route, Routes } from "react-router-dom";
import Router from "./Routes/Routes";
import HomeRoute from "./Routes/AdRoutes";
import Footer from "./Pages/Footer";
export const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<HomeRoute />} />
        <Route path="/app/*" element={<Router />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
