import React, { useState } from 'react';
import axios from 'axios';

const RandomCharacter = () => {
  const [character, setCharacter] = useState(null);
  const [filters, setFilters] = useState({
    status: '',
    species: '',
    gender: '',
  });

  const fetchRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1; // Random ID between 1 and 826
    axios
      .get(`https://rickandmortyapi.com/api/character/${randomId}`)
      .then((response) => {
        const char = response.data;

        // Check filters
        if (
          (filters.status && char.status.toLowerCase() !== filters.status.toLowerCase()) ||
          (filters.species && char.species.toLowerCase() !== filters.species.toLowerCase()) ||
          (filters.gender && char.gender.toLowerCase() !== filters.gender.toLowerCase())
        ) {
          fetchRandomCharacter(); // Fetch again if character doesn't match filters
        } else {
          setCharacter(char);
        }
      })
      .catch((error) => console.error(error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="random-character">
      <h2>Random Character Search</h2>
      <div className="filters">
        <label>
          Status:
          <select name="status" value={filters.status} onChange={handleInputChange}>
            <option value="">Any</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </label>
        <label>
          Species:
          <input
            type="text"
            name="species"
            value={filters.species}
            onChange={handleInputChange}
            placeholder="e.g., Human"
          />
        </label>
        <label>
          Gender:
          <select name="gender" value={filters.gender} onChange={handleInputChange}>
            <option value="">Any</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </label>
      </div>
      <button onClick={fetchRandomCharacter}>Find Random Character</button>
      {character && (
        <div className="character-card">
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <p className='pp'>Status: {character.status}</p>
          <p className='pp'>Species: {character.species}</p>
          <p className='pp'>Gender: {character.gender}</p>
          <p className='pp'>Origin: {character.origin.name}</p>
        </div>
      )}
    </div>
  );
};

export default RandomCharacter;
