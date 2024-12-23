import React, {use, useState} from "react";
import Board from "./Board.jsx";


function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0)
    const currentSquares = history[currentMove];
    

    function handlePlay(nextSquares) {
        
        console.log(history)
        console.log(currentMove)
        const nextHistory = [...history.slice(0, currentMove +1), nextSquares]
        setHistory(nextHistory);
        
        setXIsNext(!xIsNext);
        
        setCurrentMove(nextHistory.length -1)
    }

    function onJump(move) {
        setCurrentMove(move)
        setXIsNext(move % 2 === 0);
    }

    const moves = history.map( (squares, move) => {
        let description;
        
        if (move > 0) {
            description = "return to move " + move;
        }
        else {
            description = "return to first move";
        }

        return (
            <li key={move}>
                <button onClick={ () => onJump(move)}>
                    {description}
                </button>
            </li>
        );

    })

    return (
        <div className="page-holder">
            <div>
                <Board xIsNext={xIsNext} currentSquares={currentSquares} onPlay= {handlePlay} />
            </div>
            
            <div className= 'game-info'>
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
    )
}

export default Game