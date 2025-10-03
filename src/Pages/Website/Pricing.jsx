import React from "react";
import PricingCard from "../../Components/Pricing";
import { motion } from "framer-motion";
import { PiggyBank } from "lucide-react";
import { SendDollars } from "iconoir-react";

const Pricing = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      amount: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="h-fit flex flex-col md:flex-row gap-10 justify-center items-center p-6 "
      initial="hidden"
      whileInView="visible"
      variants={itemVariants}
      onViewportEnter="visible"
    >
      <div>
        <PricingCard />
      </div>
    </motion.div>
  );
};

export default Pricing;
