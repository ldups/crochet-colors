import useColorsContext from "../hooks/use-colors-context";

function Hexagons(){
    const {selectedColor} = useColorsContext();
    
    return <svg viewBox="0 0 400 400" width="400" height="400">
        <circle cx="200" cy="200" r="160" fill={selectedColor[3].hex} stroke="black" stroke-width="2" />
        <circle cx="200" cy="200" r="120" fill={selectedColor[2].hex} stroke="black" stroke-width="2" />
        <circle cx="200" cy="200" r="80" fill={selectedColor[1].hex} stroke="black" stroke-width="2" />
        <circle cx="200" cy="200" r="40" fill={selectedColor[0].hex} stroke="black" stroke-width="2" />
        
    </svg>
}

export default Hexagons;