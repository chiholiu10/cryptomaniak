import styled from "styled-components";
import { breakpoint } from "../../styles/BreakPoint";
import { MaxWidthDesktop } from "../../styles/GeneralStyles.styles";

export const PaymentMethodsContainer = styled.section`
    ${breakpoint.lg`
        ${MaxWidthDesktop};
        margin-left: auto;
        margin-right: auto;
    `}
    h2 {
        padding-top: 30px;
        ${breakpoint.md`
            padding-top: 0;
        `}

    }
`;

export const PaymentBlock = styled.div`
    padding: 20px 0;
`;

export const PaymentIconBlock = styled.div`
    border-radius: 20px;
    height: 82px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 49%;
    margin-bottom: 8px;
    flex-direction: row;
    ${breakpoint.md`
        flex: 0 32%;
    `}
    ${breakpoint.lg`
        flex: 0 0 16%;
    `}
`;

export const PaymentMethodsInnerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${breakpoint.lg`
        display: flex;
        justify-content: space-between;
    `}
`;