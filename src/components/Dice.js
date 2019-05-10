import React, { Component } from 'react';
import './scss/Dice.scss'
class Dice extends Component {
    render() {
        return (
            <div className="dice">
                <div className="dice__content">
                    <img src ={require(`../assets/img/${this.props.value}.png`) }  alt="xingau"/>
                </div>
            </div>
        );
    }
}

export default Dice;