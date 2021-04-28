import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

import './style.css';

import BannerEffect from '../../assets/carousel/bannerEffect.png';

const CarouselItem = ({ title, description, image }) => (
  <Grid container className="carousel-item">
    <Grid container item direction="row-reverse">
      <Grid item className="carrousel-background">
        <img src={image} alt="Banner background" />
      </Grid>
      <Grid item xs={6} className="carrousel-effect">
        <img src={BannerEffect} alt="Banner effect" />
      </Grid>
    </Grid>
    <Grid container item justify="center" className="carousel-texts">
      <Grid container item xs={9} justify="center" direction="column">
        <Grid item xs={5} className="carousel-title">
          <span>{title}</span>
        </Grid>
        <Grid item xs={4} className="carousel-description">
          <span>{description}</span>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

CarouselItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CarouselItem;
