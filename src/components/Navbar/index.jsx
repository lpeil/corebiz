import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Debounce } from 'react-throttle';
import { useHistory, Link } from 'react-router-dom';

import {
  Grid,
  Input,
  InputAdornment,
  Button,
  Badge,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Search as SearchIcon,
  PersonOutline as PersonIcon,
  ShoppingCartOutlined as CartIcon,
  Menu as MenuIcon,
} from '@material-ui/icons';

import {
  changeDrawerCart, removeCartProduct, decreaseCartProduct, addCartProduct,
} from '../../store/modules/cart/actions';
import toMoney from '../../utils/toMoney';

import CorebizLogo from '../../assets/corebiz-black.png';

import './style.css';

const SearchInput = ({ onChange }) => (
  <Debounce time="1000" handler="onChange">
    <Input
      placeholder="O que está procurando?"
      fullWidth
      onChange={onChange}
      endAdornment={(
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      )}
    />
  </Debounce>
);

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

const Navbar = () => {
  const dispatch = useDispatch();
  const [leftMenu, setLeftMenu] = useState(false);
  const cartStore = useSelector((state) => state.cart);
  const productsStore = useSelector((state) => state.products);
  const history = useHistory();

  const searchContent = (e) => {
    const searchValue = e.target.value;

    if (searchValue) {
      return history.push(`/search/${searchValue}`);
    }

    return history.push('/');
  };

  const toggleDrawer = (drawer, open) => () => {
    if (drawer === 'cart') {
      dispatch(changeDrawerCart(open));
    } else {
      setLeftMenu(open);
    }
  };

  const MenuCart = () => (
    <div
      className="side-menu menu-cart"
      role="presentation"
      onKeyDown={toggleDrawer('cart', false)}
    >
      <h1>Carrinho</h1>
      {
        cartStore?.products.length
          ? (
            <div>
              <div className="menu-product-list">
                {cartStore?.products?.map((cart) => {
                  const product = productsStore.filter((p) => p.productId === cart.id)?.[0];
                  return (
                    <div className="menu-product" key={cart.id}>
                      <div className="menu-product-content">
                        <img src={product?.imageUrl} alt="Produto" />
                        <div className="menu-product-infos">
                          <h4>{product?.productName}</h4>
                          <span>{toMoney(product?.price)}</span>
                        </div>
                      </div>
                      <div className="menu-product-actions">
                        <div className="menu-product-quantity">
                          <span>{`Qtd: ${cart.quantity}`}</span>
                          <button
                            type="button"
                            onClick={() => dispatch(addCartProduct(cart.id))}
                          >
                            +
                          </button>
                          <button
                            type="button"
                            onClick={() => dispatch(decreaseCartProduct(cart.id))}
                          >
                            -
                          </button>
                        </div>
                        <button
                          type="button"
                          className="menu-product-remove"
                          onClick={() => dispatch(removeCartProduct(cart.id))}
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                onClick={toggleDrawer('cart', false)}
              >
                Finalizar Compra
              </Button>
            </div>
          )
          : (
            <div className="empty-cart">
              <span>Seu carrinho</span>
              <span>está vázio :(</span>
            </div>
          )
      }
    </div>
  );

  const LeftMenu = () => (
    <div
      className="side-menu"
      role="presentation"
      onKeyDown={toggleDrawer('left', false)}
    >
      <List>
        <ListItem button key="Minha Conta">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Minha Conta" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <Grid container justify="center" className="navbar">
        <Grid container item xs={11} md={10} justify="space-between" alignItems="center">
          <Hidden mdUp>
            <Grid item xs={2}>
              <MenuIcon
                style={{ fontSize: 30 }}
                onClick={toggleDrawer('left', true)}
              />
            </Grid>
          </Hidden>
          <Grid container item xs={6} md={3} className="navbar-logo-container">
            <Link to="/" replace>
              <img src={CorebizLogo} alt="Corebiz Logo" className="navbar-logo" />
            </Link>
          </Grid>
          <Hidden smDown>
            <Grid item container md={5}>
              <SearchInput onChange={searchContent} />
            </Grid>
          </Hidden>
          <Grid container item xs={2} md={4} lg={4} alignItems="center" justify="flex-end">
            <Hidden smDown>
              <Grid container item xs={6} justify="flex-end">
                <Button startIcon={<PersonIcon />} className="my-account">Minha Conta</Button>
              </Grid>
            </Hidden>
            <Grid container item xs={12} md={2} justify="flex-end">
              <Badge
                badgeContent={cartStore?.products?.length}
                color="secondary"
                onClick={toggleDrawer('cart', true)}
                className="cart-icon"
              >
                <CartIcon />
              </Badge>
            </Grid>
          </Grid>
        </Grid>
        <Hidden mdUp>
          <Grid container item xs={11} justify="center">
            <SearchInput onChange={searchContent} />
          </Grid>
        </Hidden>
      </Grid>
      <React.Fragment key="right">
        <Drawer
          anchor="right"
          open={cartStore?.drawer}
          onClose={toggleDrawer('cart', false)}
        >
          <MenuCart />
        </Drawer>
      </React.Fragment>
      <React.Fragment key="left">
        <Drawer
          anchor="left"
          open={leftMenu}
          onClose={toggleDrawer('left', false)}
        >
          <LeftMenu />
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default Navbar;
