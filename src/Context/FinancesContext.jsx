import { useContext, createContext, useState, useEffect } from "react";
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
  GraduationCap,
} from "lucide-react";
import { Tools } from "iconoir-react";
const FinanceContext = createContext();

export const useTransactionsHook = () => useContext(FinanceContext);

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const storedTransactions = localStorage.getItem("transactions");
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  });
  const [transactionName, setTransactionName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [transactionAmount, setTransactionAmount] = useState();
  const [transactionDesc, setTransactionDesc] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [totalIncome, setTotalIncome] = useState(null);
  const [totalExpenses, setTotalExpenses] = useState(null);
  const [expenseIcon, setExpenseIcon] = useState(null);

  const iconMapping = {
    Utensils: Utensils,
    Bus: Bus,
    ShoppingCart: ShoppingCart,
    Smartphone: Smartphone,
    Wallet: Wallet,
    Home: Home,
    Shirt: Shirt,
    HeartPulse: HeartPulse,
    Film: Film,
    MoreHorizontal: MoreHorizontal,
    GraduationCap: GraduationCap,
    Tools: Tools,
  };
  const defaultCategories = [
    { title: "Food & Drinks", icon: "Utensils", id: crypto.randomUUID() },
    { title: "Study", icon: "GraduationCap", id: crypto.randomUUID() },
    { title: "Utilities", icon: "Tools", id: crypto.randomUUID() },
    { title: "Groceries", icon: "ShoppingCart", id: crypto.randomUUID() },
    { title: "Data & Airtime", icon: "Smartphone", id: crypto.randomUUID() },
    { title: "Bills (Light/Water)", icon: "Wallet", id: crypto.randomUUID() },
    { title: "Rent", icon: "Home", id: crypto.randomUUID() },
    { title: "Shopping", icon: "Shirt", id: crypto.randomUUID() },
    { title: "Healthcare", icon: "HeartPulse", id: crypto.randomUUID() },
    { title: "Entertainment", icon: "Film", id: crypto.randomUUID() },
    { title: "Miscellaneous", icon: "MoreHorizontal", id: crypto.randomUUID() },
  ];

  const [categories, setCategories] = useState(() => {
    const storedCategories = localStorage.getItem("categories");
    return storedCategories ? JSON.parse(storedCategories) : defaultCategories;
  });
  const [selectedCat, setSelectedCat] = useState();

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
    setCategories((prev) => {
      const updatedCategories = prev.filter(
        (category) => category.id !== categoryId
      );
      localStorage.setItem("categories", JSON.stringify(updatedCategories));
      return updatedCategories;
    });
  }

  function calculateExpenses() {
    let income = 0;
    let Expenses = 0;

    transactions.forEach((transaction) => {
      if (transaction.status === true) {
        Expenses += Number(transaction.amount);
        setTotalExpenses(Expenses);
      } else {
        income += Number(transaction.amount);
        setTotalIncome(income);
      }
    });
  }

  useEffect(() => {
    calculateExpenses();
  }, [transactions]);
  useEffect(() => {
    searchTransaction(searchQuery);
  }, [searchQuery]);

  function searchTransaction(searchQuery) {
    const results = transactions.filter((transaction) =>
      transaction.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  }

  function addTransaction() {
    setTransactions((currentTransactions) => [
      ...currentTransactions,
      {
        id: Date.now(),
        name: transactionName,
        amount: transactionAmount,
        desc: transactionDesc,
        status: isExpense,
        icon: expenseIcon,
        category: selectedCat,
      },
    ]);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    setTransactionName("");
    setTransactionAmount();
    setTransactionDesc("");
  }
  function deleteExpense(transactionId) {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== transactionId)
    );
    return;
  }
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const value = {
    transactions,
    setTransactions,
    transactionAmount,
    setTransactionAmount,
    transactionName,
    setTransactionName,
    transactionDesc,
    setTransactionDesc,
    addTransaction,
    deleteExpense,
    isExpense,
    setIsExpense,
    totalExpenses,
    totalIncome,
    expenseIcon,
    setExpenseIcon,
    searchQuery,
    setSearchQuery,
    searchResults,
    addCategory,
    categories,
    selectedCat,
    setSelectedCat,
    deleteCategory,
    iconMapping,
  };

  return (
    <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>
  );
};
