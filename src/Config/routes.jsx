import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/Layouts/MainLayout";
import Home from "../Pages/Website/Home";
import Features from "../Pages/Website/Features";
import Pricing from "../Pages/Website/Pricing";
import NotFound from "../Pages/App/NotFound";
import OnBoarding from "../Pages/Website/OnBoarding";
import { UserProvider } from "../Context/UserContext";
import AppLayout from "../Pages/Layouts/AppLayout";
import { FinanceProvider } from "../Context/FinancesContext";
import Finances from "../Pages/App/Finances";
import AllExpense from "../Pages/App/Layouts/AllExpense";
import Categories from "../Pages/App/Categories";

const RoutesConfig = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: () => (
        <UserProvider>
          <MainLayout />
        </UserProvider>
      ),
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "features",
          Component: Features,
        },
        {
          path: "pricing",
          Component: Pricing,
        },
        {
          path: "*",
          Component: NotFound,
        },
        {
          path: "onboarding",
          Component: OnBoarding,
        },
      ],
    },
    {
      path: "/app",
      Component: () => (
        <UserProvider>
          <FinanceProvider>
            <AppLayout />
          </FinanceProvider>
        </UserProvider>
      ),
      children: [
        { index: true, Component: Finances },
        { path: "finances", Component: Finances },
        { path: "transactions", Component: AllExpense },
        { path: "categories", Component: Categories },
        {
          path: "*",
          Component: () => <NotFound path="/app/finances" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RoutesConfig;
