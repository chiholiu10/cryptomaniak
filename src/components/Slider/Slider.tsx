import { FC } from "react";
import Slider from "react-slick";
import { sliderData } from "../../data/review";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from "react-stars";
import {
  SliderCard,
  SliderCardContent,
  SliderCardName,
  SliderContainer,
  SliderCardImage,
  BreakpointMobile,
  BreakpointTablet,
} from "./Slider.styles";
import { Header } from "../../styles/GeneralStyles.styles";

export const SliderComponent: FC = () => {
  const settings = {
    speed: 400,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  type ItemTypes = {
    name: string;
    rating: number;
    content: string;
    backgroundImage: string;
  };

  return (
    <SliderContainer>
      <Header>What successful <BreakpointMobile /> traders <BreakpointTablet />say about <BreakpointMobile /> cryptohopper</Header>
      <Slider {...settings}>
        {sliderData.map((item: ItemTypes, index: number) => (
          <SliderCard key={index}>
            <SliderCardName>{item.name}</SliderCardName>

            <ReactStars
              count={5}
              value={item.rating}
              size={20}
              color1={"#ffd700"}
              edit={false}
            />
            <SliderCardContent>{item.content}</SliderCardContent>
            <SliderCardImage src={item.backgroundImage} />
          </SliderCard>
        ))}
      </Slider>
    </SliderContainer>
  );
};
