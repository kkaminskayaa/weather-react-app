import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props){
    const codeMapping = {
      "01d": "CLEAR_DAY",
      "01n": "CLEAR_NIGHT",
      "02d": " PARTLY_CLOUDY_DAY",
      "02n": "PARTLY_CLOUDY_DAY",
      "03d": "PARTLY_CLOUDY_DAY",
      "03n": "PARTLY_CLOUDY_DAY",
      "04d": "CLOUDY",
      "04n": "CLOUDY",
      "09d": "RAIN",
      "09n": "RAIN",
      "10d": "RAIN",
      "10n": "RAIN",
      "11d": "RAIN",
      "11n": "RAIN",
      "13d": "SNOW",
      "13n": "SNOW",
      "50d": "FOG",
      "50n": "FOG",
    };

return (
  <div>
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="rgba(157, 181, 198, 0.5)"
      size="130"
      animate={true}
    />
  </div>
);
    
    
}