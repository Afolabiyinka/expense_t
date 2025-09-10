import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Snackbar,
  Alert,
  Menu,
} from "@mui/material";
import { Wallet, X, Plus, MenuIcon, Icon } from "lucide-react";

import { useTransactionsHook } from "../Context/FinancesContext";
import { NumericFormat } from "react-number-format";

export default function AddTransactionModal() {
  const {
    transactionAmount,
    setTransactionAmount,
    setTransactionName,
    addTransaction,
    categories,
    transactionName,
    setExpenseIcon,
    expenseIcon,
  } = useTransactionsHook();
  const [open, setOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState("");

  //Snackbar related hooks
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCatChange = (e) => setSelectedCat(e.target.value);

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

    // Success case
    addTransaction();
    setSnackBarMessage("Transaction added successfully 🎉");
    setSnackBarOpen(true);

    // reset
    setSelectedCat("");
    setOpen(false);
  };

  return (
    <div className="">
      <span className="ml-2">
        <button
          onClick={handleClickOpen}
          className="bg-purple-600 text-white rounded-full h-15 absolute bottom-14 right-10 w-15 flex  justify-center items-center cursor-pointer"
        >
          <Plus />
        </button>
      </span>

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

      <div>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center flex-col gap-3 backdrop-blur-xs transition-all duration-300">
            <div className="bg-gray-100 rounded-3xl p-2">
              <DialogTitle
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontWeight: 500,
                  borderRadius: 3,
                }}
              >
                <Wallet size={22} /> Add a New Transaction
              </DialogTitle>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-5">
                <TextField
                  label="Title"
                  variant="outlined"
                  value={transactionName}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 4,
                    },
                  }}
                  onChange={(e) => setTransactionName(e.target.value)}
                  className="w-[17rem]"
                />
                {/* Amount */}
                <FormControl fullWidth>
                  <NumericFormat
                    prefix="₦"
                    customInput={TextField}
                    label="Amount"
                    thousandSeparator
                    allowNegative={false}
                    value={transactionAmount}
                    onValueChange={(e) => setTransactionAmount(e.floatValue)}
                    fullWidth
                    className="border-gray-300"
                  />
                </FormControl>

                {/* Category */}
                <FormControl fullWidth>
                  <InputLabel id="cat-label">Expense made for</InputLabel>
                  <Select
                    labelId="cat-label"
                    id="cat-select"
                    value={selectedCat}
                    label="Expense made for"
                    onChange={handleCatChange}
                    className="flex"
                    sx={{ borderRadius: 4 }}
                  >
                    {categories.map((category) => (
                      <MenuItem
                        sx={{
                          borderRadius: 2,
                          margin: 0.5,
                          padding: 1,
                        }}
                        className="bg-gray-700 rounded-xl flex gap-2 p-1"
                        key={category.id ?? category.title}
                        value={category.id ?? category.title}
                      >
                        <div>{category.icon}</div>
                        {category.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {/* Description */}

                <div className="flex justify-between mt-2 rounded-xl p-2">
                  <Button
                    onClick={handleClose}
                    startIcon={<X size={17} />}
                    sx={{ textTransform: "none", color: "red", padding: 1 }}
                  >
                    Cancel
                  </Button>
                  <Button
                    // onClick={handleClose}
                    endIcon={<Wallet />}
                    type="submit"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      textTransform: "none",
                      fontWeight: 500,
                      borderRadius: 10,
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Add Expense
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
