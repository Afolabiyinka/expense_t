import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ChevronDown, ChevronUp, Trash, Icon } from "lucide-react";
import {
  Tooltip,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { NumericFormat } from "react-number-format";
import { useState } from "react";
import { useTransactionsHook } from "../Hooks/FinancesContext";

const ExpenseCard = ({ transaction }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { selectedCat, iconMapping, deleteExpense } = useTransactionsHook();

  const category = transaction.category;

  const Icon = iconMapping[category.icon];

  function handleClick() {
    setIsHovered(true);
    if (isHovered) {
      setIsHovered(false);
    }
  }
  return (
    <div className="rounded-[2.7rem] border border-gray-200 p-1 shadow">
      <Accordion
        sx={{
          borderRadius: "1.2rem",
          boxShadow: "none",
          background: "inherit",
        }}
      >
        <AccordionSummary>
          <div className="flex items-center justify-between gap-4 relative w-full">
            <div className="flex gap-3 items-center ">
              <div className="p-3 rounded-full h-13 w-13 flex  items-center bg-black/85 text-white">
                <Icon className="stroke-[1px]" />
              </div>
              <div className="flex flex-col  w-full">
                <h2 className="font-semibold text-[1.1rem]">
                  {transaction?.name}
                </h2>
              </div>
            </div>

            <NumericFormat
              value={transaction?.amount || 0}
              thousandSeparator
              prefix="₦"
              displayType="text"
              className={`text-xl  ${
                transaction?.status ? "text-red-600" : "text-green-500"
              }`}
            />
            {/* <button
          className=" bottom-0 right-[10rem] md:right-[38rem] absolute hover:bg-gray-200 font-bold rounded-full active:rotate-180 cursor-pointer"
          onClick={handleClick}
        >
          {isHovered ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
        </button> */}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <AnimatePresence>
            <motion.div
              className="w-full justify-between  flex gap-8 items-center"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              <p>{category.title}</p>
              <Tooltip title="Delete expense" placement="top" color="secondary">
                <IconButton
                  onClick={() => deleteExpense(transaction.id)}
                  className="p-2 rounded-full h-12 w-12 flex justify-center items-center bg-gray-400  shadow"
                >
                  <Trash color="red" className="stroke-[2px]" />
                </IconButton>
              </Tooltip>
            </motion.div>
          </AnimatePresence>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ExpenseCard;
