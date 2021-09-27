import styled from "styled-components";
import theme from "../../../styles/Theme";
import { breakpoint } from "../../../styles/BreakPoint";

export const DropdownWidth = `
    width: 100%;
`;

export const TableFilter = styled.div`
   ${DropdownWidth}
`;
export const TableFilterBlock = styled.div``;
export const TableFilterInput = styled.div`
    width: 100%;
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid ${theme.colors.extremeLightBlue};
`;
export const TableFilterDropdown = styled.div<{ toggleDropdown: boolean }>`
    ${DropdownWidth}
    border-radius: 8px;
    padding: 5px;
    margin-top: 5px;
    position: absolute;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.extremeLightBlue};
    display: ${(props => props.toggleDropdown ? "block" : "none")};
`;

export const TableDropdownList = styled.div`
    padding: 5px;
`;

export const TableDropdownComponent = styled.div`
    display: inline-flex;
    width: 100%;
    max-width: 400px;
    gap: 5px;
    justify-content: space-between;
    padding-bottom: 40px;
    ${breakpoint.xs`
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
        display: flex;
    `}
`;

export const TableDropdownText = styled.span`
    display: none;
    ${breakpoint.sm`
        display: flex;
        align-items: center;
        margin: 10px;
    `}
`;