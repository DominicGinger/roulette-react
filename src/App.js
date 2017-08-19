import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import edges from './roulette';

import Edge from './edge';
import Money from './money';
import BettingRow from './betting-row';
import MultiBet from './multi-bet';

class App extends Component {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.makeBet = this.makeBet.bind(this);
    this.multiBet = this.multiBet.bind(this);
    this.resetMoney = this.resetMoney.bind(this);
    this.state = {
      money: 1000,
      edge: { number: 'GO', colour: 'black' },
      activeBets: []
    };
  }

  getEdge() {
    return edges[Math.floor(Math.random() * edges.length)];
  }

  checkRedBlack(currentEdge, redBlackBet) {
    if (!redBlackBet || redBlackBet.option === -1 || isNaN(redBlackBet.amount)) {
      return 0;
    } else if (redBlackBet.option === 0 && currentEdge.colour === 'red') {
      return redBlackBet.amount;
    } else if (redBlackBet.option === 1 && currentEdge.colour === 'black') {
      return redBlackBet.amount;
    } else {
       return -redBlackBet.amount;
    }
  }

  checkOddEven(currentEdge, oddEvenBet) {
    if (!oddEvenBet || oddEvenBet.option === -1 || isNaN(oddEvenBet.amount)) {
      return 0;
    } else if (currentEdge.number === 0) {
      return -oddEvenBet.amount;
    } else if (oddEvenBet.option === 0 && currentEdge.number%2 !== 0) {
      return oddEvenBet.amount;
    } else if (oddEvenBet.option === 1 && currentEdge.number%2 === 0) {
      return oddEvenBet.amount;
    } else {
      return -oddEvenBet.amount;
    }
  }

  check1819(currentEdge, topBottomBet) {
    if (!topBottomBet || topBottomBet.option === -1 || isNaN(topBottomBet.amount)) {
      return 0;
    } else if (currentEdge.number === 0) {
      return -topBottomBet.amount;
    } else if (topBottomBet.option === 0 && currentEdge.number <= 18) {
      return topBottomBet.amount;
    } else if (topBottomBet.option === 1 && currentEdge.number >= 19) {
      return topBottomBet.amount;
    } else {
      return -topBottomBet.amount;
    }
  }

  clickHandler() {
    const currentEdge = this.getEdge();
    let money = this.state.money;

    money += this.checkRedBlack(currentEdge, this.state.activeBets.redBlack);
    money += this.checkOddEven(currentEdge, this.state.activeBets.oddEven);
    money += this.check1819(currentEdge, this.state.activeBets.topBottom);

    this.setState({ ...this.state, edge: currentEdge, money });
  }

  makeBet(type, bet) {
    const activeBets = { ...this.state.activeBets, [type]: bet };
    this.setState({ ...this.state, activeBets });
  }

  multiBet(amount) {
    let currentEdge;
    let money = this.state.money;
    const { redBlack, oddEven, topBottom } = this.state.activeBets;
    for(let i = 0; i < amount; i++) {
      currentEdge = this.getEdge();
      money += this.checkRedBlack(currentEdge, redBlack);
      money += this.checkOddEven(currentEdge, oddEven);
      money += this.check1819(currentEdge, topBottom);
    }
    this.setState({ ...this.state, edge: currentEdge, money });
  }

  resetMoney() {
    this.setState({ ...this.state, money: 1000 });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Money amount={this.state.money} resetMoney={this.resetMoney} />
          </Col>
        </Row>

        <Row>
          <Col>
            <Edge {...this.state.edge} clickHandler={this.clickHandler} />
          </Col>
        </Row>

        <Row>
          <Col md={4} >
            <BettingRow clickHandler={this.makeBet.bind(this, 'redBlack')} options={[{ label: 'Red' }, { label: 'Black' }]} />
          </Col>
          <Col md={4} >
            <BettingRow clickHandler={this.makeBet.bind(this, 'oddEven')} options={[{ label: 'Odd' }, { label: 'Even' }]} />
          </Col>
          <Col md={4} >
            <BettingRow clickHandler={this.makeBet.bind(this, 'topBottom')} options={[{ label: '1-18' }, { label: '19-36' }]} />
          </Col>
        </Row>

        <Row>
          <Col>
            <MultiBet handler={this.multiBet} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
