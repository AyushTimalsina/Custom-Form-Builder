import { Box, Button } from "@mui/material";
import React from "react";
import FormBuilder from "./components/FormBuilder";
import CustomFormProvider from "./context/provider";

const App = () => {
  return (
    <>
      <CustomFormProvider>
        <Box align={"center"}>
          <Button>Welcome to Form Builder</Button>
        </Box>
        <FormBuilder />
      </CustomFormProvider>
    </>
  );
};

export default App;
