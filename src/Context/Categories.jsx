import { createContext, useContext, useState, useEffect } from "react";

const CategoriesContext = createContext();

export const useCategory = () => useContext(CategoriesContext);

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    { title: "Food", id: crypto.randomUUID() },
    { title: "Clothing and Fashion", id: crypto.randomUUID() },
  ]);
  const [emoji, setEmoji] = useState(null);

  function addCategory({ title }) {
    setCategories((currentCategories) => [
      ...currentCategories,
      {
        id: crypto.randomUUID(),
        title,
        icon: emoji,
      },
    ]);
  }

  const value = { addCategory, categories, setEmoji, emoji };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
