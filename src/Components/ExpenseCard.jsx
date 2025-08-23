import { motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";
import { NumericFormat } from "react-number-format";

const ExpenseCard = ({ transaction }) => {
  return (
    <motion.div
      className="w-full  shadow rounded-lg px-4 py-3 flex items-center justify-between gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="flex gap-2 items-center">
        <div className="p-1.5  rounded-full bg-gray-400">
          {transaction?.status ? (
            <ArrowDown className="text-red-500" />
          ) : (
            <ArrowUp className="text-green-500" />
          )}
        </div>
        <div className="flex flex-col  w-full">
          <h2 className="font-semibold">{transaction?.name}</h2>
        </div>
      </div>

      <NumericFormat
        value={transaction?.amount || 0}
        thousandSeparator
        prefix="₦"
        displayType="text"
        className={`text-xl  ${
          transaction?.status ? "text-red-600" : "text-green-500"
        }`}
      />
    </motion.div>
  );
};

export default ExpenseCard;
