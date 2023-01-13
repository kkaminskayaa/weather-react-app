import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon"
import CurrentTemperature from "./CurrentTemperature";

export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        {" "}
        <div className="CurrentTemperature">
          <h3 className="current-city">{props.data.city}</h3>
          <br />
          <h6 className="current-day">
            <FormattedDate date={props.data.date} />
          </h6>
          <h6 className="current-time">
            <FormattedTime time={props.data.time} />
          </h6>
          <h2 id="current-emoji" className="current-emoji">
            <WeatherIcon code={props.data.icon} size={115} />
            
          </h2>
          <CurrentTemperature celsius={props.data.temperature}/>
          <h6>
          
            <span className="humidity-percent">
              Humidity:{" "}
              <span className="numeric"> {props.data.humidity}% </span>
            </span>
            <br />
            <span className="wind-speed">
              Wind: <span className="numeric">{props.data.wind} km/h</span>
            </span>
          </h6>
        </div>
      </div>
    );
}