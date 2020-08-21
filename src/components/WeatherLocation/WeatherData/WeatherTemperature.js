import React from "react";
import PropTypes from "prop-types";

//funcion para generar elementos de imagen mediante un codigo (momentaneamente solo para las imagenes indicadas)
const returnImg = (icono) => {
  let url_img = `https://openweathermap.org/img/wn/${icono}@2x.png`;
  return <img className="wicon" src={url_img} alt=""></img>;
};

const WeatherTemperature = ({ temperatura, estadoTiempo }) => {
  return (
    <div className="wheatherTemperatureCont">
      {returnImg(estadoTiempo)}
      <span className="temperature">{` ${temperatura}ºC`}</span>
    </div>
  );
};

WeatherTemperature.propTypes = {
  temperatura: PropTypes.number.isRequired,
  estadoTiempo: PropTypes.string,
};

export default WeatherTemperature;
