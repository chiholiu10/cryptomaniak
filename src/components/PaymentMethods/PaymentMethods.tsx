import { FC } from "react";
import { paymentIcons } from "../../data/paymentIcons";
import { Header } from "../../styles/GeneralStyles.styles";
import {
  PaymentBlock,
  PaymentIconBlock,
  PaymentMethodsContainer,
  PaymentMethodsInnerContainer,
} from "./PaymentMethods.styles";

type IconImages = {
  image: string;
};

export const PaymentMethods: FC = () => {
  const icons = paymentIcons.map((icons: IconImages, index: number) => (
    <PaymentIconBlock>
      <img src={icons.image} />
    </PaymentIconBlock>
  ));
  return (
    <PaymentMethodsContainer>
      <Header>Payment method</Header>
      <PaymentBlock>
        <PaymentMethodsInnerContainer>{icons}</PaymentMethodsInnerContainer>
      </PaymentBlock>
    </PaymentMethodsContainer>
  );
};
