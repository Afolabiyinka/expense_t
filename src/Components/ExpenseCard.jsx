import { motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";

const ExpenseCard = ({ transaction }) => {
  return (
    <motion.div
      className="w-full border rounded-lg px-4 py-3 flex items-center justify-between shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="flex flex-col">
        <h2 className="text-base font-semibold">
          {transaction?.transactionName}
        </h2>
        <div className="flex items-center gap-1 text-sm">
          <span className="text-xl font-bold">₦</span>
          {transaction?.transactionAmount || "0"}
        </div>
      </div>
      <div className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800">
        {transaction?.isExpense ? (
          <ArrowDown className="text-red-500" />
        ) : (
          <ArrowUp className="text-green-500" />
        )}
      </div>
    </motion.div>
  );
};

export default ExpenseCard;
