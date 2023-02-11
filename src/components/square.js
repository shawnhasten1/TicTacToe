import { CIRCLE, CROSS, EMPTY } from "../constants.js";

function Square({position, value, takeTurn}) {
    function handleClick(){
        console.log(position)
        if(value==EMPTY) takeTurn(position);
    }
    return (
      <div className="square" onClick={handleClick}>
        {value == CIRCLE && <Circle position={position}/>}
        {value == CROSS && <Cross position={position}/>}
      </div>
    );
}

function Circle({position}){
    return (
        <div>
            <p className="shape circle">⭕</p>
            <p>{position}</p>
        </div>
    );
}

function Cross({position}){
    return (
        <div>
            <p className="shape cross">❌</p>
            <p>{position}</p>
        </div>
    );
}

export default Square