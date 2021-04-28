import React from 'react';
import Slider from 'react-slick';

import CarouselItem from './item';
import Dots from './dots';

import Banner1 from '../../assets/carousel/banner1.png';
import Banner2 from '../../assets/carousel/banner2.jpg';

const Carousel = () => (
  <Slider
    dots
    arrows={false}
    appendDots={(dots) => <Dots dots={dots} />}
  >
    <CarouselItem
      title="Olá, o que você está buscando?"
      description="Criar ou migrar seu e-commerce?"
      image={Banner1}
    />
    <CarouselItem
      title="Slide 2"
      description="Lorem ipsum dolor sit amet"
      image={Banner2}
    />
    <CarouselItem
      title="Slide 3"
      description="Lorem ipsum dolor sit amet"
      image={Banner2}
    />
    <CarouselItem
      title="Slide 4"
      description="Lorem ipsum dolor sit amet"
      image={Banner2}
    />
  </Slider>
);

export default Carousel;
