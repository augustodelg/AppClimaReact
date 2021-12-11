import React, { Component } from "react";
import PropTypes from "prop-types";
import ForecastItem from "../ForecastItem/index";
import Preload from "./Desing/preload";
import { api_key } from "../../constants/weathers";
import transformWeather from "../../services/transformWeather"
import "./styles.css";
import './styleForecastExtend.css'

const api_url = "http://api.openweathermap.org/data/2.5/forecast";

/*
const days=[
  "Domingo",  
  "Lunes",
  "Martes",
  "Miercoes",
  "Jueves",
  "Viernes",
  "Sabado",
];

const data = {
  temperatura:10,
  estadoTiempo: "03n", 
  humedad:20, viento:60 
}
*/

class ForestExtended extends Component {
  constructor() {
    super();
    this.state = { forecastData: null };
  }

  componentDidMount() {
    const { city } = this.props;
    const url_forecast = `${api_url}?q=${city}&appid=${api_key}`;
    fetch(url_forecast)
      .then((data) => data.json())
      .then((forecastData) => {

        // const forecastData = transformForecast(weather_data);
        this.setState({ forecastData })
      });
  }

  renderForecastItemDays() {
    const { forecastData } = this.state;
    return forecastData.list.map(day => <ForecastItem weekDay={day.dt_txt} data={transformWeather(day)}></ForecastItem> );
    /*return days.map(day =>
      <ForecastItem weekDay={day} data={data}></ForecastItem>
      )*/
  }

  renderProgres() {
    return <h5>Cargando Pronostico extendido...</h5>;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("EXTEND ACUTALIZADO");
  }

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div class='detail' >
        <h5 className="extended-title">Pronostico extendido para {city}</h5>

        {forecastData
          ? (this.renderForecastItemDays(forecastData))
          : (<Preload className="preload" />)}

        
      </div>
    );
  }
}

ForestExtended.propTypes = {
  city: PropTypes.string.isRequired,
};
export default ForestExtended;
