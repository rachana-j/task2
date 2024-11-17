import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then((response) => setCharacters(response.data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="character-list">
      <h2>Characters</h2>
      <div className="grid">
        {characters.map((char) => (
          <Link to={`/character/${char.id}`} key={char.id}>
            <div className="card">
              <img src={char.image} alt={char.name} />
              <h3>{char.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
