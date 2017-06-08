import React from 'react';
import { PropTypes } from 'prop-types';

const Money = props => (
  <div className="money">
    <a className="reset" onClick={props.resetMoney}>X </a>
    <span className="label">Money</span> £{props.amount}
  </div>
);

Money.propTypes = {
  amount: PropTypes.number.isRequired,
  resetMoney: PropTypes.func.isRequired
};

export default Money;
