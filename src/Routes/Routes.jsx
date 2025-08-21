import { Routes, Route } from "react-router-dom";
import Finances from "../Pages/App/Finances";
import Aside from "../Pages/App/Sidebar";
import NotFound from "../Pages/App/NotFound";

const Router = () => {
  return (
    <div className="flex">
      <Routes>
        <Route element={<Aside />}>
          <Route index path="finances" element={<Finances />} />
          {/* <Route path="finances" element={<Finances />} /> */}
          <Route path="*" element={<NotFound path="/app/finances" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
