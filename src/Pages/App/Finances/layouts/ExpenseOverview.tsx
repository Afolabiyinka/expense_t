import AddTransactionModal from "../Components/AddTransactionModal";
import MoneyCard from "../Components/MoneyCard";
import { useUser } from "../../user/hooks/UserContext";
import { useTransactionsHook } from "../Hooks/FinancesContext";
import { motion } from "framer-motion";

const ExpenseOverview = () => {
  const { user } = useUser();
  const { totalExpenses, totalIncome } = useTransactionsHook();
  return (
    <motion.div
      initial={{ y: -50 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-3 border border-m-accent w-full p-2 lg:p-3 justify-start items-start rounded-3xl shadow-md"
    >
      <div className="flex flex-col gap-2 w-full">
        <span className="text-3xl flex gap-1.5 items-center max-sm:justify-center ml-10 rounded-lg p-1.5 ">
          <h1 className="font-semibold text-gray-900 tracking-widest">
            Hello,
          </h1>
          <p className="font-semibold tracking-wider">{user}</p>
        </span>
        <span className="flex flex-col md:flex-row gap-3 p-2 justify-start md:justify-start items-start">
          <MoneyCard income={true} amount={totalIncome} />
          <MoneyCard income={false} amount={totalExpenses} />
        </span>
      </div>
      <AddTransactionModal />
    </motion.div>
  );
};

export default ExpenseOverview;
