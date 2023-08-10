import useCustomForm from "../context/useCustomForm";

const useFormFunctions = () => {
  const [
    { isRequiredMap, title, items, formFields, description },
    {
      setTitle,
      setItems,
      setDescription,
      setFormFields,
      setFormJson,
      toggleIsRequired,
    },
  ] = useCustomForm();

  // Drag and drop functionality
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    if (result.source.droppableId === "drop-zone") {
      // Reorder items within the 'formFields' array
      const reorderedFormFields = Array.from(formFields);
      const [removed] = reorderedFormFields.splice(result.source.index, 1);
      reorderedFormFields.splice(result.destination.index, 0, removed);
      setFormFields(reorderedFormFields);
    } else if (result.source.droppableId === "component-list") {
      const draggedItem = items[result.source.index];

      // Duplicate the dragged item to allow multiple instances
      const newDraggedItem = {
        ...draggedItem,
        id: generateUniqueId(),
      };

      const updatedFormFields = Array.from(formFields);
      updatedFormFields.splice(result.destination.index, 0, newDraggedItem);
      setFormFields(updatedFormFields);
    }
  };

  // To update title and description of Form
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  // To update and submit the formfield
  const handleFormSubmit = () => {
    const updatedFormFields = formFields.map((field) => {
      const { type, choice, ...rest } = field;
      let updatedField = { ...rest };
      updatedField.label = field.label;
      updatedField.type = field.type;

      switch (type) {
        case "select":
          if (choice) {
            updatedField.choice = choice.map((option) => ({
              id: option.id,
              type: option.type,
              label: option.label,
            }));
          }
          break;

        case "radio":
          if (choice) {
            updatedField.choice = choice.map((option) => ({
              id: option.id,
              type: option.type,
              label: option.label,
            }));
          }
          break;

        default:
          break;
      }

      updatedField.isRequired = isRequiredMap[field.id];
      return updatedField;
    });

    const updatedForm = {
      id: "form-1",
      title: title,
      description: description,
      name: "",
      version: "1.0.0",
      elements: updatedFormFields,
    };
    const json = JSON.stringify(updatedForm);
    setFormJson(json);
  };

  // To delete  Whole field
  const handleRemoveField = (fieldId) => {
    const updatedFields = formFields.filter((field) => field.id !== fieldId);
    setFormFields(updatedFields);
  };
  // TO toggle switch  if the component is required or not
  const handleToggleIsRequired = (fieldId) => {
    toggleIsRequired(fieldId, !isRequiredMap[fieldId]);
  };

  // To Duplicate the component
  const handleDuplicateField = (fieldId) => {
    const fieldToDuplicate = formFields.find((field) => field.id === fieldId);
    if (fieldToDuplicate) {
      const duplicatedField = { ...fieldToDuplicate, id: generateUniqueId() };
      setFormFields([...formFields, duplicatedField]);
    }
  };
  //To Generate unique Id
  const generateUniqueId = () => {
    const id = self.crypto.randomUUID();
    return `item-${id}`;
  };
  return {
    handleTitleChange,
    handleDescriptionChange,
    handleDragEnd,
    handleFormSubmit,
    handleRemoveField,
    handleToggleIsRequired,
    handleDuplicateField,
    generateUniqueId,
  };
};

export default useFormFunctions;
