import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Hidden } from '@material-ui/core';

import './style.css';

import BannerEffect from '../../assets/carousel/bannerEffect.png';

const CarouselItem = ({ title, description, image }) => (
  <Grid container className="carousel-item">
    <div className="carousel-images">
      <div className="carousel-background">
        <img src={image} alt="Banner background" />
      </div>
      <Hidden smDown>
        <div className="carousel-effect">
          <img src={BannerEffect} alt="Banner effect" />
        </div>
      </Hidden>
      <Hidden mdUp>
        <div className="carousel-dark-effect" />
      </Hidden>
    </div>
    <div className="carousel-texts-container">
      <div className="carousel-texts">
        <span className="carousel-title">{title}</span>
        <span className="carousel-description">{description}</span>
      </div>
    </div>
  </Grid>
);

CarouselItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CarouselItem;
