import { useContext, createContext, useState, useEffect } from "react";

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
        // category: selectedCat,
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
    searchQuery,
    setSearchQuery,
    searchResults,
  };

  return (
    <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>
  );
};
