import { FC } from "react";
import { AppComponent } from "./App.styles";
import { AccordionComponent } from "./components/FAQ/Accordion";
import { ComingSoon } from "./components/ComingSoon/ComingSoon";
import { TableData } from "./components/TableData/TableData";
import { PaymentMethods } from "./components/PaymentMethods/PaymentMethods";
import { SliderComponent } from "./components/Slider/Slider";
import { TabMenu } from "./components/TabMenu/TabMenu";

export const App: FC = () => {
  return (
    <AppComponent>
      <TabMenu />
      <SliderComponent />
      <TableData />
      <PaymentMethods />
      <AccordionComponent />
      <ComingSoon />
    </AppComponent>
  );
};
