import { FC } from "react";
import { Header } from "../../styles/GeneralStyles.styles";
import {
  ComingSoonArrowIcon,
  ComingSoonColumn,
  ComingSoonContainer,
  ComingSoonImageBlock,
  ComingSoonSpan,
  ComingSoonSubtitle,
  ComingSoonText,
  ComingSoonTextBlock,
  CompongSoonInnerContainer,
  EllipseImage,
  HeaderBreak,
  IphoneImage,
} from "./ComingSoon.styles";

export const ComingSoon: FC = () => (
  <ComingSoonContainer>
    <CompongSoonInnerContainer>
      <ComingSoonColumn>
        <Header>
          Start trading with <HeaderBreak />
          Cryptohopper for free!
        </Header>
        <ComingSoonSubtitle>
          Free to use - no credit required
        </ComingSoonSubtitle>
        <ComingSoonTextBlock>
          <ComingSoonSpan>
            <ComingSoonArrowIcon src="images/arrow_btn.png" alt="arrow-icon"/>
          </ComingSoonSpan>
          <ComingSoonText>Let's get started</ComingSoonText>
        </ComingSoonTextBlock>
      </ComingSoonColumn>
      <ComingSoonColumn>
        <ComingSoonImageBlock>
          <EllipseImage>
            <img src="images/ellipse.png" alt="ellipse"/>
          </EllipseImage>
          <IphoneImage>
            <img src="images/iphone_app.png" alt="iphone-app"/>
          </IphoneImage>
        </ComingSoonImageBlock>
      </ComingSoonColumn>
    </CompongSoonInnerContainer>
  </ComingSoonContainer>
);
