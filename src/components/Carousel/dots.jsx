import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Dots = ({ dots, mobile }) => (
  <div className={`custom-dots ${mobile ? 'mobile' : ''}`}>
    {dots}
  </div>
);

Dots.propTypes = {
  dots: PropTypes.node.isRequired,
  mobile: PropTypes.bool,
};

Dots.defaultProps = {
  mobile: false,
};

export default Dots;
