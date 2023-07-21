import React, { useState } from "react";
import useCustomForm from "../../../context/useCustomForm";
import useFormFunctions from "../../../hooks/useFormFunctions";
import { Box, Paper, InputLabel, Input, Typography } from "@mui/material";

const FormHeading = () => {
  const [{ title, description }, {}] = useCustomForm();
  const { handleTitleChange, handleDescriptionChange } = useFormFunctions();

  const [titleEditMode, setTitleEditMode] = useState(false);
  const [descriptionEditMode, setDescriptionEditMode] = useState(false);

  const handleTitleClick = () => {
    setTitleEditMode(true);
  };

  const handleDescriptionClick = () => {
    setDescriptionEditMode(true);
  };

  const handleTitleBlur = () => {
    setTitleEditMode(false);
  };

  const handleDescriptionBlur = () => {
    setDescriptionEditMode(false);
  };

  return (
    <Paper>
      <Box m={2}>
        {titleEditMode ? (
          <Input
            value={title}
            fullWidth
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
            autoFocus
          />
        ) : (
          <InputLabel
            onClick={handleTitleClick}
            style={{
              fontSize: "24px",
              display: "inline-block",
              cursor: "text",
              padding: "10px",
              borderBottom: "1px solid #aaa",
            }}
          >
            {title || "Set Your Title"}
          </InputLabel>
        )}
        <br />

        {descriptionEditMode ? (
          <Input
            value={description}
            fullWidth
            onChange={handleDescriptionChange}
            onBlur={handleDescriptionBlur}
            autoFocus
          />
        ) : (
          <InputLabel
            onClick={handleDescriptionClick}
            style={{
              fontSize: "18px",
              display: "inline-block",
              cursor: "text",
              padding: "10px",
              borderBottom: "1px solid #aaa",
            }}
          >
            {description || "Description"}
          </InputLabel>
        )}
      </Box>
    </Paper>
  );
};

export default FormHeading;
