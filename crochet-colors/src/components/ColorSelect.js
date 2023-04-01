import useColorsContext from "../hooks/use-colors-context";

function ColorSelect({color}){
    const {selectColor, colorCombos, changeColorRank} = useColorsContext();

    const textStyle ={
        color: 'black',
        fontSize: '20px',
        marginRight: '10px',
    }
    const blockStyle ={
        backgroundColor: color.hex,
        width: '20px',
        height: '20px',
        marginRight: '10px',
    }

    const containerStyle = {
        display: 'inline-flex'
    }

    const onChange = (event) => {
        if (event.target.value !== ""){
            selectColor(color, event.target.value);
            changeColorRank(color, event.target.value);
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

    return <div className='color-select'>
        <div style={containerStyle}>
            <div style={blockStyle}> </div>
            <div style={textStyle}> {color.name} ({calcNumUsingColor()}) </div>
            <form>
                <select name={color.name} onChange={onChange} value={color.rank}>
                    <option value=""></option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </form>
        </div>
    </div>
}
export default ColorSelect;