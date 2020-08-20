import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather'



const api_city = 'La Plata, AR';
const api_key = "1eec86901b7cf738390c5f06f494b0f8";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${api_city}&appid=${api_key}`;


const data = {
    temperatura : 30,
    estadoTiempo : '11d',
    humedad: 70,
    viento: 10,
    icono:'11d'
};

const data2 = {
    temperatura : -20,
    estadoTiempo : 'sun',
    humedad: 50,
    viento: 70,
    icono:'11d'
};

class WeatherLocation extends React.Component{
    
    constructor(){
        super();
        this.state = {
            data: data,
            city: 'Buenos Aires'
        };
    }
    
    handleUpdateClick = () => {
        const result = fetch(api_weather).then(data => {
            console.log(data);
            return data.json();
        }).then(weather_data => {
            const data = transformWeather(weather_data);
            console.log(weather_data);
            
            this.setState({data,city: weather_data.name });
            
        });
        ///console.log(JSON.parse(result));
        
        
    };


    render = () =>{
        const {city,data} = this.state;
    return (<div className="wheatherLocationCont">
        <Location city = {this.state.city}></Location>
        <WeatherData data={this.state.data}></WeatherData>
        <button onClick={this.handleUpdateClick}> Actualizar</button>
    </div>)
    };

};

export default WeatherLocation;