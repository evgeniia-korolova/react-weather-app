import React, { useState } from "react";
import WeatherForecastDay from './WeatherForecastDay'
import "./WeatherForecast.css";
import axios from 'axios';

export default function WeatherForecast(props) {

  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    
    setForecast(response.data.daily);
    setLoaded(true);
  }
 
  if (loaded) {
    console.log(forecast)
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  
  } else {
          
    let apiKey = '82903b2bbd2tcf4oe06f2aa9495a97b0';
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  
    return null;
  }
}
