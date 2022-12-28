import React, {useState} from "react";

export default function CurrentTemperature(props){
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(){
        return(props.celsius * 9/5) + 32; 
    }
    function convertToCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
function convertToFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");

}

    if(unit === "celsius"){
        return (
          <div>
            <h3 className="current-degree">
              {" "}
              <span className="current-temperature">
                {Math.round(props.celsius)} °C
              </span>{" "}
            </h3>
            <h3 className="current-parameter">
              <span id="celsiusLink" className="celsius active" onClick={convertToCelsius}>
                °C{" "}
              </span>{" "}
              |{" "}
              <span id="fahrenheitLink" className="fahrenheit" onClick={convertToFahrenheit}>
                {" "}
                °F{" "}
              </span>
            </h3>
          </div>
        );
    } else{
        return (
          <div>
            <h3 className="current-degree">
              {" "}
              <span className="current-temperature">
                {Math.round(showFahrenheit())} °F
              </span>{" "}
            </h3>
            <h3 className="current-parameter">
              <span
                id="celsiusLink"
                className="celsius "
                onClick={convertToCelsius}
              >
                °C{" "}
              </span>{" "}
              |{" "}
              <span
                id="fahrenheitLink"
                className="fahrenheit active"
                onClick={convertToFahrenheit}
              >
                {" "}
                °F{" "}
              </span>
            </h3>
          </div>
        );

    }
    
}