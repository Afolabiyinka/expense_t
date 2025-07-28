import { useContext, createContext, useState } from "react";

const FinanceContext = createContext();

export const useTransactionsHook = () => useContext(FinanceContext);

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const storedTransactions = localStorage.getItem("transactions");
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  });
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
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

  function addTransaction(e) {
    e.preventDefault();
    setTransactions((currentTransactions) => [
      ...currentTransactions,
      {
        id: Date.now(),
        transactionName,
        transactionAmount,
        transactionDesc,
        isExpense,
      },
    ]);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    alert("Transaction Added");
    setTransactionName("");
    setTransactionAmount(0);
    setTransactionDesc("");
  }

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
