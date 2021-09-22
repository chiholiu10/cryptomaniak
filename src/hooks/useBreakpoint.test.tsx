import { FC } from "react";
import { useBreakpoint } from "./useBreakpoint";
import { render } from "@testing-library/react";
import theme from "../styles/Theme";

function resizeWindow(width: number) {
  window = Object.assign(window, { innerWidth: width });
  window.dispatchEvent(new Event("resize"));
}

const BreakpointContainer: FC = () => {
  const breakpoint = useBreakpoint();

  return <span>{breakpoint}</span>;
};

describe("useBreakpoint", () => {
  const { breakpoints } = theme;
  const md = breakpoints.indexOf(768);
  const lg = breakpoints.indexOf(1024);

  it("should return mobile breakpoint if window width less than 768px", () => {
    resizeWindow(breakpoints[md] - 1);
    const { container } = render(<BreakpointContainer />);
    expect(container.textContent).toBe("mobile");
  });

  it("should return tablet breakpoint if window width more than 768px and less than 1024px", () => {
    resizeWindow(breakpoints[lg] - 1);
    const { container, rerender } = render(<BreakpointContainer />);
    expect(container.textContent).toBe("tablet");

    resizeWindow(breakpoints[md]);
    rerender(<BreakpointContainer />);
    expect(container.textContent).toBe("tablet");
  });

  it("should return desktop breakpoint if window width more than 1024px or equal to it", () => {
    resizeWindow(breakpoints[lg]);
    const { container, rerender } = render(<BreakpointContainer />);
    expect(container.textContent).toBe("desktop");

    resizeWindow(breakpoints[lg] + 1);
    rerender(<BreakpointContainer />);
    expect(container.textContent).toBe("desktop");
  });
});
