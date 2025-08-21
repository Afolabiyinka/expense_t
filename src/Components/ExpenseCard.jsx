import { motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";

const ExpenseCard = ({ transaction }) => {
  return (
    <motion.div
      className="w-full  shadow rounded-lg px-4 py-3 flex items-center  gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="p-1.5  rounded-full bg-gray-400">
        {transaction?.status ? (
          <ArrowDown className="text-red-500" />
        ) : (
          <ArrowUp className="text-green-500" />
        )}
      </div>
      <div className="flex flex-col  w-full">
        <h2 className="font-semibold">{transaction?.name}</h2>
        <div className="flex items-center gap-1 text-sm">
          <span className="text-xl font-bold">₦</span>
          {transaction?.amount || "0"}
        </div>
      </div>
    </motion.div>
  );
};

export default ExpenseCard;
