import CountUp from "react-countup";
import { ArrowUp, ArrowDown, DollarSign } from "lucide-react";
import { IconButton } from "@mui/material";

const MoneyCard = ({ amount, income }) => {
  return (
    <div>
      <p className="ml-5">{income ? "Income" : "Spent"}</p>
      <div className="relative border border-gray-200 shadow text-white rounded-full w-[15rem] md:p-3.5  p-2 flex bg-black/90">
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
        {/* <p className="fixed bottom-9 text-sm font-light right-3">NGN</p> */}
      </div>
    </div>
  );
};

export default MoneyCard;
