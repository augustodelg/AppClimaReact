import React from "react";
import PropTypes from "prop-types";
import WeatherLocation from ".";
import './styleLocationList.css'




const LocationList = ({ cities, onSelectedLocation }) => {

  const handleWeatherLocationClick = city =>{
    console.log("handleWeatherLocationClick ");
    onSelectedLocation(city);
    
  }
  //Utilizamos el map para crear componentes individuales, desglozando el array que nos llega de strings
  const strToComponente = (cities) =>(
      cities.map((city) => 
        <WeatherLocation 
          key={city} 
            city={city} 
            onWeatherLocationClick = {() => handleWeatherLocationClick(city)}/>)
      );

  return (
  <div className="locationList">
    {strToComponente(cities)}
    </div>);
};

LocationList.protoType = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,
};

export default LocationList;
