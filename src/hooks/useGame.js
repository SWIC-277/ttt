import { useReducer } from "react";
import reducer from "./reducer";

export default function useGame() {
  const [state, dispatch] = useReducer(reducer, {
    board: Array(9).fill(null),
    turn: "X",
  });

  const { board, winner } = state;

  const makeMove = (event) => {
    if (!winner) {
      dispatch({ type: "made_move", index: event.target.id });
    }
  };

  const resetGame = () => {
    dispatch({ type: "reset_game" });
  };

  return {
    board,
    winner,
    makeMove,
    resetGame,
  };
}
