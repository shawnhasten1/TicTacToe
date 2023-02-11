import React from 'react';

import Square from "./square";
import WinnerScreen from "./winnerScreen";

//importing the constants from constants.js
import { CIRCLE, CROSS, EMPTY } from "../constants.js";

function Grid() {

    const [state, setState] = React.useState({
        player: CIRCLE,
        positions: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
        winner: null
    });

    function takeTurn(position){
        const positions = [...state.positions];
        positions[position] = state.player;

        setState({
            player: state.player == CIRCLE ? CROSS : CIRCLE,
            positions: positions,
            winner: detectWinner(positions)
        });
    }
    
    //returns a square component for each position
    return (
        <div className="playground">
            {state.winner == null &&<div className="grid">
                {
                    state.positions.map((position, index) => (
                        <Square key={index} position={index} value={position} takeTurn={takeTurn}/>
                    ))
                }
            </div>}
            {state.winner != null && <WinnerScreen winner={state.winner}/>}
        </div>
    );
}

function detectWinner(positions){
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    if(positions.every((position) => position != EMPTY)){
        return "DRAW";
    }
    for(let i = 0; i < winningLines.length; i++){
        const [a, b, c] = winningLines[i];
        if(positions[a] != EMPTY && positions[a] == positions[b] && positions[a] == positions[c]){
            return positions[a];
        }
    }
    return null;
}

export default Grid