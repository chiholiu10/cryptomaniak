import { useEffect, useState } from "react";
import theme from "../styles/Theme";

type Breakpoint = "mobile" | "tablet" | "desktop";

const getBreakpoint = (width: number): Breakpoint | undefined => {
  const { breakpoints } = theme;

  const md = breakpoints.indexOf(768);
  const lg = breakpoints.indexOf(1024);

  if (width < breakpoints[md]) {
    return "mobile";
  } else if (width < breakpoints[lg]) {
    return "tablet";
  } else {
    return "desktop";
  }
};

export const useBreakpoint = (): Breakpoint | undefined => {
  if (typeof window === "undefined") return;

  const [breakpoint, setBreakpoint] = useState<Breakpoint | undefined>(() =>
    getBreakpoint(window.innerWidth)
  );

  useEffect(() => {
    const checkWindowWidth = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    window.addEventListener("resize", checkWindowWidth);
    return () => window.removeEventListener("resize", checkWindowWidth);
  }, []);

  return breakpoint;
};
