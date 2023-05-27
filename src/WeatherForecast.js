import React from "react";
import "./WeatherForecast.css";
import axios from 'axios';

export default function WeatherForecast(props) {

  function handleResponse(response) {
    console.log(response.data);
  }
 

  let apiKey = '82903b2bbd2tcf4oe06f2aa9495a97b0';
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  
  
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecastDay">Sat</div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="forecast icon"
              className="WeatherForecast-Icon"
            />
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-temp-max">22°</span>
              <span className="WeatherForecast-temp-min">17°</span>
            </div>
          </div>
        </div>
      </div>
    );
}