import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Checkbox,
  Radio,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

const FormBuilder = () => {
  const [items, setItems] = useState([
    { id: "item-1", type: "text", label: "Text Field" },
    { id: "item-2", type: "checkbox", label: "Checkbox" },
    { id: "item-3", type: "radio", label: "Radio Button" },
    { id: "item-4", type: "select", label: "Select" },
  ]);
  const [formFields, setFormFields] = useState([]);
  const [formJson, setFormJson] = useState("");

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    setItems(reorderedItems);

    const draggedItem = items.find((item) => item.id === removed.id);
    if (!formFields.some((field) => field.id === draggedItem.id)) {
      setFormFields([...formFields, draggedItem]);
    }
  };

  const handleFormSubmit = () => {
    const json = JSON.stringify(formFields);
    console.log(json);
    setFormJson(json);
  };

  const handleRemoveField = (fieldId) => {
    const updatedFields = formFields.filter((field) => field.id !== fieldId);
    setFormFields(updatedFields);
  };

  const renderFormField = (field) => {
    switch (field.type) {
      case "text":
        return (
          <TextField
            key={field.id}
            label={field.label}
            fullWidth
            variant="outlined"
            style={{ marginBottom: "8px" }}
          />
        );
      case "checkbox":
        return (
          <Checkbox
            key={field.id}
            label={field.label}
            style={{ marginBottom: "8px" }}
          />
        );
      case "radio":
        return (
          <Radio
            key={field.id}
            label={field.label}
            style={{ marginBottom: "8px" }}
          />
        );
      case "select":
        return (
          <Select
            key={field.id}
            label={field.label}
            fullWidth
            variant="outlined"
            style={{ marginBottom: "8px" }}
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        );
      default:
        return null;
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <h3>Components</h3>
          <Droppable droppableId="form-builder">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <Card
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        sx={{ marginBottom: "8px" }}
                      >
                        <CardContent>{item.label}</CardContent>
                      </Card>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Grid>
        <Grid item xs={8}>
          <h3>Drop Here!!</h3>
          <Droppable droppableId="drop-zone">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  height: "400px",
                  border: "2px dashed #aaa",
                  borderRadius: "4px",
                  padding: "8px",
                }}
              >
                {formFields.map((field, index) => (
                  <div
                    key={field.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    {renderFormField(field)}
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleRemoveField(field.id)}
                      style={{ marginLeft: "8px" }}
                    >
                      x
                    </Button>
                  </div>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        onClick={handleFormSubmit}
        style={{ marginTop: "16px" }}
      >
        Submit
      </Button>
      {formJson && (
        <div style={{ marginTop: "16px" }}>
          <strong>Form JSON:</strong>
          <pre>{formJson}</pre>
        </div>
      )}
    </DragDropContext>
  );
};

export default FormBuilder;
