import React from "react";

export default function Forecast() {
  return (
    <div class="row">
      <div class="col-4 correct">
        <ul id="forecast_days" class="list-group list-group-flush">
          <li class="list-group-item numeric">Tue</li>
          <li class="list-group-item numeric">Wed</li>
          <li class="list-group-item numeric">Thu</li>
          <li class="list-group-item numeric">Fri</li>
          <li class="list-group-item numeric">Sat</li>
          <li class="list-group-item numeric">Sun</li>
        </ul>
      </div>
      <div class="col-4 correct">
        <ul id="forecast_icons" class="list-group list-group-flush">
          <li class="list-group-item future-emojis">
            <span role="img" aria-label="weather">
              ⛅️
            </span>
          </li>
          <li class="list-group-item future-emojis">
            <span role="img" aria-label="weather">
              🌥
            </span>
          </li>
          <li class="list-group-item future-emojis">
            <span role="img" aria-label="weather">
              🌧
            </span>
          </li>
          <li class="list-group-item future-emojis">
            <span role="img" aria-label="weather">
              ⛅️
            </span>
          </li>
          <li class="list-group-item future-emojis">
            <span role="img" aria-label="weather">
              🌧
            </span>
          </li>
          <li class="list-group-item future-emojis">
            <span role="img" aria-label="weather">
              🌧
            </span>
          </li>
        </ul>
      </div>
      <div class="col-4 correct">
        <ul id="forecast_temp" class="list-group list-group-flush">
          <li class="list-group-item numeric">2°</li>
          <li class="list-group-item numeric">5°</li>
          <li class="list-group-item numeric">7°</li>
          <li class="list-group-item numeric">3°</li>
          <li class="list-group-item numeric">5°</li>
          <li class="list-group-item numeric">4°</li>
        </ul>
      </div>
    </div>
  );
}
