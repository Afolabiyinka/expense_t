import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  IconButton,
} from "@mui/material";
import { Wallet, PlusCircle, X, Type } from "lucide-react";

import { useTransactionsHook } from "../Context/FinancesContext";

export default function AddTransactionModal() {
  const {
    transactionAmount,
    setTransactionAmount,
    transactionName,
    setTransactionName,
    addTransaction,
    categories,
  } = useTransactionsHook();
  const [open, setOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState("");

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCatChange = (e) => setSelectedCat(e.target.value);

  return (
    <>
      <span className="fixed bottom-7 right-7">
        <IconButton
          variant="contained"
          onClick={handleClickOpen}
          color="primary"
          size="large"
          sx={{
            borderRadius: 3,
            height: "48px",
            backgroundColor: "#4b5563",
            color: "white",
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          <PlusCircle />
        </IconButton>
      </span>
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

        <form onSubmit={addTransaction} className="flex flex-col gap-5 p-5">
          <TextField
            label="Title"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 4,
              },
            }}
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
                className="w-full p-2.5 ml-2 bg-transparent outline-none font-semibold text-lg"
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
              sx={{ textTransform: "none", color: "red" }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleClose}
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
