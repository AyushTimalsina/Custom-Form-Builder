import React, { useState } from "react";
import useCustomForm from "../../../context/useCustomForm";
import useFormFunctions from "../../../hooks/useFormFunctions";
import RenderFormField from "../RenderField";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { Button, Switch, Paper } from "@mui/material";

const FormField = () => {
  const [{ isRequiredMap, formFields }, {}] = useCustomForm();
  const { handleRemoveField, handleToggleIsRequired, handleDuplicateField } =
    useFormFunctions();

  return (
    <>
      {formFields.map((field) => (
        <div key={field.id}>
          <Paper elevation={3}>
            <div style={{ margin: 15 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <DragIndicatorIcon />
                <div style={{ flexGrow: 1, textAlign: "left" }}>
                  <h3> Choose your own component</h3>
                </div>

                <div style={{ textAlign: "right" }}>
                  <Button
                    variant="text"
                    color="inherit"
                    size="small"
                    style={{ marginLeft: "8px" }}
                  >
                    <ContentCopyIcon
                      onClick={() => handleDuplicateField(field.id)}
                    />
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
                </div>
              </div>
              <RenderFormField field={field} fieldId={field?.id} />
            </div>
          </Paper>
        </div>
      ))}
    </>
  );
};

export default FormField;
