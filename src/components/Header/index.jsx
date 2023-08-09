import React from "react";
import { Box } from "@mui/material";
import Preview from "./Preview";
const index = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={2}
        borderBottom="1px solid #ccc"
        mb={3}
      >
        <h1>Custom Form Builder</h1>
        <Preview />
      </Box>
    </>
  );
};

export default index;
