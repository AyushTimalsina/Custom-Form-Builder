import useCustomForm from "../context/useCustomForm";

const useFormFunctions = () => {
  const [
    { isRequiredMap, title, items, formFields, description, version, label },
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
    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    setItems(reorderedItems);

    const draggedItem = items.find((item) => item.id === removed.id);
    if (!formFields.some((field) => field.id === draggedItem.id)) {
      setFormFields([...formFields, draggedItem]);
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
    const updatedFormFields = formFields.map((field) => ({
      ...field,
      label: label,
      isRequired: isRequiredMap[field.id],
    }));

    const updatedForm = {
      id: "form-1",
      title: title,
      description: description,
      name: "",
      version: "1.0.0",
      elements: updatedFormFields,
    };

    const json = JSON.stringify(updatedForm);
    console.log(json);
    setFormJson(json);
  };

  // To delete field
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
