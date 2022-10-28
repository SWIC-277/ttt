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

  const { board, winner } = state;

  return {
    board,
    winner,
    makeMove,
  };
}
