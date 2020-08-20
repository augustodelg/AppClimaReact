import React from 'react';
import WeatherLocation from '.';

const LocationList = () => {

    return (<div>
        <WeatherLocation city= {'La Plata, AR'}></WeatherLocation>
        <WeatherLocation city= {'Montevideo, UY'}></WeatherLocation> 
        <WeatherLocation city= {'Madrid, ES'}></WeatherLocation>
        <WeatherLocation city= {'Las Flores, CO'}></WeatherLocation>
    </div>)

}

export default LocationList
