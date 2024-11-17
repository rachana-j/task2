import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import EpisodeList from './components/EpisodeList';
import RandomCharacter from './components/RandomCharacter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="/episodes" element={<EpisodeList />} />
        <Route path="/random-character" element={<RandomCharacter />} />
      </Routes>
    </Router>
  );
}

export default App;
