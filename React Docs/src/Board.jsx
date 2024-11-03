/* 
Creating the buttons ass a component an passing in props, 
 one for eventhandling, and the other for dynamic rendering.
 */
const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

// Default Jsx to be exported, also taking in props
export default function Board({ xIsNext, squares, onPlay }) {
  // This function control the happenings when a button or box is clicked.

  // squares represnts the nine boxs
  const handleClick = (i) => {
    if (squares[i] || winner(squares)) {
      return;
    }
    /* The above function checks if a square is already occupied or if the game has been won, 
        and then stops the user from modifying the already existing values if the square is already occupied 
        or if the game has been won*/

    const nextSquares = squares.slice();
    // The above code assigns the value of the squares array to the variable 'nextSquares'.
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    /* In the above if....else block, xIsNext is a variable that returns a booleen that returns true 
         if the value of currentMoves % 2 evalutes to true. if the if...else block evalutes to true, on 
         click of the squares, the value 'X' will be passed in. Else, 'O' will be passed in.
        */
    onPlay(nextSquares);
  };

  // This aspects controls the logic of annoucing wins or turns.
  const showWinner = winner(squares);
  // The showWinner will hold the value true whenthere is a win, and false when there is not.
  let status;
  if (showWinner) {
    status = "Winner: " + showWinner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  /*In the control flow above, with the help of the "ShowWinner" variable, 
  we are able to decide weather we annoce a win or a turn.*/

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// The function below helps determine when the game is woon

const winner = (squares) => {
  const line = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    ];
    
    // The line variable holds the value that leads to all possible wins.

  for (let i = 0; i < line.length; i++) {
    const [a, b, c] = line[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
    }

    // The above control flow is used to check the euality of scores
};
