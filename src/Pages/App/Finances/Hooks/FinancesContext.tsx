import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

import * as LucideIcon from "lucide-react";
interface FinanceProviderProps {
  children: React.ReactNode;
}

export interface transactionsProps {
  id: number;
  name: string;
  status: boolean;
  amount: number | string;
  icon?: keyof typeof LucideIcon;
  category: string | undefined;
  desc?: string;
}

export interface categoriesProps {
  id: string;
  title: string;
  icon?: keyof typeof LucideIcon;
}

type Transactions = transactionsProps[];
type Categories = categoriesProps[];

interface FinanceContextType {
  transactions: Transactions;
  setTransactions: Dispatch<SetStateAction<Transactions>>;
  categories: Categories;
  setCategories: Dispatch<SetStateAction<Categories>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  totalIncome: number;
  totalExpenses: number;
  addTransaction: () => void;
  deleteExpense: (transactionId: number) => void;
  calculateExpenses: () => void;
  addCategory?: ({ title }: { title: string }) => void;
  deleteCategory: (categoryId: string) => void;
  searchTransaction: (searchQuery: string) => void;
  searchResults: Transactions;
  transactionName: string;
  setTransactionName: Dispatch<SetStateAction<string>>;
  transactionAmount: string | undefined;
  setTransactionAmount: Dispatch<SetStateAction<string | undefined>>;
  transactionDesc: string;
  setTransactionDesc: Dispatch<SetStateAction<string>>;
  isExpense: boolean;
  setIsExpense: Dispatch<SetStateAction<boolean>>;
  selectedCat: string | undefined;
  setSelectedCat: Dispatch<SetStateAction<string | undefined>>;
}

const FinanceContext = createContext<FinanceContextType | null>(null);

export const useTransactionsHook = () => {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error(
      "useTransactionsHook must be used within a FinanceProvider"
    );
  }
  return context;
};

export const FinanceProvider = ({ children }: FinanceProviderProps) => {
  const [transactions, setTransactions] = useState<transactionsProps[]>(() => {
    const storedTransactions = localStorage.getItem("transactions");
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  });

  const [transactionName, setTransactionName] = useState("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<transactionsProps[]>([]);
  const [transactionAmount, setTransactionAmount] = useState<string>();
  const [transactionDesc, setTransactionDesc] = useState<string>("");
  const [isExpense, setIsExpense] = useState<boolean>(true);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [totalExpenses, setTotalExpenses] = useState<number>(0);

  const [selectedCat, setSelectedCat] = useState<any>();

  const defaultCategories: Categories = [
    { title: "Food & Drinks", icon: "Utensils", id: crypto.randomUUID() },
    { title: "Study", icon: "GraduationCap", id: crypto.randomUUID() },
    { title: "Utilities", icon: "SprayCan", id: crypto.randomUUID() },
    { title: "Groceries", icon: "ShoppingCart", id: crypto.randomUUID() },
    { title: "Data & Airtime", icon: "Smartphone", id: crypto.randomUUID() },
    { title: "Bills (Light/Water)", icon: "Wallet", id: crypto.randomUUID() },
    { title: "Rent", icon: "Home", id: crypto.randomUUID() },
    { title: "Shopping", icon: "Shirt", id: crypto.randomUUID() },
    { title: "Healthcare", icon: "HeartPulse", id: crypto.randomUUID() },
    { title: "Entertainment", icon: "Film", id: crypto.randomUUID() },
    { title: "Miscellaneous", icon: "MoreHorizontal", id: crypto.randomUUID() },
  ];

  const [categories, setCategories] = useState<categoriesProps[]>(() => {
    const storedCategories = localStorage.getItem("categories");
    return storedCategories
      ? (JSON.parse(storedCategories) as categoriesProps[])
      : defaultCategories;
  });

  // Delete Category
  function deleteCategory(categoryId: string) {
    setCategories((prev) => {
      const updatedCategories = prev.filter(
        (category) => category.id !== categoryId
      );
      localStorage.setItem("categories", JSON.stringify(updatedCategories));
      return updatedCategories;
    });
  }

  // Add a new transaction
  function addTransaction() {
    const categoryObj = categories.find((cat) => cat.id === selectedCat);
    const newTransaction: transactionsProps = {
      id: Date.now(),
      name: transactionName,
      amount: transactionAmount || "0",
      desc: transactionDesc,
      status: isExpense,
      category: categoryObj?.title,
      icon: categoryObj?.icon,
    };

    setTransactions((current) => {
      const updated = [...current, newTransaction];
      localStorage.setItem("transactions", JSON.stringify(updated));
      return updated;
    });

    setTransactionName("");
    setTransactionAmount("");
    setTransactionDesc("");
    setSelectedCat(undefined);
  }

  // ✅ Delete Transaction
  function deleteExpense(transactionId: number) {
    setTransactions((prev) => {
      const updated = prev.filter(
        (transaction) => transaction.id !== transactionId
      );
      localStorage.setItem("transactions", JSON.stringify(updated));
      return updated;
    });
  }

  // ✅ Calculate total income and expenses
  function calculateExpenses() {
    let income = 0;
    let expenses = 0;

    transactions.forEach((transaction) => {
      const amount = Number(transaction.amount);
      if (transaction.status === true) {
        expenses += amount;
      } else {
        income += amount;
      }
    });

    setTotalIncome(income);
    setTotalExpenses(expenses);
  }

  useEffect(() => {
    calculateExpenses();
  }, [transactions]);

  // ✅ Search
  function searchTransaction(searchQuery: string) {
    const results = transactions.filter((transaction) =>
      transaction.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  }

  useEffect(() => {
    searchTransaction(searchQuery);
  }, [searchQuery, transactions]);

  const value: FinanceContextType = {
    transactions,
    setTransactions,
    categories,
    setCategories,
    searchQuery,
    setSearchQuery,
    totalIncome,
    totalExpenses,
    addTransaction,
    deleteExpense,
    calculateExpenses,
    // addCategory,
    deleteCategory,
    searchTransaction,
    searchResults,
    transactionName,
    setTransactionName,
    transactionAmount,
    setTransactionAmount,
    transactionDesc,
    setTransactionDesc,
    isExpense,
    setIsExpense,
    selectedCat,
    setSelectedCat,
  };

  return (
    <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>
  );
};
