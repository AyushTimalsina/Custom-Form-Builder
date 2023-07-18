import { useState } from "react";
import { INITIAL_ITEMS } from "../config/constant";

const useStatesandActions = () => {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [formFields, setFormFields] = useState([]);
  const [formJson, setFormJson] = useState("");

  const state = {
    items,
    formFields,
    formJson,
  };

  const actions = {
    setItems,
    setFormFields,
    setFormJson,
  };

  return [state, actions];
};

export default useStatesandActions;
