import styled from "styled-components";
import { breakpoint } from "../../../styles/BreakPoint";
import { MaxWidthDesktop } from "../../../styles/GeneralStyles.styles";
import theme from "../../../styles/Theme";

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DropdownFilter = styled.div`
`;

export const TableThead = styled.thead`
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  text-align: left;
  color: ${theme.colors.lightText};
  border-bottom: 1px solid ${theme.colors.lightBlueBorder};
  ${breakpoint.sm`
    font-size: 16px;
  `}
`;

export const TableComponent = styled.div`
  ${breakpoint.lg`
    ${MaxWidthDesktop};
    margin-left: auto;
    margin-right: auto;
  `}
`;

export const TableTr = styled.tr`
  height: 50px;
`;

export const Breakpoint = styled.br`
  display: block;
  ${breakpoint.md`
    display: none;
  `}
`;

export const TableContainer = styled.table`
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
  overflow-x: auto;
  white-space: nowrap;
  display: block;
  overflow-x: scroll;
  ${breakpoint.md`
      display: unset;
      overflow-x: unset;
  `}
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  padding: 20px 0 30px;
  color: ${theme.colors.lightText};
`;

export const TableTd = styled.td`
  padding: 10px 10px 10px 0;
  img {
    width: 20px;
    ${breakpoint.sm`
      width: 30px;
    `}
  }
  &:nth-child(n + 2) {  
    width: 200px;
  }
  &:nth-child(1) {  
    width: 450px;
  }
`;

export const TableTbody = styled.tbody`
  font-size: 12px;
  ${breakpoint.sm`
    font-size: 16px;
  `}
`;