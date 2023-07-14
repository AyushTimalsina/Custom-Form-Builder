import CustomFormContext from "./context";
import useStatesandActions from "./useStatesandAction";
const CustomFormProvider = ({ children }) => (
  <CustomFormContext.Provider value={useStatesandActions()}>
    {children}
  </CustomFormContext.Provider>
);

export default CustomFormProvider;
