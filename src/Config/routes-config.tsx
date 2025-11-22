import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import React from "react";

const RoutesConfig: React.FC = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default RoutesConfig;
