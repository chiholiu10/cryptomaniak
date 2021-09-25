import styled from "styled-components";
import { breakpoint } from "../../styles/BreakPoint";

export const SliderCard = styled.div`
    min-height: 250px;
    border-radius: 30px;
    background: white;
    border: 1px solid black;
    position: relative;
    padding: 15px;
    z-index: 1;
    ${breakpoint.md`
        min-height: 300px;
        padding: 25px;
    `}
    ${breakpoint.lg`
        min-height: 320px;
    `}
    img {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
`;

export const SliderContainer = styled.section`
    height: 400px;
    padding-top: 50px;
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
`;

export const SliderCardImage = styled.img`
    
`;