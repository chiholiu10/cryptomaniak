import styled from "styled-components";
import { breakpoint } from "./BreakPoint";

export const Header = styled.h2`
    text-align: center;
    font-weight: 500;
    font-style: normal;
    font-size: 32px;
    line-height: 38px;
    padding: 30px 0 10px;
    ${breakpoint.md`
        padding: 100px 0 45px;
    `}
`;

export const MaxWidthDesktop = `
    max-width: 1100px;
`;