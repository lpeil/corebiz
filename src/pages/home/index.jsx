import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Grid } from '@material-ui/core';
import { Carousel } from '../../components';
import HomeProducts from './components/products';

import { apiGetProducts } from '../../services/products';
import { setProducts } from '../../store/modules/products/actions';

import './style.css';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    apiGetProducts().then((data) => {
      dispatch(setProducts(data));
    });
  }, []);

  return (
    <div>
      <Carousel />
      <Grid container justify="center">
        <Grid item container xs={9} direction="column">
          <Grid item>
            <h1 className="products-title">Mais Vendidos</h1>
          </Grid>
          <Grid item xs={12}>
            <HomeProducts />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
