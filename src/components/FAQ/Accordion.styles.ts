import styled from "styled-components";
import { breakpoint } from "../../styles/BreakPoint";
import theme from "../../styles/Theme";

export const Accordion = styled.section`
  font-size: 20px;
  font-weight: 500;
  max-width: 746px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 0;
`;

export const AccordionCard = styled.div`
  background: transparent;
  width: 100%;
`;

export interface LabelProps {
  toggleColor: boolean;
}

export const AccordionLabel = styled.div<LabelProps>`
  display: inline-flex;
  flex-wrap: nowrap;
  width: 100%;
  :hover {
    cursor: pointer;
  }
`;

export const AccordionBlock = styled.div`
  display: block;
  position: relative;
  padding-bottom: 20px;
`;

export const AccordionBackground = styled.div`
  background-color: transparent;
`;
export const AccordionBackgroundDefault = styled.div`
`;

export const Block = `
  display: block;
  opacity: 1;
  height: auto;
  position: relative;
  z-index: 1;
  padding: 10px 0;
`;

export const None = `
  display: none;
  // opacity: 0;
  height: 0;
  z-index: -10;
`;

export const AccordionContent = styled.div<{toggle: boolean}>`
  display: flex;
  height: auto;
  overflow: hidden;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  line-height: 25px;
  color: ${theme.colors.lightText};
  display: ${(p: any) => p.toggle ? Block: None};
`;

export const AccordionTextBlock = styled.div`
  text-align: left;
  font-size: 16px;
`;

export const AccordionTabText = styled.p`
  font-weight: 500;
  font-style: normal;
  font-size: 18px;
  line-height: 31px;
  flex: 1;
  ${breakpoint.lg`
      font-size: 24px;
  `}
`;

export const AccordionIcon = styled.img`

`;


export const AccordionArrow = styled.span<{toggle: boolean}>`
  display: flex;
  align-items: start;
  justify-content: flex-end;
  padding-top: 5px;
  justify-content: center;
  width: 50px;
  ${AccordionIcon} {
    transition: 0.5s;
    transform: ${(p: any) => p.toggle ? "rotate(180deg)" : "rotate(0deg)"}; 
  }
`;

