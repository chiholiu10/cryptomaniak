import { FC } from "react";
import { AppComponent } from "./App.styles";
import { AccordionComponent } from "./components/Accordion/Accordion";
import { ComingSoon } from "./components/ComingSoon/ComingSoon";
import { PaymentMethods } from "./components/PaymentMethods/PaymentMethods";
import { SliderComponent } from "./components/Slider/Slider";
import { TableData } from "./components/TableData/TableData";

export const App: FC = () => {
  return (
    <AppComponent>
      <SliderComponent />
      <TableData />
      <PaymentMethods />
      <AccordionComponent />
      <ComingSoon />
    </AppComponent>
  );
};
