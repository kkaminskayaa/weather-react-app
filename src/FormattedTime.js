import React from "react"; 

export default function FormattedTime(props){
    let hours  = props.time.getHours();
    let minutes = props.time.getMinutes();
    return <div>Current time: {hours}:{minutes}</div>
}