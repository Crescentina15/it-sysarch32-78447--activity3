import React from 'react';

function Pokemon({ pokemon, language }) {
  const { id, name, type, base, image } = pokemon;
  const pokemonName = name[language] || name.english; // If the language is not available, default to English

  return (
    <div className="pokemon-container">
      <img src={image} alt={pokemonName} style={{ width: '100px', height: '100px' }} />
      <h2>{pokemonName}</h2>
      <p>ID: {id}</p>
      <p>Type: {type.join(', ')}</p>
      <p>Base Stats:</p>
      <ul>
        {Object.entries(base).map(([stat, value]) => (
          <li key={stat}>
            <strong>{stat}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pokemon;
