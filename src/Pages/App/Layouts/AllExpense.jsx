import ExpenseCard from "../../../Components/ExpenseCard";
import { useTransactionsHook } from "../../../Context/FinancesContext";
import { Wallet } from "lucide-react";

const AllExpense = () => {
  const { transactions } = useTransactionsHook();
  return (
    <div className="flex flex-col w-full h-full border border-gray-400 gap-3 rounded-3xl p-3 overflow-y-scroll">

      {transactions && transactions.length > 0 ? (
        <div className="w-full flex flex-col justify-center items-center">
          {/* <h1 className="text-xl  mb-6">Your Expenses</h1> */}

          <input type="search" className="border p-3 rounded-3xl  w-full lg:w-[40%] mb-4" placeholder="Search.." />


          <div className="flex flex-col gap-3 w-full">
            {transactions.map((transaction) => (
              <ExpenseCard transaction={transaction} key={transaction.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 w-full rounded-3xl h-[100%] shadow transition-shadow duration-1000 ">
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
