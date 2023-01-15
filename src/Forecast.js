import React, { useState,  useEffect } from "react"; 

import "./Forecast.css";
import axios from "axios"; 
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props){
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(" ");

useEffect(() => {
setLoaded(false);
}, [props]); 

function handleTemperature(response){
  setForecast(response.data.daily);
  setLoaded(true);
  
}
 
 if(loaded){
  return (
    <div>
      <div className="Forecast">
        <div className="row">
          {forecast.map(function(dailyForecast, index){
            if (index < 6 ){ 
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
            
          })}
        </div>
      </div>
    </div>
  );
 } else {
  const apiKey = "50fa4024e3b1d5eac2f51ab18a47e997";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&&units=metric`;

  axios.get(apiUrl).then(handleTemperature);
  return null;

 }
  
}