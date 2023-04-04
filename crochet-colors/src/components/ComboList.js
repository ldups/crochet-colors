import useColorsContext from "../hooks/use-colors-context";
import ColorCombo from "./ColorCombo";

function ComboList() {
    const {colorCombos} = useColorsContext();

    const renderedColorCombos = colorCombos.map((combo) => {
        return <ColorCombo key={combo.id} combo={combo}/>
    })

    return <div>
        <div className='combo-list'>
            {renderedColorCombos}
        </div>
    </div>;
}

export default ComboList;