import React from 'react';
import WeatherLocation from './components/WeatherLocation';

import './App.css';
import LocationList from './components/WeatherLocation/LocationList';

function App() {
  return (
    <div className="App">
      <LocationList></LocationList>

    </div>
  );
}

export default App;
