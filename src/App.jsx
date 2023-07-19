import { Box, Button } from "@mui/material";
import React from "react";
import FormBuilder from "./components/FormBuilder";
import CustomFormProvider from "./context/provider";

const App = () => {
  return (
    <>
      <CustomFormProvider>
        <FormBuilder />
      </CustomFormProvider>
    </>
  );
};

export default App;
