import React from "react";
import FormBuilder from "./components/FormBuilder";
import CustomFormProvider from "./context/provider";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <CustomFormProvider>
        <Header />
        <FormBuilder />
      </CustomFormProvider>
    </>
  );
};

export default App;
