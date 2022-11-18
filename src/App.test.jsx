import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("renders Tic Tac Toe", () => {
    render(<App />);

    const squares = screen.getAllByRole("button", { name: "" });

    expect(squares).toHaveLength(9);
  });

  it("alternates 'X' and 'O' whenever clicking empty squares", async () => {
    const user = userEvent.setup();

    render(<App />);

    const h2 = screen.getByRole("heading", { level: 2 });
    const isStartingWithX = h2.textContent.includes("X");

    const squares = screen.getAllByRole("button");

    await user.click(squares[0]);

    await user.click(squares[1]);

    // Click same square again to make sure it doesn't change
    // await user.click(squares[0]);

    await user.click(squares[2]);

    expect(squares[0]).toHaveTextContent(isStartingWithX ? "X" : "O");
    expect(squares[1]).toHaveTextContent(isStartingWithX ? "O" : "X");
    expect(squares[2]).toHaveTextContent(isStartingWithX ? "X" : "O");
  });

  it("displays 'X' as the winner", async () => {
    const user = userEvent.setup();

    const clicks = [0, 3, 1, 4, 2];

    render(<App />);

    const h2 = screen.getByRole("heading", { level: 2 });
    const squares = screen.getAllByRole("button");

    const isStartingWithX = h2.textContent.includes("X");

    await Promise.all(clicks.map((click) => user.click(squares[click])));

    expect(
      screen.getByText(isStartingWithX ? "X Wins!" : "O Wins!")
    ).toBeInTheDocument();
  });

  it("resets the game whenever the 'reset game' button is clicked", async () => {
    const user = userEvent.setup();

    render(<App />);

    const squares = screen.getAllByRole("button", { name: "" });
    const resetButton = screen.getByRole("button", { name: /Reset Game/i });

    await user.click(squares[0]);
    await user.click(resetButton);

    squares.forEach((square) => expect(square).toHaveTextContent(""));
  });
});
