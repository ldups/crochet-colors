function Hexagons(){
    const colors = ['red', 'yellow', 'blue', 'green', 'pink'];
    
    return <svg>
        <polygon points="150,75 112.5,140 37.5,140 0,75 37.5,10 112.5,10" stroke="black" fill={colors[0]}/>
        <polygon points="125,75 103.125,26.25 46.875,26.25 25,75 46.875,123.75 103.125, 123.75" stroke="black" fill={colors[1]}/>
        
    </svg>
}

export default Hexagons;