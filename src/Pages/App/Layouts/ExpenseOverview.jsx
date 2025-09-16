import AddTransactionModal from "../../../Components/AddTransactionModal";
import MoneyCard from "../../../Components/MoneyCard";
import { useUser } from "../../../Context/UserContext";
import { useTransactionsHook } from "../../../Context/FinancesContext";

const ExpenseOverview = () => {
  const { user } = useUser();
  const { totalExpenses, totalIncome } = useTransactionsHook();
  return (
    <div className="flex flex-col gap-3 border border-gray-400 w-full p-2 lg:p-3 justify-start items-start rounded-3xl shadow-md">
      <div className="flex flex-col gap-2 w-full">
        <span className="text-3xl flex gap-1.5 items-center max-sm:justify-center ml-10 rounded-lg p-1.5">
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
    </div>
  );
};

export default ExpenseOverview;
