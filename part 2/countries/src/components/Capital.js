import axios from "axios";
import { useState, useEffect } from "react";

const Capital = ({ countryObj }) => {
  const [weather, setWeather] = useState('');
  useEffect(() => {
    // Some places have undefined capital
    if (countryObj.capital) {
      // API LOADED FROM .env:
      // https://create-react-app.dev/docs/adding-custom-environment-variables/
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${countryObj.capital[0]}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`)
        .then((response) => {
          setWeather(response.data)
        })
    }
  }, []);
  let weatherData = '';
  if (weather){
    weatherData = weather.weather[0];
  }
  return (
    <>
      {weather ? (
        <div>
          <h2>Weather in {countryObj.capital[0]}</h2>
          <div>
            Temperature: {weather.main.temp} Celcius
          </div>
          <img src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt={weatherData.main}/>
          <div>
            Wind: {weather.wind.speed} m/s
          </div>
        </div>
      ) : (
        <div>
          Weather data for city not found.
        </div>
      )}
    </>
  )
}

export default Capital;