import DateRangeIcon from "@mui/icons-material/DateRange";

export const INITIAL_ITEMS = [
  { id: "item-1", type: "text", label: "Text Field", required: false },
  { id: "item-2", type: "select", label: "Select", required: false },
  {
    id: "item-3",
    type: "date",
    label: (
      <>
        <DateRangeIcon /> Date Picker
      </>
    ),
    required: false,
  },
  { id: "item-4", type: "upload", label: <>File upload</>, required: false },
];
