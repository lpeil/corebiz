import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Grid } from '@material-ui/core';
import { Carousel, Product } from '../../components';

import { apiGetProducts } from '../../services/products';
import { setProducts } from '../../store/modules/products/actions';

const HomePage = () => {
  const productsStore = useSelector((state) => state.products);
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
            <h1>Mais Vendidos</h1>
          </Grid>
          <Grid item container direction="row" justify="space-around">
            {productsStore.map((product) => (
              <Grid item key={product.productId}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
