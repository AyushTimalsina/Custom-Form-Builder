import { TextField } from "@mui/material";
import React from "react";

const NumberFormField = ({ label, handleLabelChange, field }) => {
  return (
    <>
      <TextField
        key={field.id}
        fullWidth
        variant="filled"
        style={{ marginBottom: "8px" }}
        onChange={handleLabelChange}
        value={label}
      />
    </>
  );
};

export default NumberFormField;
