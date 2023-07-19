import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Card,
  CardContent,
  Grid,
  Button,
  Switch,
  Paper,
  TextField,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import useCustomForm from "../../context/useCustomForm";
import { renderFormField } from "./FormField";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
const FormBuilder = () => {
  const [
    { isRequiredMap, title, items, formFields, description, formJson },
    {
      setIsRequiredMap,
      setTitle,
      setItems,
      setDescription,
      setFormFields,
      setFormJson,
    },
  ] = useCustomForm();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
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
    const updatedFormFields = formFields.map((field) => ({
      ...field,
      isRequired: isRequiredMap[field.id],
    }));

    const updatedForm = {
      id: "form-1",
      title: title,
      description: description,
      name: "",
      elements: updatedFormFields,
    };

    const json = JSON.stringify(updatedForm);
    console.log(json);
    setFormJson(json);
  };
  const handleRemoveField = (fieldId) => {
    const updatedFields = formFields.filter((field) => field.id !== fieldId);
    setFormFields(updatedFields);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
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
                                <ContentCopyIcon />
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
                                onChange={(event) =>
                                  setIsRequiredMap((prevMap) => ({
                                    ...prevMap,
                                    [field.id]: event.target.checked,
                                  }))
                                }
                              />
                            </div>
                          </div>
                          {renderFormField(field)}
                        </div>
                      </Paper>
                    </div>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Grid>
          <Grid item xs={2}>
            <h3>Components</h3>
            <Droppable droppableId="form-builder">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
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
    </>
  );
};

export default FormBuilder;
