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
import { useContext, createContext, useState, useEffect } from "react";

const FinanceContext = createContext();

export const useTransactionsHook = () => useContext(FinanceContext);

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const storedTransactions = localStorage.getItem("transactions");
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  });
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState();
  const [transactionDesc, setTransactionDesc] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [totalIncome, setTotalIncome] = useState(null);
  const [totalExpenses, setTotalExpenses] = useState(null);
  const [expenseIcon, setExpenseIcon] = useState(null);

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
      },
    ]);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    setTransactionName("");
    setTransactionAmount();
    setTransactionDesc("");
  }
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const value = {
    transactions,
    setTransactions,
    categories,
    transactionAmount,
    setTransactionAmount,
    transactionName,
    setTransactionName,
    transactionDesc,
    setTransactionDesc,
    addTransaction,
    isExpense,
    setIsExpense,
    totalExpenses,
    totalIncome,
    expenseIcon,
    setExpenseIcon,
  };

  return (
    <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>
  );
};
