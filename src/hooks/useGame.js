import { useReducer } from "react";
import reducer from "./reducer";

export default function useGame() {
  const [state, dispatch] = useReducer(reducer, {
    board: Array(9).fill(null),
    turn: Math.random() > 0.5 ? "X" : "O",
  });

  const { board, turn, winner } = state;

  const makeMove = (event) => {
    const index = Number(event.target.id);
    if (!board[index] && !winner) {
      dispatch({ type: "made_move", index });
    }
  };

  const resetGame = () => {
    dispatch({ type: "reset_game" });
  };

  return {
    board,
    winner,
    turn,
    makeMove,
    resetGame,
  };
}
