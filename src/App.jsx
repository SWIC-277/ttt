import "./App.css";
import Square from "./components/Square";
import useGame from "./hooks/useGame";

function App() {
  const { board, winner, makeMove } = useGame();

  return (
    <main className="flex flex-col items-center">
      <h1>Tic Tac Toe</h1>

      {winner && <p>{winner} Wins!</p>}

      <div className="board">
        {board.map((square, index) => (
          // Actually pass in the dumb, stupid marker (square)
          <Square
            key={index}
            id={index}
            handleClick={!winner && makeMove}
            marker={square}
          />
        ))}
      </div>

      <button
        type="button"
        className="mx-auto my-8 rounded bg-blue-500 px-4 py-2 text-sm text-white"
      >
        Reset Game!
      </button>
    </main>
  );
}

export default App;
