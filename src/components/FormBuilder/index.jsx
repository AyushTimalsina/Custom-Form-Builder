import React, { useState } from "react";
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
            <FormHeading />
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
                  <FormField />
                  {provided.placeholder}
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
            <pre>{formJson}</pre>
          </div>
        )}
      </DragDropContext>
    </>
  );
};

export default FormBuilder;
