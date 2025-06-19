import { useContext, createContext, useState, useEffect } from "react";

const FinanceContext = createContext();

export const useTransactionsHook = () => useContext(FinanceContext);

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [isExpense, setIsExpense] = useState(true);

  const value = {
    transactions,
  };

  return (
    <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>
  );
};
