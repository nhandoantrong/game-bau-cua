import React, { Component } from 'react';
import './App.css';
import Head from './components/Head';
import PlayGround from './components/PlayGround';
import Bet from './components/Bet';

class App extends Component {

  state = {
    moneyAmount: 100,
    betValue: [
      { name: 'bau', bet: 0 },
      { name: 'cua', bet: 0 },
      { name: 'tom', bet: 0 },
      { name: 'ca', bet: 0 },
      { name: 'nai', bet: 0 },
      { name: 'ga', bet: 0 },

    ]
  }

  increaseBetValue = (name) => {
    const newArr = [...this.state.betValue];
    const index = newArr.findIndex(item => item.name === name);
    newArr[index].bet += 10;
    if (this.state.moneyAmount > 0) {
      this.setState({
        moneyAmount: this.state.moneyAmount - 10,
        betValue: [...newArr],
      })
    }

  }

  betResult = (resultArr) =>{
    const newArr= [...this.state.betValue];
    let money = this.state.moneyAmount;
    
    let index = newArr.findIndex(item => item.name === resultArr[0]);
    money += newArr[index].bet;
    console.log (index)
    index = newArr.findIndex(item => item.name === resultArr[1]);
    money += newArr[index].bet;
    console.log (index)

    index = newArr.findIndex(item => item.name === resultArr[2]);
    money += newArr[index].bet;
    console.log (index)

    this.setState({
      moneyAmount: money,
      betValue: [
        { name: 'bau', bet: 0 },
        { name: 'cua', bet: 0 },
        { name: 'tom', bet: 0 },
        { name: 'ca', bet: 0 },
        { name: 'nai', bet: 0 },
        { name: 'ga', bet: 0 },
      ]
    })

  }

  render() {
    return (
      <div>
        <Head moneyAmount={this.state.moneyAmount} betResult={this.betResult} />
        <PlayGround increaseBetValue={this.increaseBetValue} />
        <Bet betValue={this.state.betValue} />
      </div>
    );
  }

}

export default App;
