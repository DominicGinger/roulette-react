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
      <div className='col-12 col-lg-6 row'>
        <div className='col-3'>
          <button onClick={this.clearForm} type="button" className="btn btn-danger">
            Reset
          </button>
        </div>
        <div className="col-4">
          <input type="number" ref='amountInput' onChange={this.updateAmount} className="form-control" />
        </div>
        <div className='col-5' onChange={this.setOption} >
          {this.props.options.map((option, index) => (
            <span key={index} className={'form-check form-check-inline ' + (this.state.option === index ? 'selected' : '')}>
              <label className="form-check-label">
                <input className='form-check-input' type='radio' value={index} checked={this.state.option === index} />
                {' ' + option.label}
              </label>
            </span>
          ))}
        </div>
      </div>
    );
  }
}

BettingRow.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default BettingRow;
