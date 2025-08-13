import ExpenseCard from "../../Components/ExpenseCard";
import { useTransactionsHook } from "../../Context/FinancesContext";

const AllExpense = () => {
  const { transactions } = useTransactionsHook();
  return (
    <div className="flex flex-col h-[80%] w-full border gap-3 rounded-xl p-3 overflow-y-scroll">
      <h1 className="text-xl">Your Expenses</h1>
      <span className="flex flex-col gap-2">
        {transactions.map((transaction) => (
          <ExpenseCard transaction={transaction} key={transaction.id} />
        ))}
      </span>
    </div>
  );
};

export default AllExpense;
