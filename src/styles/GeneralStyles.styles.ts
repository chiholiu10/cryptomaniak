import styled from "styled-components";
import { breakpoint } from "./BreakPoint";

export const Header = styled.h2`
    text-align: center;
    font-weight: 500;
    font-style: normal;
    font-size: 32px;
    line-height: 38px;
    padding: 30px 0 20px;
    ${breakpoint.md`
        padding: 50px 0 25px;
    `}

`;
