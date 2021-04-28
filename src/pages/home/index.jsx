import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Grid } from '@material-ui/core';
import Slider from 'react-slick';
import { Carousel, Product } from '../../components';
import Arrow from '../../components/Carousel/arrow';

import { apiGetProducts } from '../../services/products';
import { setProducts } from '../../store/modules/products/actions';

import './style.css';

const HomePage = () => {
  const productsStore = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    apiGetProducts().then((data) => {
      dispatch(setProducts(data));
    });
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
  };

  return (
    <div>
      <Carousel />
      <Grid container justify="center">
        <Grid item container xs={9} direction="column">
          <Grid item>
            <h1>Mais Vendidos</h1>
          </Grid>
          <Grid item xs={12}>
            <Slider {...sliderSettings} className="products-slider">
              {productsStore.map((product) => (
                <Product key={product.productId} product={product} />
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
