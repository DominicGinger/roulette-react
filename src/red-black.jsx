import React from 'react';
import { PropTypes } from 'prop-types';

class RedBlack extends React.Component {
  constructor() {
    super();
    this.state = { colour: '', amount: 0 };
    this.updateAmount = this.updateAmount.bind(this);
    this.setColour = this.setColour.bind(this);
  }

  updateAmount(e) {
    this.setState({ ...this.state, amount: parseFloat(e.target.value) })
  }

  setColour(e) {
    this.setState({ ...this.state, colour: e.target.value });
  }

  render () {
    return (
      <div onBlur={() => this.props.clickHandler({ colour: this.state.colour, amount: this.state.amount })} >
        <input onChange={this.updateAmount} type='number' />
        <span onChange={this.setColour} >
          Red <input type='radio' value='red' checked={this.state.colour === 'red'} />
          Black <input type='radio' value='black' checked={this.state.colour === 'black'} />
        </span>
      </div>
    );
  }
}

RedBlack.propTypes = {
  clickHandler: PropTypes.func.isRequired
};

export default RedBlack;
