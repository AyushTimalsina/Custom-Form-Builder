import React, { useState } from "react";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import useCustomForm from "../../context/useCustomForm";
import { DateRange, Error, UploadFile } from "@mui/icons-material";

const Index = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [{ formJson }, {}] = useCustomForm();

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  let formData = null;
  try {
    formData = JSON.parse(formJson);
  } catch (error) {
    console.error("Error parsing formJson:", error);
  }
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
        <Typography variant="h4">Custom Form Builder</Typography>
        <Button variant="text" color="inherit" onClick={handleDialogOpen}>
          <VisibilityTwoToneIcon />
          View
        </Button>
      </Box>

      <Dialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Typography variant="h5">
            {formData?.title || "Untitled Form"}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {formData?.description || "Description"}
          </Typography>
        </DialogTitle>
        <Divider />
        {formData?.elements.length > 0 ? (
          <DialogContent>
            <form>
              {formData?.elements?.map((element) => {
                switch (element?.type) {
                  case "text":
                    return (
                      <Box fullWidth key={element.id} variant="outlined">
                        <h3>
                          {element.label}
                          {element.isRequired ? (
                            <span style={{ color: "red" }}> * </span>
                          ) : null}
                        </h3>
                        <TextField fullWidth placeholder={element.label} />
                      </Box>
                    );
                  case "select":
                    return (
                      <Box>
                        <h3>
                          {element.label}
                          {element.isRequired ? (
                            <span style={{ color: "red" }}> * </span>
                          ) : null}
                        </h3>
                        <Select
                          fullWidth
                          label={element.label}
                          placeholder="hello"
                        >
                          {element?.choice?.map((option) => (
                            <MenuItem key={option.id} value={option.label}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </Box>
                    );
                  case "file-upload":
                    return (
                      <>
                        <Box>
                          <h3>
                            {element.label}
                            {element.isRequired ? (
                              <span style={{ color: "red" }}> * </span>
                            ) : null}
                          </h3>
                          <Button color="inherit">
                            <UploadFile />
                          </Button>
                        </Box>
                      </>
                    );
                  case "date":
                    return (
                      <>
                        <Box key={element.id}>
                          <h3>
                            {element.label}
                            {element.isRequired ? (
                              <span style={{ color: "red" }}> * </span>
                            ) : null}
                          </h3>
                          <DateRange />
                        </Box>
                      </>
                    );
                  case "radio":
                    return (
                      <Box fullWidth key={element.id}>
                        <h3>
                          {element.label}
                          {element.isRequired ? (
                            <span style={{ color: "red" }}> * </span>
                          ) : null}
                        </h3>
                        <RadioGroup name={element.id}>
                          {element?.choice?.map((option) => (
                            <FormControlLabel
                              key={option.id}
                              value={option.label}
                              control={<Radio />}
                              label={option.label}
                            />
                          ))}
                        </RadioGroup>
                      </Box>
                    );
                  default:
                    return null;
                }
              })}
            </form>
            {console.log({ formData })}
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

export default Index;
