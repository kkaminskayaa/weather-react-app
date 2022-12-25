import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

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
            🌦
          </h2>
          <h3 className="current-degree">
            {" "}
            <span className="current-temperature">
              {Math.round(props.data.temperature)}°
            </span>{" "}
          </h3>
          <h3 className="current-parameter">
            <span id="celsiusLink" className="celsius active">
              {" "}
              °C{" "}
            </span>{" "}
            |{" "}
            <span id="fahrenheitLink" className="fahrenheit">
              {" "}
              °F{" "}
            </span>
          </h3>
          <h6>
            {" "}
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