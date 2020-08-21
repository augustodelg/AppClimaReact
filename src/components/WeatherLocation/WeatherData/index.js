import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import PropTypes from "prop-types";
import "./styles.css";

const WeatherData = ({ data }) => {
  const { temperatura, estadoTiempo, humedad, viento } = data;

  return (
    <div className="wheatherDataCont">
      <WeatherTemperature
        temperatura={temperatura}
        estadoTiempo={estadoTiempo}
      ></WeatherTemperature>
      <WeatherExtraInfo humedad={humedad} viento={viento}></WeatherExtraInfo>
    </div>
  );
};
WeatherData.propTypes = {
  data: PropTypes.shape({
    temperatura: PropTypes.number.isRequired,
    estadoTiempo: PropTypes.string.isRequired,
    humedad: PropTypes.number.isRequired,
    viento: PropTypes.number.isRequired,
  }),
};
export default WeatherData;
