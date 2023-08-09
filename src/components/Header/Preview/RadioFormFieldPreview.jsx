import React from "react";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
const RadioFormFieldPreview = ({ element }) => {
  return (
    <Box key={element.id} m={1}>
      <Typography variant="h6">
        <strong>{element.label}</strong>
        {element.isRequired ? <span style={{ color: "red" }}> *</span> : null}
      </Typography>
      <RadioGroup name={element.id}>
        {element?.choice?.map((option) => (
          <FormControlLabel
            key={option.id}
            value={option.label}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </Box>
  );
};

export default RadioFormFieldPreview;
