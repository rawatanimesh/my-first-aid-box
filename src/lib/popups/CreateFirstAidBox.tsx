// src/CreateFirstAidBox.js
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function CreateFirstAidBox({ open, handleClose, handleCreateBox }) {
  const initialFormState = {
    boxName: "",
    boxLocation: "",
    boxNotes: "",
  };

  const [formValues, setFormValues] = useState(initialFormState);

  const [formErrors, setFormErrors] = useState({
    boxName: false,
    boxLocation: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [touchedFields, setTouchedFields] = useState({
    boxName: false,
    boxLocation: false,
  });

  useEffect(() => {
    const isFormValid =
      formValues.boxName.trim() !== "" && formValues.boxLocation.trim() !== "";
    setIsFormValid(isFormValid);
  }, [formValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    if (name === "boxName" || name === "boxLocation") {
      setFormErrors({ ...formErrors, [name]: value.trim() === "" });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields({ ...touchedFields, [name]: true });

    if (name === "boxName" || name === "boxLocation") {
      setFormErrors({ ...formErrors, [name]: formValues[name].trim() === "" });
    }
  };

  const handleSubmit = () => {
    if (isFormValid) {
      handleCreateBox(formValues);
      handleClose();
      resetForm();
    }
  };

  const resetForm = () => {
    setFormValues(initialFormState);
    setTouchedFields({ boxName: false, boxLocation: false });
  };

  useEffect(() => {
    if (!open) {
      resetForm();
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h5" component="h2">
          Create a new first aid box
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <form noValidate autoComplete="off">
          <TextField
            margin="normal"
            fullWidth
            label="Box Name *"
            name="boxName"
            placeholder="Enter a name"
            variant="outlined"
            value={formValues.boxName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touchedFields.boxName && formErrors.boxName}
            helperText={
              touchedFields.boxName && formErrors.boxName
                ? "Box Name is required"
                : " "
            }
            FormHelperTextProps={{ style: { height: "20px" } }} // Fixed height for helper text
          />
          <TextField
            margin="normal"
            fullWidth
            label="Box Location *"
            name="boxLocation"
            placeholder="Enter a location"
            variant="outlined"
            value={formValues.boxLocation}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touchedFields.boxLocation && formErrors.boxLocation}
            helperText={
              touchedFields.boxLocation && formErrors.boxLocation
                ? "Box Location is required"
                : " "
            }
            FormHelperTextProps={{ style: { height: "20px" } }} // Fixed height for helper text
          />
          <TextField
            margin="normal"
            fullWidth
            label="Box Notes"
            name="boxNotes"
            placeholder="Enter any notes"
            variant="outlined"
            multiline
            rows={4}
            value={formValues.boxNotes}
            onChange={handleChange}
            FormHelperTextProps={{ style: { height: "20px" } }} // Fixed height for helper text
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disabled={!isFormValid}
        >
          Create Box
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateFirstAidBox;
