import "./App.css";
import Square from "./components/Square";
import useGame from "./hooks/useGame";

function App() {
  const { board, winner, turn, makeMove, resetGame } = useGame();

  return (
    <main className="flex flex-col items-center">
      <h1>Tic Tac Toe</h1>

      <h2>{turn}&apos;s turn</h2>
      {winner && <p>{winner} Wins!</p>}

      <div className="board">
        {board.map((square, index) => (
          // Actually pass in the dumb, stupid marker (square)
          <Square
            key={index}
            id={index}
            handleClick={makeMove}
            marker={square}
          />
        ))}
      </div>

      <button
        type="button"
        className="mx-auto my-8 rounded bg-blue-500 px-4 py-2 text-sm text-white"
        onClick={resetGame}
      >
        Reset Game!
      </button>
    </main>
  );
}

export default App;
