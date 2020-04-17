import React, { Component } from 'react'
import './PokeCard.css'

class PokeCard extends Component {
    render() {      
        // const POKE_API ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
        // let imgSrc = `${POKE_API}${this.props.id}.png`  
        const POKE_API ="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

        let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number)

        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`  
        return (
            <div className="PokeCard">
                <h2>{this.props.name}</h2>
                <img src={imgSrc} alt={this.props.name}/>
                <p>Type: {this.props.type}</p>
                <p>Exp: {this.props.exp}</p>
            </div>
        )
    }
}

export default PokeCard;