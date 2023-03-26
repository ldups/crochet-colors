import axios from 'axios';
import {createContext, useState, useCallback} from 'react';

const ColorsContext = createContext();

function Provider({children}){
    const [colors, setColors] = useState([]);
    const [colorCombos, setColorCombos] = useState([]);
    
    const fetchColors = useCallback(async () => {
        const response = await axios.get();
        setColors(response.data);},
        [])
    
    const addColor = async (name, hex) => {
        const response = await axios.post( , {name, hex});
        const updatedColors = [
            ...colors,
            response.data
        ];
        setColors(updatedColors);
    };

    const deleteColorByID = async (id) =>{
        const response = await axios.delete();

        const updatedColors = colors.filter((color) => {
            return color.id !== id;
        });
        setColors(updatedColors);
    };

    const fetchColorCombos = useCallback(async () => {
        const response = await axios.get();
        setColorCombos(response.data);},
        [])
    
    const addColorCombo = async (color1, color2, color3, color4) => {
        const response = await axios.post( , {color1, color2, color3, color4});
        const updatedColorCombos = [
            ...colorCombos,
            response.data
        ];
        setColorCombos(updatedColors);
    };

    const deleteColorComboByID = async (id) =>{
        const response = await axios.delete();

        const updatedColorCombos = colorCombos.filter((colorCombo) => {
            return colorCombo.id !== id;
        });
        setColors(updatedColorCombos);
    };


    const vals ={
        colors, 
        fetchColors,
        addColor,
        deleteColorByID,
        colorCombos, 
        fetchColorCombos,
        addColorCombo,
        deleteColorComboByID
    };

    return <ColorsContext.Provider value={vals}>
        {children}
    </ColorsContext.Provider>;
}

export {Provider};
export default ColorsContext;