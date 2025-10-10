import React, { useState } from "react";
import {
  DialogTitle,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert,
  Input,
} from "@mui/material";
import { Wallet, X, Plus, MenuIcon, Icon } from "lucide-react";

import { useTransactionsHook } from "../Hooks/FinancesContext";
import { NumericFormat } from "react-number-format";
import { motion } from "framer-motion";

export default function AddTransactionModal() {
  const {
    transactionAmount,
    setTransactionAmount,
    setTransactionName,
    addTransaction,

    transactionName,
    categories,
    selectedCat,
    setSelectedCat,
    iconMapping,
  } = useTransactionsHook();

  const [open, setOpen] = useState(false);

  //Snackbar related hooks
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCatChange = (e) => {
    const selectedCategory = categories.find(
      (category) => category.id === e.target.value
    );
    setSelectedCat(selectedCategory);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!transactionName.trim()) {
      setSnackBarMessage("Add a transaction title");
      setSnackBarOpen(true);
      return;
    }
    if (!transactionAmount) {
      setSnackBarMessage("Add an amount");
      setSnackBarOpen(true);
      return;
    }
    if (!selectedCat) {
      setSnackBarMessage("Please select a category");
      setSnackBarOpen(true);
      return;
    }

    addTransaction();
    setSnackBarMessage("Transaction added successfully 🎉");
    setSnackBarOpen(true);

    setSelectedCat("");
    setOpen(false);
  };

  return (
    <div>
      <motion.span className="ml-2">
        <motion.button
          onClick={handleClickOpen}
          className="bg-purple-600 text-white rounded-full h-15 absolute bottom-8 z-50 right-10 w-15 flex  justify-center items-center cursor-pointer "
        >
          <Plus />
        </motion.button>
      </motion.span>

      {/* Message  */}
      <Snackbar
        open={snackBarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackBarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity={
            snackBarMessage.includes("successfully") ? "success" : "error"
          }
          onClose={() => setSnackBarOpen(false)}
        >
          {snackBarMessage}
        </Alert>
      </Snackbar>

      {open && (
        <motion.div
          // initial={{ y: 100 }}
          // animate={{ y: 0 }}
          className={`fixed inset-0 z-50 flex items-center  justify-center flex-col gap-3 backdrop-blur-xs transition-all duration-300 ${
            open ? "block" : "hidden"
          }`}
        >
          <motion.div
            className="bg-white rounded-3xl p-1 lg:w-[30%] w-full"
            initial={{ opacity: 0, y: 30, scaleY: 0.8 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            transition={{ duration: 0.2 }}
          >
            <DialogTitle
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: 500,
                borderRadius: 5,
              }}
            >
              <Wallet size={22} /> Add a New Transaction
            </DialogTitle>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-5">
              <input
                className="border p-5 rounded-3xl border-gray-400"
                label="Title"
                variant="outlined"
                placeholder="Title"
                value={transactionName}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 4,
                    padding: "1",
                  },
                }}
                onChange={(e) => setTransactionName(e.target.value)}
                // className="w-[17rem]"
              />
              {/* Amount */}
              <NumericFormat
                prefix="₦"
                // customInput={TextField}
                label="Amount"
                thousandSeparator
                allowNegative={false}
                value={transactionAmount}
                onValueChange={(e) => setTransactionAmount(e.floatValue)}
                fullWidth
                placeholder="Amount"
                className="p-5 rounded-3xl border border-gray-300"
              />

              {/* Category */}
              <InputLabel id="cat-label">Expense made for</InputLabel>
              <Select
                labelId="cat-label"
                id="cat-select"
                value={selectedCat}
                // label="Expense made for"
                onChange={handleCatChange}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontWeight: 500,
                  padding: "5px",
                  borderRadius: 5,
                }}
              >
                {categories.map((category) => {
                  const Icon = iconMapping[category.icon];

                  return (
                    <MenuItem
                      className="bg-gray-700 rounded-xl flex gap-2 p-2 w-full"
                      key={category.id}
                      value={category.id}
                    >
                      <Icon />
                      {category.title}
                    </MenuItem>
                  );
                })}
              </Select>

              {/* Description */}

              <div className="flex justify-between mt-2 rounded-3xl p-2.5  gap-3 border-gray-400">
                <button
                  className="bg-red-600 text-white p-3 px-8 rounded-xl cursor-pointer"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button className="bg-green-700 text-white p-3 px-8 rounded-xl cursor-pointer">
                  Add Expense
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
