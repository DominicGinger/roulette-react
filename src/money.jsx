import React from 'react';
import { PropTypes } from 'prop-types';

const Money = props => (
  <div className='row mb-4' >
    <div className='col' >
      <button onClick={props.resetMoney} type="button" className="btn btn-danger">
        Reset
      </button>
    </div>
    <div className='col-6 col-md-auto' >
      <span className="input-group">
        <span className="input-group-addon" id="basic-addon1">£</span>
        <input style={{ userSelect: 'none' }} type="number" readOnly="true" value={props.amount} className="form-control" />
      </span>
    </div>
  </div>
);

Money.propTypes = {
  amount: PropTypes.number.isRequired,
  resetMoney: PropTypes.func.isRequired
};

export default Money;
