import React, { Component } from 'react';
import './scss/MoneyAmount.scss'
class MoneyAmount extends Component {
    render() {
        return (
            <div className="money-amount">
                {this.props.moneyAmount}$
            </div>
        );
    }
}

export default MoneyAmount;