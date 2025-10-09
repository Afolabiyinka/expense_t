import { Button, IconButton, Tooltip } from "@mui/material";
import { useState, useEffect } from "react";
import { Trash } from "lucide-react";
import { useTransactionsHook } from "../../Context/FinancesContext";
import { motion } from "framer-motion";

function Categories() {
  const [isHovered, setIsHovered] = useState(false);
  const { categories, addCategory, deleteCategory, iconMapping } =
    useTransactionsHook();

  return (
    <div className="flex flex-col justify-center items-center md:w-[80%] w-full h-full pt-[45rem] md:pt-0">
      <h1 className="text-3xl font-mono mb-8 p-4 md:rounded-full rounded-3xl border border-gray-200">
        You can add, delete and create a category here!
      </h1>
      <div className="border border-gray-200 w-full rounded-3xl p-6 flex flex-col justify-center gap-6 cursor-pointer">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {categories.map(({ id, title, icon }) => {
            const Icon = iconMapping[icon];
            return (
              <motion.span
                initial={{ x: 20 }}
                animate={{ x: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                key={id}
                className="flex gap-8 border rounded-full p-4  items-center w-full justify-between  cursor-pointer "
              >
                <span className="flex items-center justify-center gap-2">
                  <Icon className="p-3 rounded-full h-13 w-13 flex  items-center bg-black text-white stroke-[1px]" />

                  <h1>{title}</h1>
                </span>

                <Tooltip title="Delete category" placement="top">
                  <span
                    onClick={() => deleteCategory(id)}
                    className="p-2 rounded-full h-10 w-10 flex justify-center items-center bg-gray-50 hover:bg-gray-300"
                  >
                    <Trash color="red" className="stroke-[1px]" />
                  </span>
                </Tooltip>
              </motion.span>
            );
          })}
        </div>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: "40px", padding: "10px" }}
          className=""
        >
          Add a new Category
        </Button>
      </div>
    </div>
  );
}

export default Categories;
