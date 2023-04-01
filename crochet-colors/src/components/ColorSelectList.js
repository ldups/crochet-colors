import useColorsContext from "../hooks/use-colors-context";
import ColorSelect from "./ColorSelect";

function ColorSelectList(){
    const {colors, addColorCombo} = useColorsContext();

    const renderedColors = colors.map((color) =>{
        return <ColorSelect color={color} key={color.id}/>
    })

    const handleSubmit = () => {
        addColorCombo();
    }

    return <div>
        {renderedColors}
        <button onClick={handleSubmit} className='submit-button'>submit combo</button>
    </div>
}

export default ColorSelectList;