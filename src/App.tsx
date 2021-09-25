import { FC } from "react";
import { AppComponent } from "./App.styles";
import { AccordionComponent } from "./components/FAQ/Accordion";
import { ComingSoon } from "./components/ComingSoon/ComingSoon";
import { TableData } from "./components/TableData/TableData";
import { PaymentMethods } from "./components/PaymentMethods/PaymentMethods";
import { SliderComponent } from "./components/Slider/Slider";
import { Tabs } from "./components/Tabs/Tabs";

export const App: FC = () => {
  return (
    <AppComponent>
      <Tabs />
      <SliderComponent />
      <TableData />
      <PaymentMethods />
      <AccordionComponent />
      <ComingSoon />
    </AppComponent>
  );
};
