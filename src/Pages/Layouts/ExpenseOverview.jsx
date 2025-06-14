import MoneyCard from "../../Components/MoneyCard";

const ExpenseOverview = () => {
  return (
    <div className="mt-12 lg:mt-0 flex flex-col gap-4 border w-full p-6 lg:p-5 justify-center items-start rounded-xl shadow-md">
      <h1 className="text-xl font-semibold ">Overview</h1>

      <div className="flex flex-col sm:flex-row gap-8 w-full">
        <MoneyCard income={true} />
        <MoneyCard income={false} />
      </div>
    </div>
  );
};

export default ExpenseOverview;
