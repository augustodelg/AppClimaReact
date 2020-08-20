import React from "react";
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import * as clima from '../../../constants/weathers';

const getWeatherIcon = (estadoTiempo) =>{
    switch (estadoTiempo) {
        case clima.RAIN :
            return "rain";
        case clima.WINDY:
            return "day-windy";
        case clima.SUN:
            return "day-sunny"
        default:
            return "owm-313";
    }
}

const WeatherTemperature = ({temperatura,estadoTiempo,icono}) =>{
    console.log(icono);
    
    return (<div className="wheatherTemperatureCont">
        <img className="wicon" src={`https://openweathermap.org/img/wn/${icono}@2x.png`}></img>

        <span className='temperature'>{` ${temperatura}ºC`}</span>
        </div>);
};

WeatherTemperature.propTypes = {
    temperatura: PropTypes.number.isRequired,
    estadoTiempo: PropTypes.string,
}

export default WeatherTemperature;