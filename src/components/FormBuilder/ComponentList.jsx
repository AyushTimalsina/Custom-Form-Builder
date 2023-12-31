import React from "react";
import useCustomForm from "../../context/useCustomForm";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Box, Card, CardContent } from "@mui/material";
const ComponentList = () => {
  const [{ items }, {}] = useCustomForm();
  return (
    <>
      <h3>Components</h3>
      <Droppable droppableId="component-list">
        {(provided) => (
          <Box {...provided.droppableProps} ref={provided.innerRef}>
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
          </Box>
        )}
      </Droppable>
    </>
  );
};

export default ComponentList;
