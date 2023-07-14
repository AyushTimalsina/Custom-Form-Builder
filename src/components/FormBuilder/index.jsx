import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Card, CardContent, Grid, Button } from "@mui/material";
import useCustomForm from "../../context/useCustomForm";
import EditFieldDialog from "../EditFieldDialog";
import { renderFormField } from "./FormField";

const FormBuilder = () => {
  const [
    { items, formFields, formJson, showEditModal },
    { setItems, setFormFields, setFormJson, setShowEditModal },
  ] = useCustomForm();

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
    setShowEditModal(false);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid container spacing={2}>
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
                      <Button
                        variant="outlined"
                        color="info"
                        size="small"
                        onClick={() => setShowEditModal(true)}
                        style={{ marginLeft: "8px" }}
                      >
                        edit
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
        <EditFieldDialog
          open={showEditModal}
          onClose={() => setShowEditModal(false)}
        />
      </DragDropContext>
    </>
  );
};

export default FormBuilder;
