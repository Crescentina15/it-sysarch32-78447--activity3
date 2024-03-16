import './index.css'; 
import React from 'react';
import Header from './Header'; 
import Pokemon from './Pokemon'; 
import Pokedex from './Pokedex';
import Footer from './Footer';

const pokemonData = [
  {
    "id": "001",
    "name": {
      "english": "Bulbasaur",
      "japanese": "フシギダネ",
      "chinese": "妙蛙种子",
      "french": "Bulbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 45
    },
    "image": "https://it-sysarch32.web.app/assets/001.png"
  },
  
];

function App() {
  return (
    <div>
      <Header /> {/* Include the Header component */}
      <Pokedex pokemonData={pokemonData} /> {/* Pass the Pokémon data as prop to the Pokedex component */}
    </div>
  );
}
export default App;
