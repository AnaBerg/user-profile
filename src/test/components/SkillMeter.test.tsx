import { screen, render } from "@testing-library/react";

import { SkillMeter } from "../../components";

describe("The SkillMeter", () => {
  it("Should render correctly", async () => {
    render(<SkillMeter percentage={50} skill="Developing" />);

    const text = await screen.findByText("Developing");
    const purpleBar = screen.getByTestId("purple-percentage-bar");
    const greyBar = screen.getByTestId("grey-percentage-bar");

    expect(text).toBeInTheDocument();
    expect(purpleBar).toBeInTheDocument();
    expect(greyBar).toBeInTheDocument();
  });
  it("Should render only the purple bar if the percentage is 100", async () => {
    render(<SkillMeter percentage={100} skill="Developing" />);

    const purpleBar = await screen.findByTestId("purple-percentage-bar");
    const greyBar = screen.queryByTestId("grey-percentage-bar");

    expect(purpleBar).toBeInTheDocument();
    expect(greyBar).not.toBeInTheDocument();
  });
  it("Should render only the grey bar if the percentage is 0", async () => {
    render(<SkillMeter percentage={0} skill="Developing" />);

    const greyBar = await screen.findByTestId("grey-percentage-bar");
    const purpleBar = screen.queryByTestId("purple-percentage-bar");

    expect(greyBar).toBeInTheDocument();
    expect(purpleBar).not.toBeInTheDocument();
  });
});
