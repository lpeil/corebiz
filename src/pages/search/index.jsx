import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Grid } from '@material-ui/core';
import { Product } from '../../components';

import { apiGetProducts } from '../../services/products';
import { setProducts } from '../../store/modules/products/actions';

import './style.css';

const SearchPage = () => {
  const { searched } = useParams();
  const dispatch = useDispatch();
  const productsStore = useSelector((state) => state.products);
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    apiGetProducts().then((data) => {
      dispatch(setProducts(data));
    });
  }, []);

  useEffect(() => {
    const filteredProducts = productsStore.filter(
      (product) => product.productName.toLowerCase().includes(searched.toLowerCase()),
    );

    setSearchedProducts(filteredProducts);

    return true;
  }, [productsStore, searched]);

  return (
    <Grid container justify="center" className="search-page">
      <Grid
        xs={11}
        md={10}
        item
        container
        justify="space-around"
        direction="row"
      >
        {
          searchedProducts.length
            ? searchedProducts.map((product) => (
              <Grid key={product.productId}>
                <Product product={product} />
              </Grid>
            ))
            : <h1>Produto não encontrado</h1>
        }
      </Grid>
    </Grid>
  );
};

export default SearchPage;
