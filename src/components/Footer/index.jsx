import React from 'react';

import { Grid, Button } from '@material-ui/core';
import {
  Email as EmailIcon, HeadsetMic as HeadsetIcon,
} from '@material-ui/icons';

import CorebizLogo from '../../assets/corebiz-white.png';
import VTexLogo from '../../assets/vtex.png';

import './style.css';

const Footer = () => (
  <Grid container justify="center" className="footer">
    <Grid container item md={10} xs={11} justify="space-around">
      <Grid
        md={4}
        xs={12}
        item
        container
        direction="column"
        justify="center"
        className="footer-contact"
      >
        <h1>Localização</h1>
        <hr />
        <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
        <p>Alphaville SP</p>
        <p>brasil@corebiz.ag SP</p>
        <p>+55 11 3090 1039</p>
      </Grid>
      <Grid
        md={4}
        xs={12}
        item
        container
        justify="center"
        direction="column"
        alignItems="center"
        className="footer-buttons"
      >
        <Button startIcon={<EmailIcon />}>ENTRE EM CONTATO</Button>
        <Button startIcon={<HeadsetIcon />}>FALE COM O NOSSO CONSULTOR ONLINE</Button>
      </Grid>
      <Grid
        md={4}
        xs={12}
        item
        container
        justify="flex-end"
        alignItems="center"
        className="footer-infos"
      >
        <Grid container item xs={6} md={3} direction="column">
          <span>Created by</span>
          <img src={CorebizLogo} alt="Corebiz" />
        </Grid>
        <Grid container item xs={6} md={3} alignItems="flex-end" direction="column">
          <span>Powered by</span>
          <img src={VTexLogo} alt="vtex" />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default Footer;
