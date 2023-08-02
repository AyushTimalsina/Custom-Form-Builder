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
        choice: [
          {
            id: generateUniqueId(),
            type: "option",
            value: "",
            label: "",
          },
        ],
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
        choice: [
          {
            id: generateUniqueId(),
            value: "",
            label: "",
          },
        ],
      },
      {
        id: generateUniqueId(),
        type: "date",
        label: "Date",
        isRequired: false,
      },
      {
        id: generateUniqueId(),
        type: "file-upload",
        label: "File Upload",
        isRequired: false,
      },
    ],
  },
];
