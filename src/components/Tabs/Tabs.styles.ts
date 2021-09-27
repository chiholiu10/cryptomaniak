import styled from "styled-components";
import { breakpoint } from "../../styles/BreakPoint";
import { MaxWidthDesktop } from "../../styles/GeneralStyles.styles";
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

export const TabHeaderBlock = styled.div`
  ${breakpoint.lg`
    min-height: 70px;
  `}
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
  align-items: center;
  justify-content: center;
  @media (hover: hover) and (pointer: fine) {
    cursor: pointer;
  }
  color: ${(props => props.active ? ActiveText : DeactiveText)};
`;

export const TabSpan = styled.span``;

export const TabTextAction = styled.div`
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.mediumBlue};
`;

export const TabContent = styled.div<{ checked: boolean; }>`
  margin-top: 50px;
  text-align: left;
  flex-direction: column;
  flex-wrap: wrap;
  display: ${(props => props.checked ? "flex" : "none")};
  ${breakpoint.sm`
    flex: 1;
    flex-direction: unset;
    box-sizing:border-box;
  `}
  ${breakpoint.lg`
    flex-direction: row;
    flex-wrap: unset;
  `}
  ${MaxWidthDesktop}
`;

export const TabButtonText = styled.div`
  display: flex;
  align-items: center;
  width: 140px;
  height: 43px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  user-select: none;
  color: ${theme.colors.TabButtonText};
  border: 1px solid ${theme.colors.TabButtonText};
  ${breakpoint.lg`
    margin-top: auto;
  `}
  @media (hover: hover) and (pointer: fine) {
    :hover {
      cursor: pointer;
    }
  }
`;

export const TabContentBlock = styled.div`
  max-height: 279px;
  min-height: 182px;
  max-width: 350px;
  border-radius: 25px;
  padding: 20px 25px;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (hover: hover) and (pointer: fine) {
    :hover {
      ${breakpoint.lg`
          transform: scale(1.1);
          transition: 0.1s;
        `}
        ${TabButtonText} {
          background: ${theme.colors.mediumBlue};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.mediumBlue};
        }

    }
  }
  h2 {
    text-align: left;
    padding: 25px 0 15px;
  }
  ${breakpoint.sm`
    max-height: unset;
    max-width: unset;
    flex: 50%;
  `}
   ${breakpoint.lg`
    flex: 25%;
    margin: 5px;
  `}
`;

export const TabSection = styled.section`
  ${breakpoint.lg`
     margin-left: auto;
     margin-right: auto;
    ${MaxWidthDesktop};
  `}
`;

export const TabInnerBlock = styled.div`
  margin-top: auto;
  h2 {
    ${breakpoint.lg`
      padding: 10px 0;
    `}
  }
  ${breakpoint.lg`
    flex: 1;
    display:flex; 
    flex-direction: column; 
  `}
`;


export const TabBlock = styled.div`
  display: inline-flex;
  height: 64px;
  width: 50%;
`;

export const TabContainer = `;
  200
`;

export const Subheader = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30px;
`;

export const AllTabsContainer = styled.div`
  display: block;
  padding: 6px 3px;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 10px - 10px);
  max-width: 420px;
  z-index: 1;
  border-radius: 37px;
  transition-duration: 0.6s;
  background: ${theme.colors.lightGrey};
  ${breakpoint.md`
    width: 100%;
  `}
  ${breakpoint.lg`
    margin-top: 50px;
  `}
`;

export const TabSubtitle = styled.p`
  font-weight: 400;
  font-size: 21px;
`;

export const TabContentUl = styled.ul`
  padding-top: 10px;
  margin-left:10px;
  width: 100%;
`;

export const TabContentLi = styled.li`
  line-height: 2;
`;

export const TabContentToggleMobile = styled.div`
  display: none;
  ${breakpoint.lg`
    display: block;
  `}
`;

export const TabContentAction = styled.div`
  width: 130px;
  height: 43px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-style: normal;
  flex: 1 1 auto;
  color: ${theme.colors.mediumBlue};
  background: ${theme.colors.lightBlueBorder};
`;

export const TabText = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  ${breakpoint.lg`
    flex-direction: column;
    padding-bottom: 50px;
    ${TabTextAction} {
      position: absolute;
      bottom: -10px;
    }
  `}  
`;