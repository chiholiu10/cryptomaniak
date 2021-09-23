import styled from "styled-components";
import { breakpoint } from "../../styles/BreakPoint";

export const PaymentMethodsContainer = styled.section`
`;

export const PaymentBlock = styled.div`
    padding: 20px 0;
    ${breakpoint.xl`
        max-width: 1300px;
        margin-left: auto;
        margin-right: auto;
    `}
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
      flex: 0 0 200px;
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