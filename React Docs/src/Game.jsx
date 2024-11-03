import Board from "./Board"
import { useState } from "react"

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    // Array[num].fill(null) creates an array is nine items, and set their value all to 'null'.
    const [currentMove, setCurrentMove] = useState(0);
    // This variable is used to determine whose turn it is next
    const xIsNext = currentMove % 2 === 0;
    /* This is a boolean that returns true or false depending on what condition is met. 
    If it returns true, then it is Xs turn and false means it is Ys turn*/
    const currentSquares = history[currentMove];

// The function below handles what happens when a button is clicked.
    function handlePlay(nextSquares) {
        const nextHistory = ([...history.slice(), nextSquares]);
        /* This spreads the value of the NextHistory Array into another and 
        also with NextSquare:An array that shows the position of the clicked button*/
        setHistory(nextHistory);
        // History is then set to the value of Next History
        setCurrentMove(nextHistory.length - 1);
        // Current move is then updated
    }

    // This function controls the history, and navigating back to previous history.
    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        // Move here represent the indexes
        let description = move > 0 ? 'Go to# ' + move : 'Go to # game start';
        // Determines what each history button shows
        // Creates the buttons for navigating back
         return ( <li key={move}>
             <button onClick={()=>jumpTo(move)}>
             {description}
         </button>
     </li >);
    }
    
    );


  return (
    <div className="game">
      <div className="game-board">
              <Board xIsNext={ xIsNext } squares = {currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game