import { motion } from "framer-motion";
import homeSvg from "../../assets/undraw_savings_uwjn.svg";
import CustomBotton from "../../Components/CustomBotton";
const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row h-fit w-full gap-6 lg:gap-0 px-3 lg:px-10 py-6 text-gray-900">
      {/* Left Text Section */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-6 text-center"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="tracking-wider text-2xl md:text-5xl font-bold font-sans">
          Take Charge of Every Naira You Spend
        </h1>
        <motion.p
          className="md:text-xl text-black"
          initial={{ y: -12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Gain deeper insights into your spending habits and make smarter
          financial decisions. Your money journey starts with awareness and ends
          with control. 📊
        </motion.p>
        <CustomBotton text={`Get Started`} path={`/onboarding`} />
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="w-full lg:w-1/2 h-[80%] flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <img
          src={homeSvg}
          alt="Illustration of financial savings and tracking"
          className="max-w-full h-auto object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Home;
