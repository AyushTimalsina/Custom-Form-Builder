import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Grid, Button, Box, Card, CardContent } from "@mui/material";
import useCustomForm from "../../context/useCustomForm";
import useFormFunctions from "../../hooks/useFormFunctions";
import FormHeading from "./FormComponent/FormHeading";
import ComponentList from "./ComponentList";
import FormField from "./FormComponent/FormField";

const FormBuilder = () => {
  const [{ formJson, formFields }, {}] = useCustomForm();
  const { handleDragEnd, handleFormSubmit } = useFormFunctions();

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Droppable droppableId="drop-zone">
              {(provided, snapshot) => (
                <Box
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    height: "auto",
                    minHeight: "400px",
                    border: snapshot.isDraggingOver
                      ? "2px dashed #aaa"
                      : "2px solid #aaa",
                    borderRadius: "4px",
                    padding: "8px",
                    overflowY: "auto",
                  }}
                >
                  <FormHeading />
                  {formFields.map((field, index) => (
                    <Draggable
                      key={field.id}
                      draggableId={field.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Card style={{ marginBottom: "8px" }}>
                            <CardContent>
                              <FormField field={field} />
                            </CardContent>
                          </Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  {snapshot.isDraggingOver ? (
                    <Box
                      style={{
                        textAlign: "center",
                        margin: "8px",
                        border: "2px dashed #aaa",
                        height: "50px",
                      }}
                    >
                      Drop here
                    </Box>
                  ) : null}
                </Box>
              )}
            </Droppable>
          </Grid>
          <Grid item xs={2}>
            <ComponentList />
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
          <Box style={{ marginTop: "16px" }}>
            <strong>Form JSON:</strong>
            <pre>{JSON.stringify(JSON.parse(formJson), null, 2)}</pre>
          </Box>
        )}
      </DragDropContext>
    </>
  );
};

export default FormBuilder;
