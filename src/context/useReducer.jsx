import { INITIAL_ITEMS } from "../config/constant";

const initialFormFields = INITIAL_ITEMS[0].elements;
const initialIsRequiredMap = initialFormFields.reduce((isRequired, field) => {
  isRequired[field.id] = field.isRequired;
  return isRequired;
}, {});

const initialState = {
  items: initialFormFields,
  isRequiredMap: initialIsRequiredMap,
  title: "",
  description: "",
  formFields: [],
  formJson: "",
  version: "1.0.0",
  label: "",
};

const actionTypes = {
  SET_ITEMS: "SET_ITEMS",
  SET_IS_REQUIRED_MAP: "SET_IS_REQUIRED_MAP",
  SET_TITLE: "SET_TITLE",
  SET_DESCRIPTION: "SET_DESCRIPTION",
  SET_FORM_FIELDS: "SET_FORM_FIELDS",
  SET_FORM_JSON: "SET_FORM_JSON",
  TOGGLE_IS_REQUIRED: "TOGGLE_IS_REQUIRED",
  SET_VERSION: "SET_VERSION",
  SET_LABEL: "SET_LABEL",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_ITEMS:
      return { ...state, items: action.payload };
    case actionTypes.SET_IS_REQUIRED_MAP:
      return { ...state, isRequiredMap: action.payload };
    case actionTypes.SET_TITLE:
      return { ...state, title: action.payload };
    case actionTypes.SET_DESCRIPTION:
      return { ...state, description: action.payload };
    case actionTypes.SET_FORM_FIELDS:
      const formFields = action.payload;
      return { ...state, formFields };
    case actionTypes.SET_FORM_JSON:
      return { ...state, formJson: action.payload };
    case actionTypes.TOGGLE_IS_REQUIRED:
      const { fieldId, isRequired } = action.payload;
      return {
        ...state,
        isRequiredMap: { ...state.isRequiredMap, [fieldId]: isRequired },
      };
    case actionTypes.SET_VERSION:
      return { ...state, version: action.payload };
    case actionTypes.SET_LABEL:
      const { id, label } = action.payload;
      const fieldData = state.formFields.find((field) => field.id === id);
      if (fieldData) {
        return {
          ...state,
          formFields: state.formFields.map((field) =>
            field.id === id ? { ...field, label } : field
          ),
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};

export { initialState, actionTypes, reducer };
