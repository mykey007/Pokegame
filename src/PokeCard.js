import React, { Component } from 'react'
import './PokeCard.css'

class PokeCard extends Component {
    render() {      
        const POKE_API ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
        let imgSrc = `${POKE_API}${this.props.id}.png`  
        return (
            <div className="PokeCard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name}/>
                <p>Type: {this.props.type}</p>
                <p>Exp: {this.props.exp}</p>
            </div>
        )
    }
}

export default PokeCard;