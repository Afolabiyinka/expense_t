import ExpenseCard from "../Finances/Components/ExpenseCard";
import { useTransactionsHook } from "../Finances/Hooks/FinancesContext";
import { Wallet } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const AllExpense = () => {
  const { transactions, searchQuery, setSearchQuery, searchResults } =
    useTransactionsHook();

  // Decide whether to show search results or all transactions
  const displayList =
    searchQuery.trim().length > 0 ? searchResults : transactions;

  const location = useLocation();
  return (
    <motion.div
      initial={{ y: 50 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="flex flex-col md:w-full w-full  h-full border  border-gray-400 gap-3 rounded-3xl p-3 overflow-y-scroll"
    >
      {transactions && transactions.length > 0 ? (
        <div
          className={`w-full flex flex-col justify-center items-center  ${
            location.pathname === "/app/transactions" ? "pt-[5rem] md:pt-0" : ""
          }`}
        >
          <input
            type="search"
            className=" outline-0 p-3 border border-gray-900 focus:border-none pl-4 rounded-3xl w-[90%] lg:w-[40%] mb-4 focus:ring-1 ring-blue-600"
            placeholder="Search.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="flex flex-col gap-3 w-full">
            {displayList.length > 0 ? (
              displayList.map((transaction) => (
                <ExpenseCard transaction={transaction} key={transaction.id} />
              ))
            ) : (
              <p className="text-center text-gray-500 italic">
                No transactions match your search
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 w-full rounded-3xl h-[100%] shadow transition-shadow duration-1000 ">
          <span className="flex flex-col justify-center items-center text-center h-full">
            <Wallet size={70} className="animate-bounce" />
            <p className="text-lg font-mono">
              Add a new expense to get started
            </p>
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default AllExpense;
