import { motion } from "framer-motion";
import { Button } from "@mui/material";
import ProfilePicUpload from "./ProfilePic";
import { useUser } from "../hooks/UserContext";
import { Check } from "lucide-react";

interface editUserProps {
  setEditingInfo: React.Dispatch<React.SetStateAction<boolean>>;
}
const EditUserDetails = ({ setEditingInfo }: editUserProps) => {
  const { user, setUser, handleUser } = useUser();

  return (
    <motion.form
      className="border border-gray-300 p-5 rounded-3xl bg-white fixed flex text-center flex-col justify-start items-start gap-5 h-fit w-full"
      onSubmit={(e) => {
        e.preventDefault();
        setEditingInfo(false);
      }}
      initial={{ y: -100, scaleY: 0.9 }}
      animate={{ y: -100, scaleY: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      <h1 className="text-xl ">Edit your details</h1>
      <span className="flex gap-2 items-center">
        <ProfilePicUpload />
        <p>Profile Pic</p>
      </span>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className="p-3  border rounded-3xl w-full focus:outline-none focus:bg-blue-50"
      />
      <span className="flex justify-between  items-center border p-1 rounded-3xl w-full border-gray-300 bg-white">
        <button
          className="bg-red-500 p-3 px-8 rounded-3xl cursor-pointer hover:bg-red-600 hover:shadow text-white"
          type="button"
        >
          Log Out
        </button>
        <Button
          sx={{
            borderRadius: 10,
            paddingX: "20px",
            paddingY: "10px",
            background: "green",
            color: "white",
          }}
          type="submit"
          variant="contained"
        >
          <Check />
        </Button>
      </span>
    </motion.form>
  );
};
export default EditUserDetails;
