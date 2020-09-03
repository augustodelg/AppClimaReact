import React from "react";
import PropTypes from "prop-types";
import Location from "./Location";
import WeatherData from "./WeatherData";
import transformWeather from "./../../services/transformWeather";
import Preload from "./Desing/preload";


//Insertar la KEY API correspondiente
const api_key = "1eec86901b7cf738390c5f06f494b0f8";
const api_url = "http://api.openweathermap.org/data/2.5/weather";


class WeatherLocation extends React.Component {
  constructor({ city,onWeatherLocationClick }) {
    super();
    this.state = {
      data: null,
      city,
      onWeatherLocationClick,
    };
  }
  componentWillMount() {
    const { city } = this.state;
    const api_weather = `${api_url}?q=${city}&appid=${api_key}`;
    fetch(api_weather)
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((weather_data) => {
        const data = transformWeather(weather_data);

        this.setState({
          data,
          city: ` ${weather_data.name} , ${weather_data.sys.country}`,
        });
      });
  }

  
  componentDidUpdate(prevProps, prevState) {
    console.log("Post actualizado");
  }

  render = () => {
    console.log(this.state);
    
    const {onWeatherLocationClick} = this.state;
    
    const { city, data } = this.state;


    return (
      <div className="wheatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        {data ? (<WeatherData data={data}></WeatherData>) : (<Preload className="preload" />)}
      </div>
    );
  };
}

WeatherLocation.protoType = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
};

export default WeatherLocation;
