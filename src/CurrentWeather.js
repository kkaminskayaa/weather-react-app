import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";


export default function CurrentWeather(props) {
const [city, setCity] = useState(props.defaultCity);
const [weatherData, setWeatherData] = useState({ ready: false });


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

 function search(){
   const apiKey = "50fa4024e3b1d5eac2f51ab18a47e997";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
   axios.get(apiUrl).then(showTemperature);
 }

 function handleSubmit(event){
   event.preventDefault();
    search(); 
  // search for city weather
 }

 function handleCityChange(event){
 setCity(event.target.value);

 }

if (weatherData.ready) {
  return (
    <div>
      <div className="SearchEngine">
        <div className="row">
          <div className="col-6 enter-city">
            <div className="input-group flex-nowrap">
              <form id="search-form" onSubmit={handleSubmit} >
                <div className="input-group">
                  <input
                    id="search-text-input"
                    type="text"
                    className="form-control"
                    placeholder="Enter city"
                    autoComplete="off"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                  <button type="submit" className="input-group-text">
                    <span role="img" aria-label="lupe">
                      🔍
                    </span>
                  </button>
                  <button className="btn btn-primary" id="current-btn">
                    Current
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <WeatherInfo data={weatherData} />
    </div>
  );
} else {
  search();
  return <h1>Loadiinggg...</h1>;
}
  
}
