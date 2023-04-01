import { useEffect } from "react";
import Hexagons from "./components/Hexagons";
import ColorSelectList from "./components/ColorSelectList";
import useColorsContext from "./hooks/use-colors-context";
import Info from "./components/Info";

function App(){
    const {fetchColors, fetchColorCombos} = useColorsContext();

    useEffect(() => {
        fetchColors();
        fetchColorCombos();
    }, [fetchColors, fetchColorCombos]);

    return <div>
        <h1>Crochet Colors</h1>
        <div className='container'></div>
        <div className='hexagons'><Hexagons/></div>
        <div className='color-select-list'><ColorSelectList/></div>
        <div className='info-panel'><Info/></div>
    </div>;
};

export default App;