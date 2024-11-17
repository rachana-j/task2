import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode')
      .then((response) => setEpisodes(response.data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="episode-list">
      <h2>Episodes</h2>
      <ul>
        {episodes.map((ep) => (
          <li key={ep.id}>
            {ep.name} (Season {ep.episode.split('S')[1].split('E')[0]} - Episode {ep.episode.split('E')[1]})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;
