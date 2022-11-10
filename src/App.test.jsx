import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("renders Tic Tac Toe", () => {
    render(<App />);

    const squares = screen.getAllByRole("button", { name: "" });

    expect(squares).toHaveLength(9);
  });

  it("alternates 'X' and 'O' whenever clicking squares", async () => {
    const user = userEvent.setup();

    render(<App />);

    const squares = screen.getAllByRole("button");

    await user.click(squares[0]);
    await user.click(squares[1]);
    await user.click(squares[2]);

    expect(squares[0]).toHaveTextContent("X");
    expect(squares[1]).toHaveTextContent("O");
    expect(squares[2]).toHaveTextContent("X");
  });

  it("displays 'X' as the winner", async () => {
    const user = userEvent.setup();

    const clicks = [0, 3, 1, 4, 2];

    render(<App />);

    const squares = screen.getAllByRole("button");

    await Promise.all(clicks.map((click) => user.click(squares[click])));

    expect(screen.getByText("X Wins!")).toBeInTheDocument();
  });
});
