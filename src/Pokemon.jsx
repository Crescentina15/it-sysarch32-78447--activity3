/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

function Pokemon({ pokemon, language }) {
  // eslint-disable-next-line react/prop-types
  const { id, name, type, base, image } = pokemon;
  // eslint-disable-next-line react/prop-types
  const pokemonName = name[language] || name.english; 

  return (
    <div className="pokemon-container">
      <img src={image} alt={pokemonName} style={{ width: '100px', height: '100px' }} />
      <div className="pokemon-details">
        <h2>{pokemonName}</h2>
        <p>ID: {id}</p>
        <p className="type-section">
           {type.map((t, index) => (
            <span key={index} className="type">{t}</span>
          ))}
        </p>
        <ul className="base-stats">
          {Object.entries(base).map(([stat, value]) => (
            <li key={stat}>
              <strong>{stat}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Pokemon;
