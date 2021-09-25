import { FC, useState } from "react";
import { Tab } from "../../data/tab";
import { Header } from "../../styles/GeneralStyles.styles";
import { TabAnchor, TabSection, TabSelector, TabContent, TabBlock, AllTabsContainer, TabSpan } from "./Tabs.styles";

export const Tabs: FC = () => {
  const [checkTab, setCheckTab] = useState<number>(0);

  const allTabs = Tab.map((item, index) => (
    <TabBlock key={index}>
      <TabAnchor
        id={item.tabMenu}
        active={index === checkTab}
        onClick={() => setCheckTab(index)}>
        <TabSpan>{item.tabMenu}</TabSpan>
      </TabAnchor>
    </TabBlock>));

  const allTabContent = Tab.map((item, index) => (
    <TabContent id={item.tabMenu} checked={index === checkTab} >
      {item.plans.map((plan) => (
        <div key={plan.id}>
          {plan.title && <div>{plan.title}</div>}
          {plan.subtitle && <div>{plan.subtitle}</div>}
          {plan.list && <ul>{plan.list.map((item: any) => (
            <li>{item.list}</li>
          ))}</ul>}
          {/* {plan} */}
        </div>

      ))}
    </TabContent>
  ));

  return (
    <TabSection>
      <Header>Pricing</Header>
      <AllTabsContainer>
        <TabSelector currentTab={checkTab} />
        {allTabs}
      </AllTabsContainer>
      <div>
        {allTabContent}
      </div>
    </TabSection>
  );
};