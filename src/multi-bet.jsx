import React from 'react';
import { PropTypes } from 'prop-types';

class MultiBet extends React.Component {
  constructor() {
    super();
    this.state = { selected: -1 };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(amount, index) {
    this.setState({ selected: index });
    setTimeout(() => {
      this.setState({ selected: -1 });
    }, 300)
    this.props.handler(amount);
  }

  render () {
    return (
      <div>
        <span>Rounds </span>
        <span onClick={() => this.clickHandler(100, 0)}> 100 </span>
        <span onClick={() => this.clickHandler(1000, 1)}> 1000 </span>
        <span onClick={() => this.clickHandler(10000, 2)}> 10,000 </span>
        <span onClick={() => this.clickHandler(1000000, 3)}> 1,000,000 </span>
      </div>
    );
  }
}

MultiBet.propTypes = {
  handler: PropTypes.func.isRequired
};

export default MultiBet;
