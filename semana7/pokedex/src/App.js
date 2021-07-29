import React from "react";
import axios from "axios";
import styled from "styled-components";

export default class App extends React.Component {
  state = {
    pokemons: [],
    picture: "",
    name: ""
  };

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=101&offset=0"
    );
    this.setState({ pokemons: response.data.results });
    console.log(response.data.results)
  };

  getInfo = async (event) => {
    const url = event.target.value;
    const response = await axios.get(`${url}`)
    this.setState({picture: response.data.sprites.front_default})
    this.setState({name: response.data.name})
  };

  render() {
    const pokemonsList = this.state.pokemons.map((pokemon) => {
      return (
        <option key={pokemon.name} value={pokemon.url}>
          {pokemon.name}
        </option>
      );
    });
    return (
      <div>
        <header>
          <h1>Pokédex</h1>
        </header>
        <main>
          {this.state.picture &&
            <img src={this.state.picture} alt={'foto do pokemon'}/>
          }
          <h3>{this.state.name}</h3>
          <select onChange={this.getInfo}>{pokemonsList}</select>
        </main>
      </div>
    );
  }
}
