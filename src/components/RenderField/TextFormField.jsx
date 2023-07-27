import { TextField } from "@mui/material";
import React from "react";

const TextFormField = ({ label, handleLabelChange, field }) => {
  return (
    <>
      <TextField
        key={field.id}
        fullWidth
        variant="filled"
        placeholder="Enter Your Question"
        value={label}
        onChange={handleLabelChange}
      />
      <TextField
        placeholder="short answer text"
        variant="standard"
        disabled
        style={{ marginBottom: "8px" }}
      />
    </>
  );
};

export default TextFormField;
