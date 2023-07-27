import { TextField } from "@mui/material";
import React from "react";

const NumberFormField = ({ label, handleLabelChange, field }) => {
  const handleInput = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    handleLabelChange({ target: { value: numericValue } });
  };

  return (
    <>
      <TextField
        key={field.id}
        fullWidth
        variant="filled"
        style={{ marginBottom: "8px" }}
        onChange={handleInput}
        inputMode="numeric"
        value={label}
      />
    </>
  );
};

export default NumberFormField;
