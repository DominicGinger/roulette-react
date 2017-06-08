import React from 'react';
import { PropTypes } from 'prop-types';

const Edge = props => (
  <a onClick={props.clickHandler}>
    <div className='edge' style={{ color: props.colour} }>
      {props.number}
    </div>
  </a>
);

Edge.propTypes = {
  number: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default Edge;
