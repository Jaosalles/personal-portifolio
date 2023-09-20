import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it('should contain the text "Hello Word"', () => {
    render(<Home />);

    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
