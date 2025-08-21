import { Route, Routes } from "react-router-dom";
import Router from "./Routes/Routes";
import AdRoute from "./Routes/AdRoutes";
export const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<AdRoute />} />
        <Route path="/app/*" element={<Router />} />
      </Routes>
    </div>
  );
};

export default App;
