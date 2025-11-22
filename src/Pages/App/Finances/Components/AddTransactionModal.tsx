import React, { useState } from "react";
import {
  DialogTitle,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  SelectChangeEvent,
} from "@mui/material";
import { Wallet, Plus } from "lucide-react";

import { useTransactionsHook } from "../Hooks/FinancesContext";
import { NumericFormat } from "react-number-format";
import { motion, AnimatePresence } from "framer-motion";
import IconComponent from "../../../../components/Icon";
import useToastMessage from "../../../../libs/useToastMsg";

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
  } = useTransactionsHook();
  const { toastError, toastSuccess } = useToastMessage();

  const [open, setOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setTransactionName("");
    setTransactionAmount("");
    setSelectedCat("");
  };

  const handleCatChange = (e: SelectChangeEvent<string>) => {
    setSelectedCat(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!transactionName.trim()) {
      toastError("Pls Add a title");
      return;
    }
    if (!transactionAmount || transactionAmount === "0") {
      toastError("Add an amount");
      return;
    }
    if (!selectedCat) {
      toastError("Please select a category");
      return;
    }

    addTransaction();
    toastSuccess("Transaction added successfully 🎉");

    handleClose();
  };

  return (
    <div>
      <motion.button
        onClick={handleClickOpen}
        className="fixed bottom-8 right-6 md:right-10 z-50 bg-m-accent hover:bg-m-accent/90 text-white rounded-full h-14 w-14 md:h-16 md:w-16 flex justify-center items-center cursor-pointer shadow-lg transition-colors"
        whileHover={{ y: -10 }}
        whileTap={{ scale: 0.95 }}
      >
        <Plus size={28} />
      </motion.button>

      {/* Modal with AnimatePresence for smooth exit */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
          >
            <motion.div
              className="bg-white rounded-3xl p-1 w-full max-w-md md:max-w-lg"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
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
                  className="border p-4 rounded-full border-m-gray/70  focus:outline-none focus:ring-1 focus:ring-m-gray transition-all"
                  placeholder="Title"
                  value={transactionName}
                  onChange={(e) => setTransactionName(e.target.value)}
                />

                <NumericFormat
                  prefix="₦"
                  thousandSeparator
                  allowNegative={false}
                  value={transactionAmount}
                  onValueChange={(values) =>
                    setTransactionAmount(values.floatValue?.toString() || "")
                  }
                  placeholder="Amount"
                  className="border p-4 rounded-full border-m-gray/70  focus:outline-none focus:ring-1 focus:ring-m-gray transition-all"
                />

                <div>
                  <InputLabel id="cat-label" className="mb-2">
                    Expense made for
                  </InputLabel>
                  <Select
                    labelId="cat-label"
                    id="cat-select"
                    value={selectedCat || ""}
                    onChange={handleCatChange}
                    fullWidth
                    sx={{
                      borderRadius: "50px",
                    }}
                  >
                    {categories.map((category) => (
                      <MenuItem
                        key={category.id}
                        value={category.id}
                        className="flex gap-2 items-center"
                        sx={{
                          display: "flex",
                        }}
                      >
                        {category.icon && (
                          <span className="w-6 h-6">
                            <IconComponent icon={category.icon} />
                          </span>
                        )}
                        <span>{category.title}</span>
                      </MenuItem>
                    ))}
                  </Select>
                </div>

                <div className="flex justify-between mt-4 gap-3">
                  <button
                    type="button"
                    className="bg-red-600 hover:bg-red-700 text-white p-3 px-8 rounded-3xl transition-colors flex-1"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-700 hover:bg-green-800 text-white p-3 px-8 rounded-3xl transition-colors flex-1"
                  >
                    Add Expense
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
