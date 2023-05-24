import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';

export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState({ ready: false});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: "Thursday 2:00",
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      feelsLike: response.data.temperature.feels_like,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      iconUrl: response.data.condition.icon_url,
    });
    
    
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className='text-capitalize'>{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
            />{' '}
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like : {Math.round(weatherData.feelsLike)}°C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = '82903b2bbd2tcf4oe06f2aa9495a97b0';

    
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading"
  }
}
