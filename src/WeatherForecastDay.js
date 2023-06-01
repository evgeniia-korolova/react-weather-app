import React from "react";


export default function WeatherForecastday(props) {

 
   
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);          
    return `${temperature}°`
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);          
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return days[day];
  }

  
    return (
      <div className="WeatherForecastday">
        <div className="WeatherForecastDay">{day()}</div>
        <img
          src={props.data.condition.icon_url}
          alt={props.data.description}
          className="WeatherForecast-Icon"
        />
        <div className="WeatherForecast-temp">
          <span className="WeatherForecast-temp-max">{maxTemperature()}</span>
          <span className="WeatherForecast-temp-min">{minTemperature()}</span>
        </div>
      </div>
    );
  }
