import React, { useState } from "react";
import useCustomForm from "../../../context/useCustomForm";
import useFormFunctions from "../../../hooks/useFormFunctions";
import RenderFormField from "../../RenderField";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { Button, Switch, Paper, Box } from "@mui/material";
const FormField = ({ field }) => {
  const [{ isRequiredMap }, {}] = useCustomForm();
  const { handleRemoveField, handleToggleIsRequired, handleDuplicateField } =
    useFormFunctions();

  return (
    <>
      <Box style={{ margin: 15 }}>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <DragIndicatorIcon />
          <Box style={{ flexGrow: 1, textAlign: "left" }}>
            <h3>Enter title for your {field.type} </h3>
          </Box>

          <Box style={{ textAlign: "right" }}>
            <Button
              variant="text"
              color="inherit"
              size="small"
              style={{ marginLeft: "8px" }}
            >
              <ContentCopyIcon onClick={() => handleDuplicateField(field.id)} />
            </Button>
            <Button
              variant="text"
              color="inherit"
              size="small"
              onClick={() => handleRemoveField(field.id)}
            >
              <DeleteIcon />
            </Button>
            Required
            <Switch
              checked={isRequiredMap[field.id] || false}
              onChange={() => handleToggleIsRequired(field.id)}
            />
          </Box>
        </Box>
        <RenderFormField field={field} choiceData={field.choice} />
      </Box>
    </>
  );
};

export default FormField;
