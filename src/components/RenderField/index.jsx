import React from "react";
import useCustomForm from "../../context/useCustomForm";
import useFormFunctions from "../../hooks/useFormFunctions";
import TextFormField from "./TextFormField";
import SelectFormField from "./SelectFormField";
import NumberFormField from "./NumberFormField";
import RadioFormField from "./RadioFormField";
import DateFormField from "./DateFormField";
import UploadFormField from "./UploadFormField";

const RenderFormField = ({ field, choiceData }) => {
  const [{ formFields }, { setLabel, setFormFields }] = useCustomForm();
  const fieldData = formFields.find((f) => f.id === field.id);
  const { generateUniqueId } = useFormFunctions();

  if (!fieldData) return null;
  const { label, type } = fieldData;

  const handleLabelChange = (e) => {
    setLabel(field.id, e.target.value);
  };
  console.log(field.id);
  const handleChoiceLabelChange = (choiceId, value) => {
    const updatedChoiceData = choiceData.map((option) =>
      option.id === choiceId ? { ...option, label: value } : option
    );

    const updatedFieldData = {
      ...fieldData,
      choice: updatedChoiceData,
    };

    const updatedFormFields = formFields.map((f) =>
      f.id === fieldData.id ? updatedFieldData : f
    );

    setFormFields(updatedFormFields);
  };
  //For Choice Field
  const handleAddNewField = () => {
    const newChoice = {
      id: generateUniqueId(),
      label: "",
      type: "option",
    };

    const updatedFieldData = {
      ...fieldData,
      choice: [...fieldData.choice, newChoice],
    };

    const updatedFormFields = formFields.map((f) =>
      f.id === fieldData.id ? updatedFieldData : f
    );

    setFormFields(updatedFormFields);
  };
  const handleDeleteChoice = (choiceId) => {
    if (choiceData.length === 1) {
      return;
    }
    const updatedChoiceData = choiceData.filter(
      (option) => option.id !== choiceId
    );
    const fieldIndex = formFields.findIndex((f) => f.id === field.id);
    if (fieldIndex !== -1) {
      const updatedFormFields = [...formFields];
      updatedFormFields[fieldIndex] = {
        ...updatedFormFields[fieldIndex],
        choice: updatedChoiceData,
      };
      setFormFields(updatedFormFields);
    }
  };

  switch (type) {
    case "text":
      return (
        <TextFormField
          label={label}
          handleLabelChange={handleLabelChange}
          field={field}
        />
      );

    case "select":
      return (
        <SelectFormField
          label={label}
          handleLabelChange={handleLabelChange}
          choiceData={choiceData}
          handleChoiceLabelChange={handleChoiceLabelChange}
          handleAddNewField={handleAddNewField}
          handleDeleteChoice={handleDeleteChoice}
          field={field}
        />
      );

    case "number":
      return (
        <NumberFormField
          label={label}
          handleLabelChange={handleLabelChange}
          field={field}
        />
      );

    case "radio":
      return (
        <>
          <RadioFormField
            label={label}
            handleLabelChange={handleLabelChange}
            choiceData={choiceData}
            handleChoiceLabelChange={handleChoiceLabelChange}
            handleAddNewField={handleAddNewField}
            handleDeleteChoice={handleDeleteChoice}
            field={field}
          />
        </>
      );
    case "date":
      return (
        <>
          <DateFormField
            label={label}
            handleLabelChange={handleLabelChange}
            field={field}
          />
        </>
      );

    case "file-upload":
      return (
        <>
          <UploadFormField
            label={label}
            handleLabelChange={handleLabelChange}
            field={field}
          />
        </>
      );

    default:
      return null;
  }
};

export default RenderFormField;
