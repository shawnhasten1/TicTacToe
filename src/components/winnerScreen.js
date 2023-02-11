import { CIRCLE } from "../constants.js";

function WinnerScreen(winner){
    return (
        <div className="winner-screen">
            {winner != "DRAW" && <h1>Winner is {winner == CIRCLE ? "⭕" : "❌"}</h1>}
            {winner == "DRAW" && <h1>It's a draw!</h1>}
        </div>
    );
}

export default WinnerScreen