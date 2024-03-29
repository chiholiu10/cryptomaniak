import styled from "styled-components";
import { breakpoint } from "../../styles/BreakPoint";
import theme from "../../styles/Theme";

export const Accordion = styled.section`
  font-size: 20px;
  font-weight: 500;
  max-width: 746px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 10px;
  ${breakpoint.md`
    padding-bottom: 150px;
  `}
  h2 {
    padding-bottom: 20px;
    ${breakpoint.md`
      padding-bottom: 40px;
    `}
  }
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
  @media (hover: hover) and (pointer: fine) {
    :hover {
      cursor: pointer;
    }
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

export const OpenAccordion = `
  100px;
`;

export const CloseAccordion = `
  0px;
`;

export const AccordionContent = styled.div<{ toggle: boolean; }>`
  display: flex;
  height: auto;
  overflow: hidden;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  line-height: 25px;
  color: ${theme.colors.lightText};
  transition: all 0.5s ease-out;
  height: ${(p) => p.toggle ? OpenAccordion : CloseAccordion}; 
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


export const AccordionArrow = styled.span<{ toggle: boolean; }>`
  display: flex;
  align-items: start;
  justify-content: flex-end;
  padding-top: 5px;
  justify-content: center;
  width: 50px;
  ${AccordionIcon} {
    transition: 0.5s;
    transform: ${(p) => p.toggle ? "rotate(180deg)" : "rotate(0deg)"}; 
  }
`;

