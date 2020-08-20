import React from "react";
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humedad,viento}) =>{
    return (<div className="wheatherExtraInfoCont">
        <span className="extraInfoText">{`Humedad: ${humedad}%`}</span>
        <span className="extraInfoText">{`Vientos: ${viento} m/s`}</span>
        </div>)
};

WeatherExtraInfo.propTypes = {
    humedad: PropTypes.number,
    viento: PropTypes.number,
}
export default WeatherExtraInfo;