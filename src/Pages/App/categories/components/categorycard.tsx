import React from "react";
import { motion } from "framer-motion";
import IconComponent from "../../../../components/Icon";
import { Trash } from "lucide-react";
import { Tooltip } from "@mui/material";

interface CategoryCardProps {
  category: any;
  onClick: () => void;
}

const Categorycard = ({ category, onClick }: CategoryCardProps) => {
  return (
    <motion.span
      initial={{ x: -20 }}
      animate={{ x: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      key={category.id}
      className="flex gap-8 border border-m-accent rounded-full p-3  items-center w-full justify-between  cursor-pointer "
    >
      <span className="flex items-center justify-center gap-2 h-full">
        <span className="bg-m-accent h-12 w-12 rounded-full text-white flex justify-center items-center">
          <IconComponent icon={category.icon} />
        </span>
        <h1>{category.title}</h1>
      </span>

      <Tooltip title="Delete category" placement="top">
        <span
          onClick={onClick}
          className="p-2 rounded-full h-10 w-10 flex justify-center items-center hover:bg-m-gray/10"
        >
          <Trash color="red" className="stroke-[1px]" />
        </span>
      </Tooltip>
    </motion.span>
  );
};

export default Categorycard;
