import { Box, Button } from "@mui/material";
import React from "react";
import FormBuilder from "./components/FormBuilder";

const App = () => {
  return (
    <>
      <Box align={"center"}>
        <Button>Welcome to Form Builder</Button>
      </Box>
      <FormBuilder />
    </>
  );
};

export default App;
