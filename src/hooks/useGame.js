import { useReducer } from "react";
import reducer from "./reducer";

export default function useGame() {
  const [state, dispatch] = useReducer(reducer, {
    board: Array(9).fill(null),
    turn: "X",
  });

  const makeMove = (event) => {
    dispatch({ type: "made_move", index: event.target.id });
  };

  const resetGame = () => {
    dispatch({ type: "reset_game" });
  };

  const { board, winner } = state;

  // Export out the turn if
  return {
    board,
    winner,
    makeMove,
    resetGame,
  };
}
