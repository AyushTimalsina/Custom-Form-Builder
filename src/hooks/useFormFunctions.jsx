import useCustomForm from "../context/useCustomForm";

const useFormFunctions = () => {
  const [
    { isRequiredMap, title, items, formFields, description },
    { setTitle, setItems, setDescription, setFormFields, setFormJson },
  ] = useCustomForm();
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
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

  const handleFormSubmit = () => {
    const updatedFormFields = formFields.map((field) => ({
      ...field,
      isRequired: isRequiredMap[field.id],
    }));

    const updatedForm = {
      id: "form-1",
      title: title,
      description: description,
      name: "",
      elements: updatedFormFields,
    };

    const json = JSON.stringify(updatedForm);
    console.log(json);
    setFormJson(json);
  };
  const handleRemoveField = (fieldId) => {
    const updatedFields = formFields.filter((field) => field.id !== fieldId);
    setFormFields(updatedFields);
  };
  return {
    handleTitleChange,
    handleDescriptionChange,
    handleDragEnd,
    handleFormSubmit,
    handleRemoveField,
  };
};

export default useFormFunctions;
