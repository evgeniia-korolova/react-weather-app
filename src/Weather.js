import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';
import './Weather.css';
import axios from 'axios';

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      feelsLike: response.data.temperature.feels_like,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      iconUrl: response.data.condition.icon_url,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = '82903b2bbd2tcf4oe06f2aa9495a97b0';
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function searchLocalPosition(position) {
    let apiKey = '3632a7c9224763143fe6obtb61dff025';
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${position.coords.longitude}&lat=${position.coords.latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    console.log(position);
  }

  function geoLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocalPosition);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Location"
                className="btn btn-primary w-100"
                onClick={geoLocation}
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates } />
      </div>
    );
  } else {
    search();
    return 'Loading';
  }
}
