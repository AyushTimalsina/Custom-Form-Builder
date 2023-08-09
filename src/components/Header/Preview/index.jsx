import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
} from "@mui/material";
import useCustomForm from "../../../context/useCustomForm";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import TextFormFieldPreview from "./TextFormFieldPreview";
import NumberFormFieldPreview from "./NumberFormFieldPreview";
import SelectFormFieldPreview from "./SelectFormFieldPreview";
import UploadFormFieldPreview from "./UploadFormFieldPreview";
import DateFormFieldPreview from "./DateFormFieldPreview";
import RadioFormFieldPreview from "./RadioFormFieldPreview";

const index = () => {
  const [{ formJson }, {}] = useCustomForm();
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  let formData = null;
  try {
    formData = formJson ? JSON.parse(formJson) : null;
  } catch (error) {
    console.error("Error parsing formJson:", error);
  }

  return (
    <>
      <Button variant="text" color="inherit" onClick={handleDialogOpen}>
        <VisibilityTwoToneIcon />
        View
      </Button>
      <Dialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle>
          <Typography variant="h4" component="div">
            {formData?.title || "Untitled Form"}
            <Typography
              variant="subtitle1"
              color="textSecondary"
              component="div"
            >
              {formData?.description || "Description"}
            </Typography>
          </Typography>
        </DialogTitle>

        <Divider />
        {formData?.elements.length > 0 ? (
          <DialogContent>
            {formData?.elements?.map((element) => (
              <Box key={element.id}>
                {(() => {
                  switch (element?.type) {
                    case "text":
                      return <TextFormFieldPreview element={element} />;
                    case "number":
                      return <NumberFormFieldPreview element={element} />;
                    case "select":
                      return <SelectFormFieldPreview element={element} />;
                    case "file-upload":
                      return <UploadFormFieldPreview element={element} />;
                    case "date":
                      return <DateFormFieldPreview element={element} />;
                    case "radio":
                      return <RadioFormFieldPreview element={element} />;
                    default:
                      return null;
                  }
                })()}
              </Box>
            ))}
          </DialogContent>
        ) : (
          <DialogContent>
            <Typography variant="subtitle1" color="textSecondary">
              No preview available.... Drag and drop component to get started!
            </Typography>
          </DialogContent>
        )}
        <Divider />
        <DialogActions>
          {formData?.elements.length > 0 && (
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          )}
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default index;
