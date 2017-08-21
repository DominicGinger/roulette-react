import React from 'react';
import { PropTypes } from 'prop-types';

const Edge = props => (
  <div className="spinner jumbotron row justify-content-md-center" onClick={props.clickHandler} >
    <div className='col-md-auto'>
      <h1 className='text-center text-md-right' style={{ color: props.colour, fontSize: '100px', userSelect: 'none'}}>
        {props.number}
      </h1>
    </div>
  </div>
);

Edge.propTypes = {
  number: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default Edge;
