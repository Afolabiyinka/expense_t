import AddTransactionModal from "../../Components/AddTransactionModal";
import MoneyCard from "../../Components/MoneyCard";

const ExpenseOverview = () => {
  return (
    <div className="mt-3 lg:mt-0 flex flex-col gap-3 border w-full p-6 lg:p-5 justify-center items-start rounded-xl shadow-md">
      <div className="flex flex-col gap-2 w-full ">
        <h1 className="text-2xl font-bold tracking-widest">Overview</h1>
        <span className="flex gap-3 p-2 justify-center md:justify-start items-center">
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
