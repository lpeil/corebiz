import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Dots = ({ dots, mobile }) => (
  <div className={`custom-dots ${mobile}`}>
    {dots}
  </div>
);

Dots.propTypes = {
  dots: PropTypes.node.isRequired,
  mobile: PropTypes.string,
};

Dots.defaultProps = {
  mobile: '',
};

export default Dots;
