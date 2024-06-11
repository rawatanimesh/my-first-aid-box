import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function AddMedicine({ open, handleClose, handleCreateMedicine }) {
  const [medicine, setMedicine] = useState("");
  const [qty, setQty] = useState("");
  const [expiry, setExpiry] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};
    if (!medicine) tempErrors.medicine = "Medicine name is required";
    if (!qty) tempErrors.qty = "Quantity is required";
    if (!expiry) tempErrors.expiry = "Expiry date is required";
    return tempErrors;
  };

  const handleSubmit = () => {
    const tempErrors = validate();
    if (Object.keys(tempErrors).length === 0) {
      handleCreateMedicine({ medicine, qty, expiry, notes });
      setMedicine("");
      setQty("");
      setExpiry("");
      setNotes("");
      setErrors({});
    } else {
      setErrors(tempErrors);
    }
  };

  const handleDialogClose = () => {
    handleClose();
    setMedicine("");
    setQty("");
    setExpiry("");
    setNotes("");
    setErrors({});
  };

  return (
    <Dialog open={open} onClose={handleDialogClose}>
      <DialogTitle>
        Create a new medicine
        <IconButton
          aria-label="close"
          onClick={handleDialogClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Medicine Name *"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
            error={Boolean(errors.medicine)}
            helperText={errors.medicine}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Quantity *"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            error={Boolean(errors.qty)}
            helperText={errors.qty}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Expiry *"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            error={Boolean(errors.expiry)}
            helperText={errors.expiry}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Create Medicine
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddMedicine;
