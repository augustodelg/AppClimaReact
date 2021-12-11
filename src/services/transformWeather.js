
    const getEstadoDeTiempo = weather => {

        
        return weather[0].icon;
    }

    const convertToCelsius = temp =>{
        return Math.trunc(temp - 273.15)
    }

    const transformWeather = (weather_data) => {
        const {humidity,temp} = weather_data.main;
        const {speed} = weather_data.wind;
        const estadoTiempo = getEstadoDeTiempo(weather_data.weather)

        const data = {
            humedad: humidity,
            temperatura: convertToCelsius(temp),
            viento: speed,
            estadoTiempo
        }

        return data;
    }

export default transformWeather;