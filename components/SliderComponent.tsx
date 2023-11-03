import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import React, { useState } from "react";
import carousel from "./SliderComponent.module.scss";

interface SlideProps {
  data: Array<{
    title?: string;
    number?: string;
    text?: string;
  }>;
  BoxComponent: React.FC<{ data: any }>;
}

const SliderComponent: React.FC<SlideProps> = ({ BoxComponent, data }) => {
  return (
    <Carousel
      align="center"
      loop={true}
      withIndicators={true}
      withControls={false}
      height="100%"
      slideSize="90%"
      classNames={carousel}
    >
      {data.map((item, index) => (
        <Carousel.Slide key={index}>
          <BoxComponent key={index} data={item} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default SliderComponent;
