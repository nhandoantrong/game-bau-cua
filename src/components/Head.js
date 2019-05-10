import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import PlayArrow from '@material-ui/icons/PlayArrow'
import DiceGroup from './DiceGroup';
import MoneyAmount from './MoneyAmount';
import './scss/Header.scss'

class Head extends Component {
    valueArray = ['ca','tom','cua','nai','bau','ga'];

    state ={
        resultArray: [0,0,0]
    }
    randomArray = () =>{
        const newArr = [-1,-1,-1];
        newArr[0] = Math.floor(Math.random() * 6);
        newArr[1] = Math.floor(Math.random() * 6);
        newArr[2] = Math.floor(Math.random() * 6);

        this.setState({
            resultArray: [...newArr],
        })
        newArr[0]= this.valueArray[newArr[0]];
        newArr[1]= this.valueArray[newArr[1]]
        newArr[2]= this.valueArray[newArr[2]]


        this.props.betResult(newArr);

    }

    render() {
        return (
            <div className="header">
                <Fab color="primary" aria-label="Add" onClick={this.randomArray}>
                    <PlayArrow />
                </Fab>
                <DiceGroup resultArray={this.state.resultArray} valueArray={this.valueArray}/>
                <MoneyAmount moneyAmount={this.props.moneyAmount}/>
            </div>
        );
    }
}

export default Head;