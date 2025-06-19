import AddTransactionModal from "../../Components/AddTransactionModal";
import MoneyCard from "../../Components/MoneyCard";

const ExpenseOverview = () => {
  return (
    <div className="mt-12 lg:mt-0 flex flex-col gap-4 border w-full p-4 lg:p-5 justify-center items-start rounded-xl shadow-md">
      <div className="flex flex-col gap-8 w-full">
        <h1 className="text-xl font-semibold ">Overview</h1>
        <span className="flex flex-col lg:flex-row gap-3  p-2">
          {" "}
          <MoneyCard income={true} />
          <MoneyCard income={false} />
        </span>
      </div>
      <AddTransactionModal />
    </div>
  );
};

export default ExpenseOverview;
