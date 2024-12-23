import React, {useState}from 'react';
import './board.css';
import Square from './Square.jsx';

function Board({xIsNext, currentSquares, onPlay}) {
    
    const [values, setValues] = useState(Array(9).fill(''))
    const [turns, setTurns] = useState(Array(9).fill(''))
    
    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
    }


    const handleClick = (i) => {
        if (currentSquares[i] === 'X' || currentSquares[i] === 'O' || calculateWinner(currentSquares)) {
            return;
        }
            const nextSquares = currentSquares.slice();
            if (xIsNext) {
                nextSquares[i] = 'X';
            }
            else {
                nextSquares[i] = 'O';
            }
           onPlay(nextSquares);

    }



    let status = "";
    const winner = calculateWinner(currentSquares);
    if (winner) {
        status = "Winner: " + calculateWinner(currentSquares)
    }
    else {
        status = "Next Move: " + (xIsNext ? "X" : "O")
    }
    return <>
    
        <div className='board-holder'>
            <h3>{status}</h3>
            <div className='board-row'>
                <Square value={currentSquares[0]} click={() => handleClick(0)} classname='border-bottom border-right'/>
                <Square value={currentSquares[1]} click={() => handleClick(1)} classname='border-bottom border-right'/>
                <Square value={currentSquares[2]} click={() => handleClick(2)} classname='border-bottom '/>
            </div>
            <div className='board-row'>
                <Square value={currentSquares[3]} click={() => handleClick(3)} classname='border-bottom border-right'/>
                <Square value={currentSquares[4]} click={() => handleClick(4)} classname='border-bottom border-right'/>
                <Square value={currentSquares[5]} click={() => handleClick(5)} classname='border-bottom '/>
        
            </div>
            <div className='board-row'>
                <Square value={currentSquares[6]} click={() => handleClick(6)} classname='border-right'/>
                <Square value={currentSquares[7]} click={() => handleClick(7)} classname='border-right'/>
                <Square value={currentSquares[8]} click={() => handleClick(8)}/>
            </div>
            <div className='strikethrough'></div>
        </div>
        </>
}

export default Board;