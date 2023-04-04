import { useState } from "react";
import useColorsContext from "../hooks/use-colors-context";

function ColorCombo({combo}){
    const [hover, setHover] = useState(false);

    const {deleteColorComboByID} = useColorsContext();
    const handleDelete = () => {
        deleteColorComboByID(combo.id);
    }

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    let content = <svg viewBox="0 0 100 100" width="100" height="100">
                    <circle cx="50" cy="50" r="40" fill={combo[3].hex} stroke="black" stroke-width="2" />
                    <circle cx="50" cy="50" r="30" fill={combo[2].hex} stroke="black" stroke-width="2" />
                    <circle cx="50" cy="50" r="20" fill={combo[1].hex} stroke="black" stroke-width="2" />
                    <circle cx="50" cy="50" r="10" fill={combo[0].hex} stroke="black" stroke-width="2" />
                </svg>;

    if (hover){
        content = <div className='color-combo-hover'>
            <p>{combo[0].name}</p>
            <p>{combo[1].name}</p>
            <p>{combo[2].name}</p>
            <p>{combo[3].name}</p>
        </div>
    }
    return <div className='combo' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className = "delete" onClick={handleDelete}>X</button>
            {content}
        </div>
}

export default ColorCombo;