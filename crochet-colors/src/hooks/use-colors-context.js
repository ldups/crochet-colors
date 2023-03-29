import { useContext } from "react";
import ColorsContext from "../context/colors";

function useColorsContext(){
    return useContext(ColorsContext);
}

export default useColorsContext;