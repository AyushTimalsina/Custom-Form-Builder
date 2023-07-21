import { INITIAL_ITEMS } from "../config/constant";

const initialState = {
  items: INITIAL_ITEMS[0].elements,
  isRequiredMap: {},
  title: "",
  description: "",
  formFields: [],
  formJson: "",
  counter: 1,
};

const actionTypes = {
  SET_ITEMS: "SET_ITEMS",
  SET_IS_REQUIRED_MAP: "SET_IS_REQUIRED_MAP",
  SET_TITLE: "SET_TITLE",
  SET_DESCRIPTION: "SET_DESCRIPTION",
  SET_FORM_FIELDS: "SET_FORM_FIELDS",
  SET_FORM_JSON: "SET_FORM_JSON",
  TOGGLE_IS_REQUIRED: "TOGGLE_IS_REQUIRED",
  INCREMENT_COUNTER: "INCREMENT_COUNTER",
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
      return { ...state, formFields: action.payload };
    case actionTypes.SET_FORM_JSON:
      return { ...state, formJson: action.payload };
    case actionTypes.TOGGLE_IS_REQUIRED:
      const { fieldId, isRequired } = action.payload;
      return {
        ...state,
        isRequiredMap: { ...state.isRequiredMap, [fieldId]: isRequired },
      };
    case actionTypes.INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};

export { initialState, actionTypes, reducer };
