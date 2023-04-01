import axios from 'axios';
import {createContext, useState, useCallback} from 'react';

const ColorsContext = createContext();

function Provider({children}){
    const [colors, setColors] = useState([]);
    const [colorCombos, setColorCombos] = useState([]);
    const [selectedColor, setSelectedColor] = useState({
        0:{
            name:'default',
            hex:'#FFFFFF'
        }, 
        1: {
            name:'default',
            hex:'#FFFFFF'
        },
        2: {
            name:'default',
            hex:'#FFFFFF'
        }, 
        3: {
            name:'default',
            hex:'#FFFFFF'
        }
    });
    
    const fetchColors = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/colors');
        setColors(response.data);},
        []);
    
    /*const addColor = async (name, hex) => {
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
    };*/

    const fetchColorCombos = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/colorCombos');
        setColorCombos(response.data);},
        [])

    const areColorCombosEqual = (combo1, combo2) => {
        return combo1[0].name === combo2[0].name && combo1[1].name === combo2[1].name && combo1[2].name === combo2[2].name
         && combo1[3].name === combo2[3].name;
    }
    
    const addColorCombo = async () => {
        var uniqueCombo = true;
        colorCombos.map((combo) => {
            if (areColorCombosEqual(combo, selectedColor)){
                alert("Color combination already in list.");
                uniqueCombo = false;
            }
        })
        var allColorsSelected = selectedColor[0].name !== 'default' && selectedColor[1].name !== 'default' && selectedColor[2].name !== 'default' && selectedColor[3].name !== 'default';
        if (!allColorsSelected){
            alert("Not all colors selected. Unable to submit combo.");
        }
        if (uniqueCombo && allColorsSelected){
            const response = await axios.post('http://localhost:3001/colorCombos', selectedColor);
            const updatedColorCombos = [
                ...colorCombos,
                response.data
            ];
            setColorCombos(updatedColorCombos);

            const updatedColors = colors.map((color) => {
                return {
                    ...color,
                    rank:""
                }
            });
            setColors(updatedColors);
            
            alert("Color combination successfully added.");
        }
        
    };

    const deleteColorComboByID = async (id) =>{
        const response = await axios.delete();

        const updatedColorCombos = colorCombos.filter((colorCombo) => {
            return colorCombo.id !== id;
        });
        setColors(updatedColorCombos);
    };

    const selectColor = (color, num) =>{
        const updatedSelectedColor = {
            ...selectedColor,
          };
        updatedSelectedColor[num] = color;
        
        setSelectedColor(updatedSelectedColor);
    }

    const changeColorRank = (color, rank) => {
        const updatedColors = colors.map((c) => {
            if (color.name === c.name){
                return {
                    ...c,
                    rank
                }
            }
            else if (rank === c.rank){
                return {
                    ...c,
                    rank:""
                }
            }
            return c;
        })
        setColors(updatedColors);
    }


    const vals ={
        colors, 
        fetchColors,
        selectedColor,
        selectColor,
        //addColor,
        //deleteColorByID,
        colorCombos, 
        fetchColorCombos,
        addColorCombo,
        changeColorRank
        //deleteColorComboByID
    };

    return <ColorsContext.Provider value={vals}>
        {children}
    </ColorsContext.Provider>;
}

export {Provider};
export default ColorsContext;