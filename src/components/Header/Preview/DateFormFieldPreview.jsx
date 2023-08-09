import React from "react";
import { Box, Typography } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from "@mui/x-date-pickers/DateField";

const DateFormFieldPreview = ({ element }) => {
  return (
    <Box key={element.id} m={1}>
      <Typography variant="h6">
        <strong>{element.label}</strong>
        {element.isRequired ? <span style={{ color: "red" }}> *</span> : null}
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateField"]}>
          <DateField />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
};

export default DateFormFieldPreview;
