import styled from "styled-components";
import { breakpoint } from "../../styles/BreakPoint";
import theme from "../../styles/Theme";

export const ComingSoonContainer = styled.section`
    height: 680px;
    border-radius: 25px;
    position: relative;
    padding: 20px 0 0;
    background: ${theme.colors.mediumBlue};
    color: ${theme.colors.white};
    ${breakpoint.md`
        display: flex;
        flex-direction: row;
        height: 350px;
        padding: 50px;
    `}
    h2 {
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 38px;
        ${breakpoint.md`
            text-align: left;
        `}
    }
`;

export const ComingSoonColumn = styled.div`

`;

export const HeaderBreak = styled.br``;

export const ComingSoonSubtitle = styled.p`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    ${breakpoint.md`
        text-align: left;
    `}
`;

export const ComingSoonImageBlock = styled.div`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const EllipseImage = styled.div`
    bottom: -180px;
    position: absolute;
`;

export const IphoneImage = styled.div`
    position: absolute;
    bottom: 0;
`;

export const ComingSoonTextBlock = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
    width: 100%;
    ${breakpoint.md`
        justify-content: flex-start;
    `}
`;
export const ComingSoonSpan = styled.span`
    margin-right: 15px;
`;
export const ComingSoonArrowIcon = styled.img``;
export const ComingSoonText = styled.p``;