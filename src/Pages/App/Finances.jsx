import { useEffect } from "react";
import ExpenseOverview from "./Layouts/ExpenseOverview";
import AllExpense from "./Layouts/AllExpense";
import { useNavigate } from "react-router-dom";

const Finances = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = localStorage.getItem("storedUser");
    if (!storedUser) {
      navigate("/onboarding");
    }
  }, []);
  return (
    <div className=" md:w-[80%] w-full  h-full rounded-lg flex flex-col justify-center gap-3 items-start p-1 relative">
      <ExpenseOverview />
      <AllExpense />
    </div>
  );
};

export default Finances;
