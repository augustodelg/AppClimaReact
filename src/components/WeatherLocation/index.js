import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import Preload from './Desing/preload'




const api_key = "1eec86901b7cf738390c5f06f494b0f8";
const api_url = "http://api.openweathermap.org/data/2.5/weather"


/*
const data = {
    temperatura: 30,
    estadoTiempo: '11d',
    humedad: 70,
    viento: 10,
    icono: '11d'
};

const data2 = {
    temperatura: -20,
    estadoTiempo: 'sun',
    humedad: 50,
    viento: 70,
    icono: '11d'
};
*/
class WeatherLocation extends React.Component {

    constructor({city}) {
        super();
        this.state = {  
            data: null,
            city
        };
    }
    componentWillMount(){
        const {city} = this.state; 
        const api_weather = `${api_url}?q=${city}&appid=${api_key}`;
        fetch(api_weather).then(data => {
            console.log(data);
            return data.json();
        }).then(weather_data => {
            const data = transformWeather(weather_data);

            this.setState({ data, city:` ${weather_data.name} , ${weather_data.sys.country}` });

        });
        
    }

    componentDidMount() {
        
        
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Post actualizado');
        
    }

    
    
    

    handleUpdateClick = () => {
        //const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${api_city}&appid=${api_key}`;
        
        ///console.log(JSON.parse(result));


    };


    

    render = () => {
        const { city, data } = this.state;
        console.log('render');
        
        return (<div className="wheatherLocationCont">
            <Location city={city}></Location>
            {data ? <WeatherData data={data}></WeatherData> : <Preload className="preload" />} 



        </div>)
    };

}

WeatherLocation.protoType = {
    city: PropTypes.string,
}

export default WeatherLocation;


//<button onClick={this.handleUpdateClick}> Ver La Plata</button>