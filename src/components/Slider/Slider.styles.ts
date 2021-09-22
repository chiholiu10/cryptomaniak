import styled from "styled-components";

export const SliderInline = styled.div`
`;

export const SliderContainer = styled.section`
    .slick-active.slick-current {
        border: 1px solid red;
        transform: scale(1.3);
        z-index: 100;
        width: 130px;
    }
`;

export const SliderCard = styled.div`
    height: 250px;
    padding: 10px;
    border-radius: 20px;
    background: white;
    border: 1px solid black;
    /* overflow: hidden; */
    position: relative;
    padding: 5px;
    z-index: 1;
    img {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
`;

export const SliderInnerContainer = styled.div`

`;