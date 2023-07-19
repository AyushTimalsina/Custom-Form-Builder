import { useState } from "react";
import { INITIAL_ITEMS } from "../config/constant";

const useStatesandActions = () => {
  const [items, setItems] = useState(INITIAL_ITEMS[0].elements);
  const [isRequiredMap, setIsRequiredMap] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formFields, setFormFields] = useState([]);
  const [formJson, setFormJson] = useState("");

  const state = {
    items,
    isRequiredMap,
    title,
    description,
    formFields,
    formJson,
  };

  const actions = {
    setItems,
    setIsRequiredMap,
    setTitle,
    setDescription,
    setFormFields,
    setFormJson,
  };

  return [state, actions];
};

export default useStatesandActions;
