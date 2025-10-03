import { createContext, useContext, useState, useEffect } from "react";
import { useTransactionsHook } from "./FinancesContext";
import {
  Utensils,
  Bus,
  ShoppingCart,
  Smartphone,
  Home,
  Wallet,
  Shirt,
  HeartPulse,
  Film,
  MoreHorizontal,
} from "lucide-react";
const CategoriesContext = createContext();

export const useCategory = () => useContext(CategoriesContext);

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    {
      title: "Food & Drinks",
      icon: <Utensils size={20} />,
      id: crypto.randomUUID(),
    },
    { title: "Transport", icon: <Bus size={20} />, id: crypto.randomUUID() },
    {
      title: "Groceries",
      icon: <ShoppingCart size={20} />,
      id: crypto.randomUUID(),
    },
    {
      title: "Data & Airtime",
      icon: <Smartphone size={20} />,
      id: crypto.randomUUID(),
    },
    {
      title: "Bills (Light/Water)",
      icon: <Wallet size={20} />,
      id: crypto.randomUUID(),
    },
    { title: "Rent", icon: <Home size={20} />, id: crypto.randomUUID() },
    { title: "Shopping", icon: <Shirt size={20} />, id: crypto.randomUUID() },
    {
      title: "Healthcare",
      icon: <HeartPulse size={20} />,
      id: crypto.randomUUID(),
    },
    {
      title: "Entertainment",
      icon: <Film size={20} />,
      id: crypto.randomUUID(),
    },
    {
      title: "Miscellaneous",
      icon: <MoreHorizontal size={20} />,
      id: crypto.randomUUID(),
    },
  ]);
  const [selectedCat, setSelectedCat] = useState();

  useEffect(() => {
    // localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  function addCategory({ title }) {
    setCategories((currentCategories) => [
      ...currentCategories,
      {
        id: crypto.randomUUID(),
        title,
        // icon: emoji,
      },
    ]);
  }

  function deleteCategory(categoryId) {
    setCategories((prev) =>
      prev.filter((category) => category.id !== categoryId)
    );
  }

  const value = {
    addCategory,
    categories,
    selectedCat,
    setSelectedCat,
    deleteCategory,
  };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
