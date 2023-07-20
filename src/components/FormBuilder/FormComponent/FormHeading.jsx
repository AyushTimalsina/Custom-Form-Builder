import React from "react";
import useCustomForm from "../../../context/useCustomForm";
import useFormFunctions from "../../../hooks/useFormFunctions";
import { Box, Paper, TextField, Typography } from "@mui/material";

const FormHeading = () => {
  const [{ title, description }, {}] = useCustomForm();
  const { handleTitleChange, handleDescriptionChange } = useFormFunctions();
  return (
    <Paper>
      <Box align={"center"} m={1}>
        <Typography variant="h5">Form Heading</Typography>

        <TextField
          label="Set Your Title"
          value={title}
          fullWidth
          onChange={handleTitleChange}
          variant="outlined"
          style={{ marginBottom: "8px" }}
        />
        <br />

        <TextField
          label="Description"
          fullWidth
          value={description}
          onChange={handleDescriptionChange}
          variant="outlined"
          style={{ marginBottom: "8px" }}
        />
      </Box>
    </Paper>
  );
};

export default FormHeading;
