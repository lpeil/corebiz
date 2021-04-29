import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Debounce } from 'react-throttle';
import { useHistory, Link } from 'react-router-dom';

import {
  Grid, Input, InputAdornment, Button, Badge, Hidden,
} from '@material-ui/core';
import {
  Search as SearchIcon,
  PersonOutline as PersonIcon,
  ShoppingCartOutlined as CartIcon,
  Menu as MenuIcon,
} from '@material-ui/icons';

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
      <Grid container item xs={11} md={10} justify="space-between" alignItems="center">
        <Hidden mdUp>
          <Grid item xs={2}>
            <MenuIcon style={{ fontSize: 30 }} />
          </Grid>
        </Hidden>
        <Grid container item xs={6} md={3} justify="center">
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
            <Badge badgeContent={cartStore?.products?.length} color="secondary">
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
  );
};

export default Navbar;
