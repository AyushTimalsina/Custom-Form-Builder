import { useContext } from "react";
import CustomFormContext from "./context";
const useCustomForm = () => useContext(CustomFormContext);
export default useCustomForm;
