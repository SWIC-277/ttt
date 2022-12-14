import reducer from "./reducer";

it("only updates the board with the current turn for 'null' position (only once)", () => {
  const state = {
    board: [null, null, null, null, null, null, null, null, null],
    turn: "X",
  };

  const action = {
    type: "made_move",
    index: 0,
  };

  const newState = reducer(state, action);
  const newState2 = reducer(newState, action);

  expect(newState.board[0]).toBe("X");
  expect(newState2.board[0]).toBe("X");
});

it("updates the winner after a winning move", () => {
  const state = {
    board: ["X", "O", "X", "O", "X", "O", null, null, null],
    turn: "X",
  };

  const action = {
    type: "made_move",
    index: 6,
  };

  const newState = reducer(state, action);

  expect(newState.winner).toBe("X");
});

it("resets the state", () => {
  const state = {
    board: ["X", "O", "X", "O", "X", "O", null, null, null],
    turn: "X",
  };

  const action = {
    type: "reset_game",
  };

  const newState = reducer(state, action);

  expect(newState.board).toEqual(Array(9).fill(null));
  expect(newState.turn).toBe("X");
  expect(newState.winner).toBe(null);
});
