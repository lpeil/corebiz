import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Dots = ({ dots }) => (<div className="custom-dots">{dots}</div>);

Dots.propTypes = {
  dots: PropTypes.node.isRequired,
};

export default Dots;
