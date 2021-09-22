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
} from "./Slider.styles";

export const SliderComponent: FC = () => {
  const settings = {
    speed: 200,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
      <Slider {...settings}>
        {sliderData.map((item: ItemTypes, index: number) => (
          <SliderCard key={index}>
            <SliderCardName>{item.name}</SliderCardName>

            <ReactStars
              count={5}
              value={item.rating}
              size={20}
              color2={"#ffd700"}
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
