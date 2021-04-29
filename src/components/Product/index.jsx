import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  Paper, CardMedia, Grid, Button,
} from '@material-ui/core';

import {
  Star, StarBorder,
} from '@material-ui/icons';

import { addCartProduct } from '../../store/modules/cart/actions';
import toMoney from '../../utils/toMoney';

import './style.css';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addCartProduct(product.productId));
  };

  return (
    <Paper elevation={0} square className="product">
      <CardMedia
        image={product.imageUrl}
        title={product.productName}
      />
      <Grid container direction="column" alignItems="center" className="product-container">
        <Grid item>
          <div className="product-name">{product.productName}</div>
        </Grid>
        <Grid item>
          {[...Array(5)].map((val, key) => (
            <span key={key}>
              {
                key < product.stars
                  ? <Star color="secondary" style={{ fontSize: 14 }} />
                  : <StarBorder color="secondary" style={{ fontSize: 14 }} />
              }
            </span>
          ))}
        </Grid>
        <Grid item>
          <div className="product-list">
            <s>{product.listPrice ? `de ${toMoney(product.listPrice)}` : null}</s>
          </div>
        </Grid>
        <Grid item>
          <div className="product-price">{`por ${toMoney(product.price)}`}</div>
        </Grid>
        <Grid item>
          <div className="product-installments">
            {
              product.installments?.length
                ? `ou em ${product.installments[0].quantity}x de ${toMoney(product.installments[0].value)}`
                : null
            }
          </div>
        </Grid>
        <Grid item>
          <Button
            className="product-buy"
            variant="contained"
            disableElevation
            disableRipple={false}
            onClick={addProductToCart}
          >
            COMPRAR
          </Button>
        </Grid>
      </Grid>
      {
        product.listPrice
          ? <div className="product-off"><span>OFF</span></div>
          : null
      }
    </Paper>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    productId: PropTypes.number,
    productName: PropTypes.string,
    imageUrl: PropTypes.string,
    listPrice: PropTypes.number,
    price: PropTypes.number,
    stars: PropTypes.number,
    installments: PropTypes.array,
  }).isRequired,
};

export default Product;
