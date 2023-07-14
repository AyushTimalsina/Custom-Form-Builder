import { TextField, Select, MenuItem } from "@mui/material";
export const renderFormField = (field) => {
  switch (field.type) {
    case "text":
      return (
        <TextField
          key={field.id}
          label={field.label}
          fullWidth
          variant="outlined"
          style={{ marginBottom: "8px" }}
        />
      );

    case "select":
      return (
        <Select
          key={field.id}
          label={field.label}
          fullWidth
          variant="outlined"
          style={{ marginBottom: "8px" }}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      );
    default:
      return null;
  }
};
