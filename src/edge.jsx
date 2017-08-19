import React from 'react';
import { PropTypes } from 'prop-types';

const Edge = props => (
  <a onClick={props.clickHandler}>
    <h1 className='edge' style={{ color: props.colour} }>
      {props.number}
    </h1>
  </a>
);

Edge.propTypes = {
  number: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default Edge;
