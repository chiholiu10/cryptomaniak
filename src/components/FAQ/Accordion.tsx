import { FC, useState } from "react";
import {
  Accordion,
  AccordionCard,
  AccordionLabel,
  AccordionContent,
  AccordionTabText,
  AccordionBlock,
  AccordionTextBlock,
  AccordionArrow,
  AccordionIcon,
} from "./Accordion.styles";
import { accordionText } from "../../data/accordionText";
import { Header } from "../../styles/GeneralStyles.styles";

export const AccordionComponent: FC = () => {
  const [isOpen, setOpen] = useState<boolean | number>(0);

  const toggleAccordion = (event: any, currentIndex: number) => {
    event.preventDefault();
    if (isOpen === currentIndex) {
      return setOpen(true);
    }
    setOpen(currentIndex);
  };

  return (
    <Accordion>
      <Header>FAQ</Header>
      <AccordionCard>
        {accordionText.map(({ title, content }, index: number) => (
          <AccordionBlock key={index}>
            <AccordionLabel
              toggleColor={isOpen === index}
              onClick={(event) => toggleAccordion(event, index)}
            >
              <AccordionTabText>{title}</AccordionTabText>
              <AccordionArrow toggle={isOpen === index}>
                <AccordionIcon src="images/arrow.png" alt="arrow-icon" />
              </AccordionArrow>
            </AccordionLabel>
            <AccordionContent toggle={isOpen === index}>
              <AccordionTextBlock>{content}</AccordionTextBlock>
            </AccordionContent>
          </AccordionBlock>
        ))}
      </AccordionCard>
    </Accordion>
  );
};
