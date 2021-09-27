import styled from "styled-components";
import { breakpoint } from "../../styles/BreakPoint";
import theme from "../../styles/Theme";

export const SliderCard = styled.div`
    min-height: 300px;
    border-radius: 30px;
    background: white;
    overflow: hidden;
    position: relative;
    padding: 15px;
    z-index: 1;
    box-shadow: 0px 10.5106px 33.634px rgba(5, 85, 95, 0.06), 0px 8.40851px 25.2255px rgba(5, 85, 95, 0.04);
    ${breakpoint.md`
        min-height: 350px;
        padding: 25px;
    `}
    ${breakpoint.lg`
        min-height: 300px;
    `}
    img {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
`;

export const BreakpointMobile = styled.br`
    display: block;
    ${breakpoint.md`
        display: none;
    `}
`;
export const BreakpointTablet = styled.br`
    display: none;
    ${breakpoint.md`
        display: block;
    `}
`;

export const SliderContainer = styled.section`
    ${breakpoint.md`
        padding-top: 50px; 
        padding-bottom: 20px;   
    `}
    .slick-active.slick-slide-current {
        z-index: 100;
        width: 130px;
    }
    .slick-slider .slick-slide.slick-current, 
    .slick-slider .slick-slide.slick-center {
        ${breakpoint.lg`
            margin-right: 0.5%;
            margin-left: 0.5%; 
        `}
        ${SliderCard} {
            ${breakpoint.lg`
                transform: scale(1.2);
                transition: all 0.2s ease-out;
            `}
        }
    }
    .slick-slide {
        padding: 0 10px;
        ${breakpoint.xl`
            padding: 0 20px;
        `}
    }
    .slick-track {
        padding-top: 50px;
    }
    .slick-slide div {
        outline: none;
    }
`;

export const SliderCardName = styled.p`
    padding: 5px 0;
    text-transform: capitalize;
`;

export const SliderCardContent = styled.p`
    padding: 12px 0 10px;
    color: ${theme.colors.darkText};
`;

export const SliderCardImage = styled.img`
    
`;