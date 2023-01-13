import React from "react"; 
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";


export default function WeatherForecastDay(props){
function setTemperature(){
    let temperature = Math.round(props.data.temp.day)
    return <div> {temperature} °C</div>;
}

function day(){
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]

    return days[day];
}

    return (
      <div className="WeatherForecastDay">
        
            <div>
              <div id="week-days-forecast" className="numeric">{day()}</div>
            </div>

            <div>
              <div>
                <div id="week-emojis-forecast">
                  <WeatherIcon code={props.data.weather[0].icon} size={45} />
                </div>
              </div>
            </div>
            <div>
                <span id="week-temperature-forecast" className="numeric">
                  {setTemperature()}
                </span>
              
            </div>
          </div>
        
    );
}