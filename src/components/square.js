import { CIRCLE, CROSS, EMPTY } from "../constants.js";

function Square({position, value, takeTurn}) {
    function handleClick(){
        console.log(position)
        if(value==EMPTY) takeTurn(position);
    }
    return (
      <div className="square" onClick={handleClick}>
        {value == CIRCLE && <Circle/>}
        {value == CROSS && <Cross/>}
      </div>
    );
}

function Circle(){
    return (
        <div className="shape circle">
            <p>⭕</p>
        </div>
    );
}

function Cross(){
    return (
        <div className="shape cross">
            <p>❌</p>
        </div>
    );
}

export default Square