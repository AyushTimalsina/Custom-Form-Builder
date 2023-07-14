import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  Checkbox,
  Button,
} from "@mui/material";

const EditFieldDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Field</DialogTitle>
      <Divider />
      <DialogContent>
        <TextField label="Field Name" fullWidth variant="outlined" />
        Is Required
        <Checkbox />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="error">
          Cancel
        </Button>
        <Button color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditFieldDialog;
