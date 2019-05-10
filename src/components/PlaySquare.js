import React, { Component } from 'react';
import './scss/PlaySquare.scss'
class PlaySquare extends Component {

    handleOnclick = () =>{
        this.props.increaseBetValue(this.props.betValue)
    }
    render() {
        const {betValue}= this.props;
        return (
            <div className="play-square" onClick={this.handleOnclick}>
                <img src={require(`../assets/img/${betValue}.png`)} alt ="baucua"/>
            </div>
        );
    }
}

export default PlaySquare;