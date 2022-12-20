import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast"> 
    <div className="row">
      <div className="col-4 correct">
        <ul id="forecast_days" className="list-group list-group-flush">
          <li className="list-group-item numeric">Tue</li>
          <li className="list-group-item numeric">Wed</li>
          <li className="list-group-item numeric">Thu</li>
          <li className="list-group-item numeric">Fri</li>
          <li className="list-group-item numeric">Sat</li>
          <li className="list-group-item numeric">Sun</li>
        </ul>
      </div>
      <div className="col-4 correct">
        <ul id="forecast_icons" className="list-group list-group-flush">
          <li className="list-group-item future-emojis">
            <span role="img" aria-label="weather">
              ⛅️
            </span>
          </li>
          <li className="list-group-item future-emojis">
            <span role="img" aria-label="weather">
              🌥
            </span>
          </li>
          <li className="list-group-item future-emojis">
            <span role="img" aria-label="weather">
              🌧
            </span>
          </li>
          <li className="list-group-item future-emojis">
            <span role="img" aria-label="weather">
              ⛅️
            </span>
          </li>
          <li className="list-group-item future-emojis">
            <span role="img" aria-label="weather">
              🌧
            </span>
          </li>
          <li className="list-group-item future-emojis">
            <span role="img" aria-label="weather">
              🌧
            </span>
          </li>
        </ul>
      </div>
      <div className="col-4 correct">
        <ul id="forecast_temp" className="list-group list-group-flush">
          <li className="list-group-item numeric numbers">2°</li>
          <li className="list-group-item numeric">5°</li>
          <li className="list-group-item numeric">7°</li>
          <li className="list-group-item numeric">3°</li>
          <li className="list-group-item numeric">5°</li>
          <li className="list-group-item numeric">4°</li>
        </ul>
      </div>
    </div>
    </div>
  );
}
