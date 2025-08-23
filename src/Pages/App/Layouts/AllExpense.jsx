import ExpenseCard from "../../../Components/ExpenseCard";
import { useTransactionsHook } from "../../../Context/FinancesContext";
import { Wallet } from "lucide-react";

const AllExpense = () => {
  const { transactions } = useTransactionsHook();
  return (
    <div className="flex flex-col w-full h-full border border-gray-400 gap-3 rounded-xl p-3 overflow-y-scroll">
      {transactions && transactions.length > 0 ? (
        <div>
          <h1 className="text-xl  mb-6">Your Expenses</h1>
          <span className="flex flex-col gap-3">
            {transactions.map((transaction) => (
              <ExpenseCard transaction={transaction} key={transaction.id} />
            ))}
          </span>
        </div>
      ) : (
        <div className="bg-gray-50 w-full rounded-2xl h-[100%] shadow transition-shadow duration-1000 ">
          <span className="flex flex-col justify-center items-center text-center h-full">
            <Wallet size={70} className="animate-bounce" />
            <p className="text-lg font-mono">
              Add a new transaction to get started
            </p>
          </span>
        </div>
      )}
    </div>
  );
};

export default AllExpense;
