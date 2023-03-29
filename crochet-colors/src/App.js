import { useEffect } from "react";
import Hexagons from "./components/Hexagons";
import ColorSelectList from "./components/ColorSelectList";
import useColorsContext from "./hooks/use-colors-context";

function App(){
    const {fetchColors} = useColorsContext();

    useEffect(() => {
        fetchColors();
    }, [fetchColors]);

    return <div>
        Crochet Colors
        <Hexagons/>
        <ColorSelectList/>
    </div>;
};

export default App;