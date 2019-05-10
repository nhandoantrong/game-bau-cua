import React, { Component } from 'react';
import Dice from './Dice';
import './scss/DiceGroup.scss'
class DiceGroup extends Component {
    render() {
        const {resultArray, valueArray} =this.props;
        const renderDice = resultArray.map((item,index)=>{
            return <Dice value={valueArray[item]} key={index}/>
        })
        return (
            <div className="dice-group">
                {renderDice}
            </div>
        );
    }
}

export default DiceGroup;