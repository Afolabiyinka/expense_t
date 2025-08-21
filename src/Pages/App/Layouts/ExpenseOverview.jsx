import AddTransactionModal from "../../../Components/AddTransactionModal";
import MoneyCard from "../../../Components/MoneyCard";

const ExpenseOverview = () => {
  return (
    <div className="mt-13 lg:mt-0 flex flex-col gap-3 border border-gray-400 w-full p-6 lg:p-5 justify-start items-start rounded-xl shadow-md">
      <div className="flex flex-col gap-2 w-full">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-widest">
          Overview
        </h1>
        <span className="flex flex-col md:flex-row gap-3 p-2 justify-start md:justify-start items-start">
          <MoneyCard income={true} amount={1200} />
          <MoneyCard income={false} />
        </span>
      </div>
      <AddTransactionModal />
    </div>
  );
};

export default ExpenseOverview;
