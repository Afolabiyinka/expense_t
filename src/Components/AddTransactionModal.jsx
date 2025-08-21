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
} from "@mui/material";
import { Wallet, X, Plus } from "lucide-react";

import { useTransactionsHook } from "../Context/FinancesContext";

export default function AddTransactionModal() {
  const {
    transactionAmount,
    setTransactionAmount,
    setTransactionName,
    addTransaction,
    categories,
    transactionName,
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
      return () => {
        setSnackBarOpen(true);
        setSnackBarMessage("Add a transaction title");
      };
    }
    if (!transactionAmount.trim()) {
      return () => {
        setSnackBarOpen(true);
        setSnackBarMessage("Add an amount");
      };
    }
    addTransaction();
    setSelectedCat("");
    setOpen(false);
  };

  return (
    <>
      <span className="ml-2">
        <button
          onClick={handleClickOpen}
          className="bg-black text-white rounded-full h-15 absolute bottom-7 right-7 w-15 flex  justify-center items-center cursor-pointer"
        >
          <Plus />
        </button>
      </span>

      {/* Message  */}
      <Snackbar
        open={snackBarOpen}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" sx={{}}>
          {snackBarMessage}
        </Alert>
      </Snackbar>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
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
          />
          {/* Amount */}
          <FormControl fullWidth>
            <InputLabel shrink htmlFor="amount-input">
              Amount
            </InputLabel>
            <div className="flex items-center rounded-2xl px-3 py-2 border border-gray-300 mt-3">
              <span className="text-xl font-bold text-gray-700">₦</span>
              <input
                id="amount"
                type="number"
                value={transactionAmount}
                onChange={(e) => setTransactionAmount(e.target.value)}
                className="w-full p-2.5 ml-2 bg-transparent border-gray-200 outline-none font-semibold text-lg"
              />
            </div>
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
              sx={{ borderRadius: 4 }}
            >
              {categories.map((category) => (
                <MenuItem
                  sx={{
                    borderRadius: 2,
                    margin: 0.5,
                    padding: 1,
                  }}
                  className="bg-gray-700 rounded-xl"
                  key={category.id ?? category.title}
                  value={category.id ?? category.title}
                >
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
      </Dialog>
    </>
  );
}
