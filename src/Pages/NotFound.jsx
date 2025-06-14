import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Flag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound({ path = "/" }) {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-md"
      >
        <Flag className="w-20 h-20 mx-auto text-red-500" />
        <Typography
          variant="h1"
          color="blue-gray"
          className="mt-6 text-3xl md:text-4xl font-bold leading-tight"
        >
          Oops! Page not found.
        </Typography>
        <Typography className="mt-4 mb-8 text-gray-600">
          Looks like you hit a broken route. Let’s get you back on track.
        </Typography>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md w-full md:w-auto"
          onClick={() => navigate(path)}
        >
          Go Back Home
        </Button>
      </motion.div>
    </div>
  );
}

export default NotFound;
