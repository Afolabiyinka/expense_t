import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import { FinanceProvider } from "./Context/FinancesContext.jsx";
import { CategoriesProvider } from "./Context/Categories.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FinanceProvider>
      <CategoriesProvider>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </CategoriesProvider>
    </FinanceProvider>
  </StrictMode>
);
