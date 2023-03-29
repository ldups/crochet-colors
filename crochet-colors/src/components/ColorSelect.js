import useColorsContext from "../hooks/use-colors-context";

function ColorSelect({color}){
    const {selectColor} = useColorsContext();

    return <div>
        {color.name}
        <select name={color.name}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
    </div>
}
export default ColorSelect;