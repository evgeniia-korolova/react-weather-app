import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherTemperature from './WeatherTemperature';
import './WeatherInfo.css';

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className='description'>{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 px-5">
          <img src={props.data.iconUrl} alt={props.data.description} />{' '}
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6 px-5">
          <ul>
            <li>Feels like : {Math.round(props.data.feelsLike)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
