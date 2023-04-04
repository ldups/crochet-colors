import { useEffect } from "react";
import Hexagons from "./components/Hexagons";
import ColorSelectList from "./components/ColorSelectList";
import useColorsContext from "./hooks/use-colors-context";
import Info from "./components/Info";
import ComboList from "./components/ComboList";

function App(){
    const {fetchColors, fetchColorCombos, deleteAllColorCombos} = useColorsContext();

    useEffect(() => {
        fetchColors();
        fetchColorCombos();
    }, [fetchColors, fetchColorCombos]);

    return <div className='app'>
        <h1 className="title">Crochet Colors</h1>
        <div className='container'>
            <div className='hexagons'><Hexagons/></div>
            <div className='color-select-list'><ColorSelectList/></div>
            <div className='info-panel'><Info/></div>
            <div className='combo-panel'> <ComboList/><button onClick={deleteAllColorCombos}>delete all</button></div>
            
        </div>
        
    </div>;
};

export default App;