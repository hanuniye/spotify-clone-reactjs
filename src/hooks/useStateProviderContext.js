import { useContext } from "react";
import { stateContext } from "../context/stateprovider";

useContext
const useStateProviderContext = () => {
 return useContext(stateContext);
}

export default useStateProviderContext
