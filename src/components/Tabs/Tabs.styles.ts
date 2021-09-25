import styled from "styled-components";
import { breakpoint } from "../../styles/BreakPoint";
import theme from "../../styles/Theme";

export const TabSelector = styled.div<{ currentTab: number; }>`
  height: 64px;
  display: inline-block;
  position: absolute;
  vertical-align: middle;
  z-index: 1;
  transition-duration: 0.6s;
  border-radius: 37px;
  box-shadow: 0px 10px 32px rgba(5, 85, 95, 0.06), 0px 8px 24px rgba(5, 85, 95, 0.04);
  width: 49%;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  background: ${theme.colors.white};
  ${(props => props.currentTab === 0 ? "left: 8px" : "left: 49%")}
`;


export const ActiveText = `
  ${theme.colors.mediumBlue};
`;

export const DeactiveText = `
  ${theme.colors.defaultText};
`;

export const TabAnchor = styled.a<{ active: boolean; }>`
  text-decoration: none;
  text-transform: uppercase;
  display: inline-flex;
  position: relative;
  z-index: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  transition-duration: 0.6s;
  width: 100%;
  display: flex;
  align-item: center;
  justify-content: center;
  color: ${(props => props.active ? ActiveText : DeactiveText)};
`;

export const TabSpan = styled.span`

  `;

export const TabContent = styled.div<{ checked: boolean; }>`;
  margin-top: 100px;
  display: ${(props => props.checked ? "block" : "none")};
`;

export const TabSection = styled.section`

  `;

export const TabBlock = styled.div`;
  display: inline-flex;
  height: 64px;
  width: 50%;
`;

export const TabContainer = `;
  200
`;

export const AllTabsContainer = styled.div`;
  display: inline-block;
  padding: 6px 3px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 420px;
  z-index: 1;
  border-radius: 37px;
  transition-duration: 0.6s;
  background: ${theme.colors.lightGrey};
  h2 {
    font-size: 32px;
    line-height: 38px;
    font-style: normal;
    font-weight: 500;
    ${breakpoint.md`
      font-size: 75px;
      line-height: 78px;
    `}
  }
`;

export const TabContentBlock = styled.div`
  border: 1px solid red;
`;