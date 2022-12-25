import React, {useState} from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function CurrentTemperature() {

let [weatherData, setWeatherData] = useState({ ready: false });


function showTemperature(response){
     console.log(response.data);
    setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        city: response.data.name,
        date:  new Date(response.data.dt * 1000),
        time: new Date(response.data.dt * 1000),
        //description: response.data.weather[0].description,
        //icon: response.data.weather[0].icon
    });

}

let city = "Toronto";
const apiKey = "6bfa54f242cbb59343d4e58db578dc61";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
axios.get(apiUrl).then(showTemperature);

if (weatherData.ready) {
  return (
    <div className="CurrentTemperature">
      <h3 className="current-city">{weatherData.city}</h3>
      <br />
      <h6 className="current-day">
        <FormattedDate date={weatherData.date} />
      </h6>
      <h6 className="current-time"><FormattedTime time={weatherData.time} /></h6>

      <h2 id="current-emoji" className="current-emoji">
        🌦
      </h2>
      <h3 className="current-degree">
        {" "}
        <span className="current-temperature">
          {Math.round(weatherData.temperature)}°
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
          Humidity: <span className="numeric"> {weatherData.humidity}% </span>
        </span>
        <br />
        <span className="wind-speed">
          Wind: <span className="numeric">{weatherData.wind} km/h</span>
        </span>
      </h6>
    </div>
  );
} else {
  return <h1>Loadiinggg...</h1>;
}
  
}
