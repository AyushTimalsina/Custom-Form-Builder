import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Grid, Button } from "@mui/material";
import useCustomForm from "../../context/useCustomForm";
import useFormFunctions from "../../hooks/useFormFunctions";
import FormHeading from "./FormComponent/FormHeading";
import ComponentList from "./ComponentList";
import FormField from "./FormComponent/FormField";

const FormBuilder = () => {
  const [{ formJson }, {}] = useCustomForm();
  const { handleDragEnd, handleFormSubmit } = useFormFunctions();

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Droppable droppableId="drop-zone">
              {(provided, snapshot) => (
                <div
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
                  <FormField />
                  {provided.placeholder}
                  {snapshot.isDraggingOver ? (
                    <div
                      style={{
                        textAlign: "center",
                        margin: "8px",
                        border: "2px dashed #aaa",
                        height: "50px",
                      }}
                    >
                      Drop here
                    </div>
                  ) : null}
                </div>
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
          <div style={{ marginTop: "16px" }}>
            <strong>Form JSON:</strong>
            <pre>{JSON.stringify(JSON.parse(formJson), null, 2)}</pre>
          </div>
        )}
      </DragDropContext>
    </>
  );
};

export default FormBuilder;
