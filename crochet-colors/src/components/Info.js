import { useEffect, useState} from "react";
import useColorsContext from "../hooks/use-colors-context";
function Info(){
    const {selectedColor, colorCombos} = useColorsContext();
    const [combinationContent, setCombinationContent] = useState(<div>Unique combination.</div>);
    const [permutationContent, setPermutationContent] = useState(<div>Unique permutation.</div>);

    const areColorCombosEqual = (combo1, combo2) => {
        return combo1[0].name === combo2[0].name && combo1[1].name === combo2[1].name && combo1[2].name === combo2[2].name
         && combo1[3].name === combo2[3].name;
    }

    const areColorCombosPermutations = (combo1, combo2) => {
        const colorCombo1 = [combo1[0].name, combo1[1].name, combo1[2].name, combo1[3].name];
        const colorCombo2 = [combo2[0].name, combo2[1].name, combo2[2].name, combo2[3].name];
        if(colorCombo1.sort().join(',')=== colorCombo2.sort().join(',')){
            return true;
        }
    }

    useEffect(() => {
        const isSelectedPermutationPresent = () => {
            let permutation = false;
            colorCombos.forEach((combo) => {
                if (areColorCombosEqual(combo, selectedColor)){
                    permutation = true;
                }
            })
            return permutation;
        }

        const isSelectedCombinationPresent = () => {
            let combination = false;
            colorCombos.forEach((combo) => {
                if (areColorCombosPermutations(combo, selectedColor)){
                    combination = true;
                }
            })
            return combination;
        }

        if (isSelectedCombinationPresent()){
           setCombinationContent(<div>At least 1 combination with these colors already exists.</div>);
        }
        else{
            setCombinationContent(<div>Unique combination.</div>)
        }
        if (isSelectedPermutationPresent()){
            setPermutationContent(<div>Same permutation already exists.</div>);
        }
        else{
            setPermutationContent(<div>Unique permutation.</div>);
        }
    }, [selectedColor, colorCombos]);

    

    return <div>
        {combinationContent}
        {permutationContent}
        Number of combinations already entered: {colorCombos.length}
    </div>
}

export default Info;