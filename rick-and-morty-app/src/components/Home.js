import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Rick and Morty App</h1>
      <p>Explore characters, episodes, and more!</p>
      <nav>
        <Link to="/characters">View Characters</Link>
        <Link to="/episodes">Episode Guide</Link>
        <Link to="/random-character">Random Character</Link>
      </nav>
    </div>
  );
};

export default Home;
