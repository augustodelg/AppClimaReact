import React, { Component } from "react";

import "./App.css";
import LocationList from "./components/WeatherLocation/LocationList";

const cities = [
  "La Plata, AR",
  "Montevideo, UY",
  "Madrid, ES",
  "Las Flores, CO",
  "New York City, US",
];

class App extends Component {
  handleSelectionLocation = city => {
    console.log("handleSelectionLocation");
    
  }
  render(){
    return (
    <div className="App">
      <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}></LocationList>
    </div>
  )}
  
}

export default App;
