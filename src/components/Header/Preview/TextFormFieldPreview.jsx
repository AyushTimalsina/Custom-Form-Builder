import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const TextFormFieldPreview = ({ element }) => {
  return (
    <Box key={element.id} m={1}>
      <Typography variant="h6">
        <strong>{element.label}</strong>
        {element.isRequired ? <span style={{ color: "red" }}> *</span> : null}
      </Typography>
      <TextField fullWidth placeholder={element.label} />
    </Box>
  );
};

export default TextFormFieldPreview;
