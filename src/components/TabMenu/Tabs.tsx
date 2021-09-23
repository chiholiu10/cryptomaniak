import { FC, useState } from "react";
import { InputField, InputLabel, TabContainer } from "./Tabs.styles";

interface TabProps {
  tabmenu: any;
}

export const Tabs: FC<TabProps> = ({ tabmenu }) => {
  const [currentCheck, setCurrentCheck] = useState(0);
  const checkId = (id: number) => {
    setCurrentCheck(id);
  };
  return (
    <div>
      {tabmenu.map((item: any, index: number) => {
        return (
          <TabContainer>
            <InputField
              type="radio"
              id={item.tabMenu}
              checked={index === currentCheck}
              onClick={() => checkId(index)}
              name={item.tabMenu}
            />
            <InputLabel htmlFor={item.tabMenu}>{item.tabMenu}</InputLabel>
          </TabContainer>
        );
      })}
    </div>
  );
};
