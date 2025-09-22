import { motion } from "framer-motion";
import CustomBotton from "../../Components/CustomBotton";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center  w-full gap-6 lg:gap-0 px-3 py-[7rem] text-gray-900">
      {/* Left Text Section */}
      <motion.div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-6 text-center">
        <motion.h1
          className="tracking-wider text-3xl md:text-5xl font-bold font-sans"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Take Charge of Every Naira You Spend
        </motion.h1>
        <motion.p
          className="md:text-2xl text-gray-600 p-2"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Gain deeper insights into your spending habits and make smarter
          financial decisions. Your money journey starts with awareness and ends
          with control. 📊
        </motion.p>
        <motion.span
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CustomBotton text={`Get Started`} path={`/onboarding`} />
        </motion.span>
      </motion.div>
    </div>
  );
};

export default Home;
