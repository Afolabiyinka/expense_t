import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/Layouts/MainLayout";
import Features from "../Pages/Website/Features";
import Pricing from "../Pages/Website/Pricing";
import NotFound from "../Pages/App/NotFound";
import OnBoarding from "../Pages/Website/OnBoarding";
import { UserProvider } from "../Pages/App/user/hooks/UserContext";
import AppLayout from "../Pages/Layouts/AppLayout";
import { FinanceProvider } from "../Pages/App/Finances/Hooks/FinancesContext";
import Finances from "../Pages/App/Finances/Finances";
import AllExpense from "../Pages/App/Layouts/AllExpense";
import Categories from "../Pages/App/Categories/Categories";
import MainLayoutPages from "../Pages/Website/MainLayoutPages";
import Graphs from "../Pages/App/Graphs";

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
          Component: MainLayoutPages,
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
        { path: "graph", Component: Graphs },
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
