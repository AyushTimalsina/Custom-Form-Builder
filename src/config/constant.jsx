let counter = 0;

const generateUniqueId = () => {
  counter++;
  return `item-${counter}`;
};
export const INITIAL_ITEMS = [
  {
    id: "form-1",
    title: "Forms",
    description: "Dynamic form generator",
    name: "",
    elements: [
      {
        id: generateUniqueId(),
        type: "text",
        label: "TextField",
        isRequired: false,
      },
      {
        id: generateUniqueId(),
        type: "select",
        label: "Select",
        isRequired: false,
      },
      {
        id: generateUniqueId(),
        type: "number",
        label: "Number",
        isRequired: false,
      },
      {
        id: generateUniqueId(),
        type: "radio",
        label: "Radio Button",
        isRequired: false,
      },
    ],
  },
];
