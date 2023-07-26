import {
  TextField,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import useCustomForm from "../../context/useCustomForm";

const RenderFormField = ({ field }) => {
  const [{ formFields }, { setLabel }] = useCustomForm();
  const fieldData = formFields.find((f) => f.id === field.id);

  if (!fieldData) return null;
  const { label, type } = fieldData;
  console.log(label);

  const handleLabelChange = (e) => {
    setLabel(field.id, e.target.value);
  };

  switch (type) {
    case "text":
      return (
        <>
          <TextField
            key={field.id}
            fullWidth
            variant="filled"
            placeholder="Enter Your Question"
            value={label}
            onChange={handleLabelChange}
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
        <>
          <TextField
            key={field.id}
            fullWidth
            variant="filled"
            placeholder="Enter Your Question"
            value={label}
            onChange={handleLabelChange}
          />
          <li>
            <TextField
              placeholder=" option 1"
              variant="standard"
              style={{ marginBottom: "8px" }}
            />
            <Button variant="text">Add new field</Button>
          </li>
        </>
      );

    case "number":
      return (
        <TextField
          key={field.id}
          label={label}
          fullWidth
          variant="outlined"
          style={{ marginBottom: "8px" }}
          onChange={handleLabelChange}
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
          <RadioGroup
            row
            aria-label={field.label}
            value={label}
            onChange={handleLabelChange}
          >
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
