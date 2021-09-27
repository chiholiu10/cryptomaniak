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
  EllipseTextImageMobile,
  EllipseTextImageTablet,
  HeaderBreak,
  ImageEllipse,
  IphoneImage,
  MobileImage,
  TabletImage,
  TabletWatchImage,
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
            <ComingSoonArrowIcon src="images/arrow-btn.png" alt="arrow-icon" />
          </ComingSoonSpan>
          <ComingSoonText>Let's get started</ComingSoonText>
        </ComingSoonTextBlock>
      </ComingSoonColumn>
      <ComingSoonColumn>
        <ComingSoonImageBlock>
          <EllipseImage>
            <ImageEllipse>
              <EllipseTextImageMobile src="images/coming-soon-text-mobile.png" />
              <EllipseTextImageTablet src="images/coming-soon-text-tablet.png" />
            </ImageEllipse>
          </EllipseImage>
          <IphoneImage>
            <MobileImage src="images/iphone-app.png" alt="iphone-app" />
            <TabletImage src="images/iphone-app-tablet.png" alt="iphone-app" />

            <TabletWatchImage src="images/apple-watch.png" alt="apple-watch" />
          </IphoneImage>
        </ComingSoonImageBlock>
      </ComingSoonColumn>
    </CompongSoonInnerContainer>
  </ComingSoonContainer>
);
