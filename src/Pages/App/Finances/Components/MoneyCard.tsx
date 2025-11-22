import CountUp from "react-countup";
import { DollarSign } from "lucide-react";
import { IconButton } from "@mui/material";

interface MoneyCardProps {
  amount: number;
  income: number;
}

const MoneyCard = ({ amount, income }: MoneyCardProps) => {
  return (
    <div>
      <p className="ml-5">{income ? "Income" : "Spent"}</p>
      <div className="relative border border-m-gray shadow text-white rounded-full w-[15rem] md:p-3.5  p-2 flex bg-m-dark-accent">
        <IconButton color={income ? "success" : "error"} size="large">
          {income ? <p>+</p> : <p>-</p>}
        </IconButton>
        <span className="flex items-center justify-center  gap-1 text-lg ml-2">
          <span className="text-[1rem]">₦</span>
          <CountUp
            end={amount}
            duration={0.32}
            separator=","
            className="text-[1.7rem] tracking-widest"
          />
        </span>
      </div>
    </div>
  );
};

export default MoneyCard;
