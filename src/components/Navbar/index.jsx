import React from 'react';
import { useSelector } from 'react-redux';
import { Debounce } from 'react-throttle';
import { useHistory, Link } from 'react-router-dom';

import {
  Grid, Input, InputAdornment, Button, Badge, Hidden,
} from '@material-ui/core';
import {
  Search as SearchIcon, PersonOutline as PersonIcon, ShoppingCartOutlined as CartIcon,
} from '@material-ui/icons';

import CorebizLogo from '../../assets/logo.svg';

import './style.css';

const Navbar = () => {
  const cartStore = useSelector((state) => state.cart);
  const history = useHistory();

  const searchContent = (e) => {
    const searchValue = e.target.value;

    if (searchValue) {
      return history.push(`/search/${searchValue}`);
    }

    return history.push('/');
  };

  return (
    <Grid container justify="center" className="navbar">
      <Grid container item xs={10} justify="space-around" alignItems="center">
        <Grid item xs={2}>
          <Link to="/" replace>
            <img src={CorebizLogo} alt="Corebiz Logo" className="navbar-logo" />
          </Link>
        </Grid>
        <Grid item container xs={6} lg={7}>
          <Debounce time="1000" handler="onChange">
            <Input
              placeholder="O que está procurando?"
              fullWidth
              onChange={searchContent}
              endAdornment={(
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              )}
            />
          </Debounce>
        </Grid>
        <Hidden mdDown>
          <Grid item xs={2} lg={1}>
            <Button startIcon={<PersonIcon />} className="my-account">Minha Conta</Button>
          </Grid>
        </Hidden>
        <Grid item xs={1}>
          <Badge badgeContent={cartStore?.products?.length} color="secondary">
            <CartIcon />
          </Badge>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
