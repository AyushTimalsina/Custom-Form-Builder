// useStatesandActions.jsx
import { useReducer } from "react";
import { initialState, actionTypes, reducer } from "./useReducer";

const useStatesandActions = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = {
    setItems: (items) =>
      dispatch({ type: actionTypes.SET_ITEMS, payload: items }),
    setIsRequiredMap: (isRequiredMap) =>
      dispatch({
        type: actionTypes.SET_IS_REQUIRED_MAP,
        payload: isRequiredMap,
      }),
    setTitle: (title) =>
      dispatch({ type: actionTypes.SET_TITLE, payload: title }),
    setDescription: (description) =>
      dispatch({ type: actionTypes.SET_DESCRIPTION, payload: description }),
    setFormFields: (formFields) =>
      dispatch({ type: actionTypes.SET_FORM_FIELDS, payload: formFields }),
    setFormJson: (formJson) =>
      dispatch({ type: actionTypes.SET_FORM_JSON, payload: formJson }),
    toggleIsRequired: (fieldId, isRequired) =>
      dispatch({
        type: actionTypes.TOGGLE_IS_REQUIRED,
        payload: { fieldId, isRequired },
      }),
    setVersion: (version) =>
      dispatch({ type: actionTypes.SET_VERSION, payload: version }),
    setLabel: (fieldId, label) =>
      dispatch({
        type: actionTypes.SET_LABEL,
        payload: { id: fieldId, label },
      }),
  };

  return [state, actions];
};

export default useStatesandActions;
