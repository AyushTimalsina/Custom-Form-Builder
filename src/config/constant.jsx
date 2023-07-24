const generateUniqueId = () => {
  const id = self.crypto.randomUUID();
  return `item-${id}`;
};
export const INITIAL_ITEMS = [
  {
    id: "form-1",
    title: "Forms",
    description: "Dynamic form generator",
    name: "",
    version: "1.0.5",
    elements: [
      {
        id: generateUniqueId(),
        type: "text",
        name: "name",
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
