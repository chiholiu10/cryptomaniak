import { FC, useState } from "react";
import { Tab } from "../../data/tab";
import { Header } from "../../styles/GeneralStyles.styles";
import { TabAnchor, TabSection, TabSelector, TabContent, TabBlock, AllTabsContainer, TabSpan, TabContentBlock, TabSubtitle, TabContentToggleMobile, TabContentAction, TabText, TabButtonText, TabTextAction, Subheader, TabInnerBlock, TabHeaderBlock, TabContentUl, TabContentLi } from "./Tabs.styles";

export const Tabs: FC = () => {
  const [checkTab, setCheckTab] = useState<number>(0);

  type Nullable<T> = T | null;

  type PlanTypes = {
    id: number,
    title: string,
    subtitle: string,
    list: Array<string>,
    buttonText: Nullable<string>,
    priceAction: Nullable<string>,
    actionTitle: Nullable<string>
  }

  type TabTypes = {
    tabMenu: string,
    id: number,
    plans: PlanTypes[];
  };

  const allTabs = Tab.map((item: TabTypes, index: number) => (
    <TabBlock key={index}>
      <TabAnchor
        id={item.tabMenu}
        active={index === checkTab}
        onClick={() => setCheckTab(index)}>
        <TabSpan>{item.tabMenu}</TabSpan>
      </TabAnchor>
    </TabBlock>));

  const allTabContent = Tab.map((item: TabTypes, index: number) => (
    <TabContent id={item.tabMenu} key={index} checked={index === checkTab} >
      {item.plans.map((plan: PlanTypes) => (
        <TabContentBlock key={plan.id}>
          <TabHeaderBlock>
            {plan.actionTitle && <TabContentAction>{plan.actionTitle}</TabContentAction>}
          </TabHeaderBlock>
          <TabInnerBlock>
            {plan.title && <Header>{plan.title}</Header>}
            <TabText>
              {plan.subtitle && <TabSubtitle>{plan.subtitle}</TabSubtitle>}
              <TabContentToggleMobile>
                {plan.list && <TabContentUl>{plan.list.map((item: string, index: number) => (
                  <TabContentLi key={index}>{item}</TabContentLi>
                ))}</TabContentUl>}
              </TabContentToggleMobile>
              <TabTextAction>{plan.priceAction}</TabTextAction>
            </TabText>
            <TabButtonText>{plan.buttonText}</TabButtonText>
          </TabInnerBlock>
        </TabContentBlock>
      ))}
    </TabContent>
  ));

  return (
    <TabSection>
      <Header>Pricing</Header>
      <Subheader>Become a member &amp; join over 300.000 other Hoppers today! Cryptohopper is free to use, create your free account now!
      </Subheader>
      <AllTabsContainer>
        <TabSelector currentTab={checkTab} />
        {allTabs}
      </AllTabsContainer>
      {allTabContent}
    </TabSection>
  );
};