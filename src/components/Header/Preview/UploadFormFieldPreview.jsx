import React from "react";
import { Box, Button, Input, Typography } from "@mui/material";
import { UploadFile } from "@mui/icons-material";
const UploadFormFieldPreview = ({ element }) => {
  return (
    <Box key={element.id} m={1}>
      <Typography variant="h6">
        <strong>Accepted .pdf, .doc, .docx, .xls, .xlsx</strong>
        {element.isRequired ? <span style={{ color: "red" }}> *</span> : null}
      </Typography>
      <Input
        type="file"
        inputProps={{
          accept: ".pdf,.doc,.docx,.xls,.xlsx",
          onChange: (event) => {},
        }}
        style={{ display: "none" }}
        id={`file-upload-${element.id}`}
      />
      <label htmlFor={`file-upload-${element.id}`}>
        <Button
          variant="contained"
          color="inherit"
          component="span"
          startIcon={<UploadFile />}
          style={{ textTransform: "none" }}
        >
          Upload File
        </Button>
      </label>
    </Box>
  );
};

export default UploadFormFieldPreview;
