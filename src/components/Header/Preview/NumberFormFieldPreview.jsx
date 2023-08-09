import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const NumberFormFieldPreview = ({ element }) => {
  const numberValidationRegex = /^[0-9]*$/;

  const handleNumberChange = (event) => {
    const inputValue = event.target.value;
    if (numberValidationRegex.test(inputValue)) {
    }
  };
  return (
    <Box key={element.id} m={1}>
      <Typography variant="h6">
        <strong>{element.label}</strong>
        {element.isRequired ? <span style={{ color: "red" }}> *</span> : null}
      </Typography>
      <TextField
        fullWidth
        type="number"
        placeholder={element.label}
        onChange={handleNumberChange}
        inputProps={{
          maxLength: 10,
        }}
      />
    </Box>
  );
};

export default NumberFormFieldPreview;
