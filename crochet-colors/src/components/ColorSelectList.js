import useColorsContext from "../hooks/use-colors-context";
import ColorSelect from "./ColorSelect";

function ColorSelectList(){
    const {colors} = useColorsContext();

    const renderedColors = colors.map((color) =>{
        return <ColorSelect color={color} key={color.id}/>
    })

    return <div>
        {renderedColors}
    </div>
}

export default ColorSelectList;