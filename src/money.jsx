import React from 'react';
import { PropTypes } from 'prop-types';

const Money = props => (
  <div>
    Money £{props.amount}
  </div>
);

Money.propTypes = {
  amount: PropTypes.number.isRequired
};

export default Money;
