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
  const [categories, setCategories] = useState([
    { title: "Food", id: crypto.randomUUID() },
    { title: "Entertainment", id: crypto.randomUUID() },
    { title: "Clothing", id: crypto.randomUUID() },
    { title: "Education", id: crypto.randomUUID() },
    { title: "Healthcare", id: crypto.randomUUID() },
    { title: "Savings", id: crypto.randomUUID() },
  ]);

  function addTransaction() {
    // e.preventDefault();
    setTransactions((currentTransactions) => [
      ...currentTransactions,
      {
        id: Date.now(),
        name: transactionName,
        amount: transactionAmount,
        desc: transactionDesc,
        status: isExpense,
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
  };

  return (
    <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>
  );
};
