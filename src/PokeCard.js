import React, { Component } from 'react'
import './PokeCard.css'

const POKE_API =" https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
// const pokemon = {[
//     {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
//     {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
//     {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
//     {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
//     {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
//     {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
//     {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
//     {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
//   ]};
class PokeCard extends Component {
    render() {      
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