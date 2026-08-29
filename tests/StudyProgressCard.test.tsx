import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import StudyProgressCard from "../components/StudyProgressCard";

describe("StudyProgressCard", () => {
  it("renders study progress information correctly", () => {
    render(
      <StudyProgressCard
        subject="Mathematics"
        completed={8}
        total={10}
        percentage={80}
        status="On Track"
      />,
    );

    expect(screen.getByText("Study Progress")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Mathematics" })).toBeInTheDocument();
    expect(screen.getByText("80%")).toBeInTheDocument();
    expect(screen.getByText("8 of 10 completed")).toBeInTheDocument();
    expect(screen.getByText("On Track")).toBeInTheDocument();
  });
});