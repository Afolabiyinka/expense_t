import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Wallet, DollarSign } from "lucide-react";
import { useCategory } from "../Context/Categories";
import { Select } from "@mui/material";

export default function AddTransactionModal() {
  const [open, setOpen] = React.useState(false);
  const { addCategory, categories } = useCategory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add a new transaction
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          className="flex gap-2 items-center"
        >
          <Wallet />
          Add a new transaction
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="flex flex-col gap-3">
              <span className="flex flex-col gap-1">
                <label>Amount</label>
                <span className="border rounded-lg flex items-center p-2.5 ">
                  <DollarSign />
                  <input
                    type="number"
                    className="w-[17rem] outline-0 p-2.5 font-bold"
                  />
                </span>
              </span>
              <span className="flex flex-col gap-2">
                <label>Expense made for</label>
                <span className="">
                  <select className="p-2 rounded-xl cursor-pointer outline-0 border">
                    {categories.map((category) => (
                      <option className="p-1">{category.title}</option>
                    ))}
                  </select>
                </span>
              </span>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose} autoFocus>
            Add Expense
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
