import React from 'react';
import { useSelector } from 'react-redux';

import Slider from 'react-slick';
import { Product } from '../../../components';
import Arrow from '../../../components/Carousel/arrow';
import Dots from '../../../components/Carousel/dots';

import '../style.css';

const HomeProducts = () => {
  const productsStore = useSelector((state) => state.products);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
          appendDots: (dots) => <Dots dots={dots} mobile="products" />,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings} className="products-slider">
      {productsStore.map((product) => (
        <Product key={product.productId} product={product} />
      ))}
    </Slider>
  );
};

export default HomeProducts;
