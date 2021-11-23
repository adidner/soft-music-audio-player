import React from 'react';
import './App.scss';
import AudioCard from "./components/AudioCard/AudioCard";
import { trackData } from "./assets/track-data-index";

function App() {
  return (
    <div className="App">
      <AudioCard tracks={trackData} />
    </div>
  );
}

export default App;
