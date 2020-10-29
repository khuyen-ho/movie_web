import React from "react";
import CarouselUI from "react-material-ui-carousel";
import CarouselItem from "../CarouselItem";
import { useSelector } from "react-redux";

export default function Carousel() {
  const banners = useSelector((state) => state.banners);
  return (
    <CarouselUI
      indicator={false}
      navButtonsAlwaysVisible={false}
      animation="slide"
      interval="5000"
      indicators={false}
      autoPlay={true}
      fullHeightHover={false}
    >
      {banners.map((banner, index) => (
        <CarouselItem key={index} banner={banner} />
      ))}
    </CarouselUI>
  );
}
