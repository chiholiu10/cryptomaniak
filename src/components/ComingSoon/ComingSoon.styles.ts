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
        padding: 50px 50px 0;
    `}
    h2 {
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 38px;
        ${breakpoint.md`
            font-size: 26px;
            text-align: left;
            padding: 30px 0;
        `}
        ${breakpoint.lg`
            font-size: 32px;
        `}
    }
`;

export const ComingSoonColumn = styled.div`
    flex: 50%;
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
    ${breakpoint.md`
        display: block;
        position: relative;
        height: 100%;
    `}
`;

export const ImageMobile = styled.img`
    width: 100%;
    z-index: 100;
`;
export const ImageTablet = styled.img``;

export const MobileImage = styled.img``;
export const TabletImage = styled.img``;
export const TabletWatchImage = styled.img``;

export const EllipseImage = styled.div`
    bottom: -180px;
    position: absolute;
    ${ImageMobile} {
        ${breakpoint.md`
            bottom: unset;
            display: none;
        `}
    }
    ${breakpoint.md`
        bottom: unset;
    `}
`;

export const EllipseTextImageMobile = styled.img`
    width: 100px;
    margin-top: -50px;
    ${breakpoint.md`
       display: none;
    `}
`;

export const EllipseTextImageTablet = styled.img`
    display: none;
    ${breakpoint.md`
       display: block;
    `}
`;


export const ImageEllipse = styled.div`
    width: 195px;
    height: 195px;
    background: ${theme.colors.white};
    border-radius: 50%;
    position: relative;
    top: -430px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    ${breakpoint.md`
        left: -50px;
        top: 0px;
    `} 
`;

export const IphoneImage = styled.div`
    position: absolute;
    bottom: 0;
    ${MobileImage} {
        ${breakpoint.md`
            display: none;
        `}
    }
    ${TabletImage}, 
    ${TabletWatchImage} {
        display: none;
        width: 100%;
        max-width: 300px;
        margin-left: 100px;
        ${breakpoint.md`
            display: block;
        `}
    }
    ${TabletWatchImage} {
        position: absolute;
        top: 100px;
        right: -100px;
        width: 100%;
        max-width: 200px;
    }
`;

export const CompongSoonInnerContainer = styled.div`
    ${breakpoint.md`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    `}
    ${breakpoint.lg`
        width: 1200px;
        margin-left: auto;
        margin-right: auto;
    `}
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