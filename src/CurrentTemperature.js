import React from "react";

export default function CurrentTemperature() {
  return (
    <div>
      <h3 className="current-city">Searching...</h3>
      <br />
      <h6 className="current-day"> </h6>
      <h6 className="current-time">Current time: 12:14 a.m.</h6>

      <h2 id="current-emoji" className="current-emoji">
        🌦
      </h2>
      <h3 className="current-degree">
        {" "}
        <span className="current-temperature"> </span>{" "}
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
          Humidity: <span className="numeric"> </span>
        </span>
        <br />
        <span className="wind-speed">
          Wind: <span className="numeric"> </span>
        </span>
      </h6>
    </div>
  );
}
