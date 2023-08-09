import React from "react";
import { Box, Select, MenuItem, Typography } from "@mui/material";
const SelectFormFieldPreview = ({ element }) => {
  return (
    <Box key={element.id} m={1}>
      <Typography variant="h6">
        <strong>{element.label}</strong>
        {element.isRequired ? <span style={{ color: "red" }}> *</span> : null}
      </Typography>
      <Select fullWidth label={element.label} placeholder="hello">
        {element?.choice?.map((option) => (
          <MenuItem key={option.id} value={option.label}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SelectFormFieldPreview;
