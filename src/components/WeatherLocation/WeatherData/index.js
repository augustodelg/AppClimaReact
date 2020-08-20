import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';
import './styles.css';

const api_city = 'La Plata, AR';
const api_key = "1eec86901b7cf738390c5f06f494b0f8";
const api_weather = `api.openweathermap.org/data/2.5/weather?q=${api_city}&appid=${api_key}`;

const WeatherData = ({data}) =>{
    const { temperatura, estadoTiempo, humedad, viento, icono } = data;
    
    return (
    <div className='wheatherDataCont'>
        <WeatherTemperature temperatura={temperatura} estadoTiempo={estadoTiempo} icono={estadoTiempo}></WeatherTemperature>
        <WeatherExtraInfo humedad={humedad} viento={viento}></WeatherExtraInfo>
    </div>);
};
WeatherData.propTypes = {
    data: PropTypes.shape({
        temperatura: PropTypes.number.isRequired,
        estadoTiempo: PropTypes.string.isRequired,
        humedad: PropTypes.number.isRequired,
        viento: PropTypes.number.isRequired,
    })
}
export default WeatherData;