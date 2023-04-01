import useColorsContext from "../hooks/use-colors-context";

function ColorSelect({color}){
    const {selectColor, colorCombos} = useColorsContext();

    const textStyle ={
        color: color.hex,
        fontSize: '20px',
    }
    const blockStyle ={
        backgroundColor: color.hex,
        width: '20px',
        height: '20px',
    }

    const containerStyle = {
        display: 'inline-flex'
    }

    const onChange = (event) => {
        if (event.target.value !== ""){
            selectColor(color, event.target.value);
        }
        
    }

    const calcNumUsingColor = () => {
        var numCombos = 0;
        colorCombos.forEach(combo => {
            if (combo[0].name === color.name || combo[1].name === color.name || combo[2].name === color.name ||combo[3].name === color.name){
                numCombos ++;
            }
        });
        return numCombos;
    }

    return <div >
        <div style={containerStyle}>
            <div style={blockStyle}> </div>
            <div style={textStyle}> {color.name} ({calcNumUsingColor()}) </div>
        </div>
        
        <form>
            <select name={color.name} onChange={onChange}>
                <option value=""></option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </form>
        
    </div>
}
export default ColorSelect;