import React from "react"; 
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";


export default function WeatherForecastDay(props){
function setTemperature(){
    let temperature = Math.round(props.data.temp.day)
    return <div> {temperature}</div>;
}

function day(){
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]

    return days[day];
}

    return (
      <div className="WeatherForecastDay">
        <div id="forecast_days" className="list-group list-group-flush">
          <div className="list-group-item numeric">{day()}</div>
        </div>

        <div className="col-4 correct">
          <div id="forecast_icons" className="list-group list-group-flush">
            <div className="list-group-item future-emojis">
              <WeatherIcon code={props.data.weather[0].icon} size={45} />
            </div>
          </div>
        </div>
        <div className="col-4 correct">
          <div id="forecast_temp" className="list-group list-group-flush">
            <span className="list-group-item numeric numbers">
              {setTemperature()}°C
            </span>
          </div>
        </div>
      </div>
    );
}