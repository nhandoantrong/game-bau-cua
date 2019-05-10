import React, { Component } from 'react';

class Bet extends Component {
    render() {
        const {betValue} = this.props;
        const renderBetValue= betValue.map((item,index) =>{
            return <div key={index}>
                {item.name} : {item.bet}
            </div>
        })
        return (
            <div>
                {renderBetValue}
            </div>
        );
    }
}

export default Bet;