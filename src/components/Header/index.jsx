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
  Select,
  MenuItem,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  Input,
} from "@mui/material";
import { DateField } from "@mui/x-date-pickers/DateField";
import useCustomForm from "../../context/useCustomForm";
import { UploadFile } from "@mui/icons-material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
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
    formData = formJson ? JSON.parse(formJson) : null;
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
        <h1>Custom Form Builder</h1>
        <Button variant="text" color="inherit" onClick={handleDialogOpen}>
          <VisibilityTwoToneIcon />
          View
        </Button>
      </Box>

      <Dialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle>
          <Typography variant="h4">
            {formData?.title || "Untitled Form"}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {formData?.description || "Description"}
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
                      return (
                        <Box key={element.id} m={1}>
                          <Typography variant="h6">
                            <strong>{element.label}</strong>
                            {element.isRequired ? (
                              <span style={{ color: "red" }}> *</span>
                            ) : null}
                          </Typography>
                          <TextField fullWidth placeholder={element.label} />
                        </Box>
                      );
                    case "number":
                      const numberValidationRegex = /^[0-9]*$/;

                      const handleNumberChange = (event) => {
                        const inputValue = event.target.value;
                        if (numberValidationRegex.test(inputValue)) {
                        }
                      };

                      return (
                        <Box key={element.id} m={1}>
                          <Typography variant="h6">
                            <strong>{element.label}</strong>
                            {element.isRequired ? (
                              <span style={{ color: "red" }}> *</span>
                            ) : null}
                          </Typography>
                          <TextField
                            fullWidth
                            type="number"
                            placeholder={element.label}
                            onChange={handleNumberChange}
                            inputProps={{
                              maxLength: 10,
                            }}
                          />
                        </Box>
                      );

                    case "select":
                      return (
                        <Box key={element.id} m={1}>
                          <Typography variant="h6">
                            <strong>{element.label}</strong>
                            {element.isRequired ? (
                              <span style={{ color: "red" }}> *</span>
                            ) : null}
                          </Typography>
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
                          <Box key={element.id} m={1}>
                            <Typography variant="h6">
                              <strong>
                                Accepted .pdf, .doc, .docx, .xls, .xlsx
                              </strong>
                              {element.isRequired ? (
                                <span style={{ color: "red" }}> *</span>
                              ) : null}
                            </Typography>
                            <Input
                              type="file"
                              inputProps={{
                                accept: ".pdf,.doc,.docx,.xls,.xlsx",
                                onChange: (event) => {},
                              }}
                              style={{ display: "none" }}
                              id={`file-upload-${element.id}`}
                            />
                            <label htmlFor={`file-upload-${element.id}`}>
                              <Button
                                variant="contained"
                                color="inherit"
                                component="span"
                                startIcon={<UploadFile />}
                                style={{ textTransform: "none" }}
                              >
                                Upload File
                              </Button>
                            </label>
                          </Box>
                        </>
                      );
                    case "date":
                      return (
                        <>
                          <Box key={element.id} m={1}>
                            <Typography variant="h6">
                              <strong>{element.label}</strong>
                              {element.isRequired ? (
                                <span style={{ color: "red" }}> *</span>
                              ) : null}
                            </Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DemoContainer components={["DateField"]}>
                                <DateField />
                              </DemoContainer>
                            </LocalizationProvider>
                          </Box>
                        </>
                      );
                    case "radio":
                      return (
                        <Box key={element.id} m={1}>
                          <Typography variant="h6">
                            <strong>{element.label}</strong>
                            {element.isRequired ? (
                              <span style={{ color: "red" }}> *</span>
                            ) : null}
                          </Typography>
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
                })()}
              </Box>
            ))}

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
