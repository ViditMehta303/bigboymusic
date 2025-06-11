import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Fav from './screens/fav/fav';
import Feed from './screens/feed/feed';
import Library from './screens/library/library';
import Player from './screens/player/player';
import Trending from './screens/trending/trending';
import Home from './screens/home/home';

function App() {
  return (
    <div className="app-container">
      
      <main className="main-content">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/fav" element={<Fav />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/library" element={<Library />} />
          <Route path="/player" element={<Player />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;