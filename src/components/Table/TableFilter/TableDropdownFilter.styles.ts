import styled from "styled-components";
import theme from "../../../styles/Theme";

export const DropdownWidth = `
    width: 100%;  
    max-width: 175px;
`;

export const TableFilter = styled.div`
   ${DropdownWidth}
`;

export const TableFilterBlock = styled.div``;

export const TableArrow = styled.img`
    position: absolute;
    right: 15px;
`;

export const TableFilterInput = styled.div<{ openDropdown: boolean }>`
    width: 100%;
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;
    border-radius: 8px;
    user-select: none; 
    position: relative;
    @media (hover: hover) and (pointer: fine) {
        cursor: pointer;
    }
    border: 1px solid ${theme.colors.extremeLightBlue};
    ${TableArrow} {
        width: 6px;
        transition: 0.6s;
        transform: ${(p) => p.openDropdown ? "rotate(180deg)" : "rotate(0deg)"}; 
    }
`;

export const TableFilterDropdown = styled.div<{ toggleDropdown: boolean }>`
    ${DropdownWidth}
    border-radius: 8px;
    margin-top: 5px;
    position: absolute;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.extremeLightBlue};
    @media (hover: hover) and (pointer: fine) {
        cursor: pointer;
    }
    display: ${(props => props.toggleDropdown ? "block" : "none")};
`;

export const TableDropdownOption = styled.div`
    border-radius: 8px;
    text-indent: 10px;
    padding: 5px;
     @media (hover: hover) and (pointer: fine) {
         :hover {
            background: ${theme.colors.extremeLightBlue};
         }

    }
`;

export const TableDropdownList = styled.div`
    padding: 5px;
`;