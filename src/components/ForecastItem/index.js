import React, { Component } from "react";
import Location from "../WeatherLocation/Location";
import WeatherData from "./../WeatherLocation/WeatherData/index"
import PropTypes from "prop-types";


const ForecastItem = ({weekDay,data}) => {
  return (<div className="wheatherLocationCont" >
      <Location city={weekDay}></Location>
      <WeatherData data={data}></WeatherData>
      </div>);
};

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    data: PropTypes.shape({
        temperatura: PropTypes.number.isRequired,
        estadoTiempo: PropTypes.string.isRequired,
        humedad: PropTypes.number.isRequired,
        viento: PropTypes.number.isRequired,
      }),
}

export default ForecastItem;
