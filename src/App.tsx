import { FC } from "react";
import { AppComponent } from "./App.styles";
import { AccordionComponent } from "./components/Accordion/Accordion";
import { PaymentMethods } from "./components/PaymentMethods/PaymentMethods";
import { SliderComponent } from "./components/Slider/Slider";
import { TableData } from "./components/TableData/TableData";

export const App: FC = () => {
  return (
    <AppComponent>
      <SliderComponent />
      <PaymentMethods />
      <AccordionComponent />
      <TableData />
    </AppComponent>
  );
};
