import { useState } from "react";

const useStatesandActions = () => {
  const [items, setItems] = useState([
    { id: "item-1", type: "text", label: "Text Field" },
    { id: "item-2", type: "select", label: "Select" },
  ]);
  const [formFields, setFormFields] = useState([]);
  const [formJson, setFormJson] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);

  const state = {
    items,
    formFields,
    formJson,
    showEditModal,
  };

  const actions = {
    setItems,
    setFormFields,
    setFormJson,
    setShowEditModal,
  };

  return [state, actions];
};

export default useStatesandActions;
