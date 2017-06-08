import React from 'react';
import { PropTypes } from 'prop-types';

class BettingRow extends React.Component {
  constructor() {
    super();
    this.state = { option: -1, amount: 0 };
    this.updateAmount = this.updateAmount.bind(this);
    this.setOption = this.setOption.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  updateAmount(e) {
    this.setState({ ...this.state, amount: parseFloat(e.target.value) })
    this.props.clickHandler({ option: this.state.option, amount: parseFloat(e.target.value) })
  }

  setOption(e) {
    this.setState({ ...this.state, option: parseInt(e.target.value, 10) });
    this.props.clickHandler({ option: parseInt(e.target.value, 10), amount: this.state.amount })
  }

  clearForm() {
    this.setState({ option: -1, amount: 0 });
    this.refs.amountInput.value = '';
    this.props.clickHandler({ option: -1, amount: 0 })
  }

  render () {
    return (
      <div className='betting-row' >
        <a onClick={this.clearForm}>X </a>
        <input ref='amountInput' className='amount' onChange={this.updateAmount} type='number' />
        <span onChange={this.setOption} >
          {this.props.options.map((option, index) => (
            <span key={index} className={this.state.option === index ? 'selected' : ''}>
              <label>
              <input type='radio' value={index} checked={this.state.option === index} />
              &nbsp;{option.label}&nbsp;
            </label>
            </span>
          ))}
        </span>
      </div>
    );
  }
}

BettingRow.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default BettingRow;
