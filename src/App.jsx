import React from "react";
import FormBuilder from "./components/FormBuilder";
import CustomFormProvider from "./context/provider";
import { Typography } from "@mui/material";

const App = () => {
  return (
    <>
      <CustomFormProvider>
        <Typography variant="h4" style={{ marginBottom: "16px" }}>
          Custom Form Builder
        </Typography>
        <FormBuilder />
      </CustomFormProvider>
    </>
  );
};

export default App;
