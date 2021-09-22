import { FC } from "react";
import Slider from "react-slick";
import { createSolutionBuilderHost } from "typescript";
import { sliderData } from "../../data/review";
import {
  SliderCard,
  SliderContainer,
  SliderInline,
  SliderInnerContainer,
} from "./Slider.styles";

export const SliderComponent: FC = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
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
            <div>{item.name}</div>
            <div>{item.rating}</div>
            <div>{item.content}</div>
            <img src={item.backgroundImage} />
          </SliderCard>
        ))}
      </Slider>
    </SliderContainer>
  );
};
