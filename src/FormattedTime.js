import React from "react"; 

export default function FormattedTime(props){

    function addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    let hours  = addZero(props.time.getHours());
    let minutes = addZero(props.time.getMinutes());


    return <div>Current time: {hours}:{minutes}</div>
}