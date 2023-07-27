import { DeleteOutline } from "@mui/icons-material";
import { TextField, Button, Box } from "@mui/material";
import React from "react";

const SelectFormField = ({
  label,
  handleLabelChange,
  choiceData,
  handleChoiceLabelChange,
  handleAddNewField,
  field,
  handleDeleteChoice,
}) => {
  const isLastOption = choiceData.length === 1;
  return (
    <>
      <TextField
        key={field?.id}
        fullWidth
        variant="filled"
        placeholder="Enter Your Question"
        value={label}
        onChange={handleLabelChange}
      />
      <ul>
        {choiceData.map((option) => (
          <Box key={option?.id}>
            <li key={option?.id}>
              <TextField
                placeholder="option 1"
                variant="standard"
                style={{ marginBottom: "8px" }}
                value={option.label}
                onChange={(e) =>
                  handleChoiceLabelChange(option?.id, e.target.value)
                }
              />
              {isLastOption ? null : (
                <Button
                  color="inherit"
                  onClick={() => handleDeleteChoice(option?.id)}
                >
                  <DeleteOutline />
                </Button>
              )}
            </li>
          </Box>
        ))}
        <Button variant="text" onClick={handleAddNewField}>
          Add new field
        </Button>
      </ul>
    </>
  );
};

export default SelectFormField;
