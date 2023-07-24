import {
  TextField,
  Select,
  MenuItem,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import useCustomForm from "../../context/useCustomForm";

const RenderFormField = ({ field }) => {
  const [{ label }, { setLabel }] = useCustomForm();
  switch (field.type) {
    case "text":
      return (
        <>
          <TextField
            key={field.id}
            fullWidth
            variant="filled"
            placeholder="Enter Your Question"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
          <TextField
            placeholder="short answer text"
            variant="standard"
            disabled
            style={{ marginBottom: "8px" }}
          />
        </>
      );

    case "select":
      return (
        <FormControl
          fullWidth
          variant="outlined"
          style={{ marginBottom: "8px" }}
        >
          <Select key={field.id} label={field.label}>
            <MenuItem value="option1">TextField</MenuItem>
            <MenuItem value="option2">Dropdown</MenuItem>
            <MenuItem value="option3">Number</MenuItem>
          </Select>
        </FormControl>
      );

    case "number":
      return (
        <TextField
          key={field.id}
          label={field.label}
          fullWidth
          variant="outlined"
          style={{ marginBottom: "8px" }}
        />
      );

    case "radio":
      return (
        <FormControl
          fullWidth
          component="fieldset"
          style={{ marginBottom: "8px" }}
        >
          <FormLabel component="legend">{field.label}</FormLabel>
          <RadioGroup row aria-label={field.label}>
            <FormControlLabel
              value="option1"
              control={<Radio />}
              label="TextField"
            />
            <FormControlLabel
              value="option2"
              control={<Radio />}
              label="Dropdown"
            />
            <FormControlLabel
              value="option3"
              control={<Radio />}
              label="Number"
            />
          </RadioGroup>
        </FormControl>
      );

    default:
      return null;
  }
};

export default RenderFormField;
