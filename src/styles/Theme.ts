import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  // colors
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    defaultText: "#0D0C43",
    darkText: "#0D0C43",
    lightText:"#7A7998",
    mediumBlue: "#00B2C8",
    ultraLightBlue: "#F7FDFD",
    lightBlue: "#D5F4F7"
  },
  // typography
  fontWeights: {
    regular: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900
  },
  fonts: {
    heading: "Sofia Pro",
    body: '"Sofia Pro", sans-serif;'
  },
  breakpoints: [200, 640, 768, 1024, 1440]
};

// alias for breakpoints
theme.breakpoints.xs = `${theme.breakpoints[0]}px`;
theme.breakpoints.sm = `${theme.breakpoints[1]}px`;
theme.breakpoints.md = `${theme.breakpoints[2]}px`;
theme.breakpoints.lg = `${theme.breakpoints[3]}px`;
theme.breakpoints.xl = `${theme.breakpoints[4]}px`;

export default theme;