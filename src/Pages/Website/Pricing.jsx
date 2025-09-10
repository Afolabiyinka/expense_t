import React from "react";
import PricingCard from "../../Components/Pricing";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <motion.div
      className="h-fit flex flex-col justify-center items-center p-10"
      initial={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      whileInView="visible"
      onViewportEnter="visible"
      variants={{
        visible: { opacity: 1, y: 20 },
      }}
    >
      <PricingCard />
    </motion.div>
  );
};

export default Pricing;
