import React, { Component } from 'react';
import PlaySquare from './PlaySquare';
import './scss/PlayGround.scss'
class PlayGround extends Component {
    render() {
        return (
            <div className="play-ground">
                <div className="row">
                    <PlaySquare betValue ="nai" increaseBetValue={this.props.increaseBetValue}/>
                    <PlaySquare betValue ="bau" increaseBetValue={this.props.increaseBetValue}/>
                    <PlaySquare betValue ="ga" increaseBetValue={this.props.increaseBetValue}/>
                </div>
                <div className="row">
                    <PlaySquare betValue ="ca" increaseBetValue={this.props.increaseBetValue}/>
                    <PlaySquare betValue ="cua" increaseBetValue={this.props.increaseBetValue}/>
                    <PlaySquare betValue ="tom" increaseBetValue={this.props.increaseBetValue}/>
                </div>
            </div>
        );
    }
}

export default PlayGround;