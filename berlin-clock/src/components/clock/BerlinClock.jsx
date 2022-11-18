import React from "react";

import "./BerlinClock.css";

const BerlinClock = (props) => {
  let lightSeconds;
  if (props.seconds % 2 === 0) {
    lightSeconds = "red-light";
  } else {
    lightSeconds = "seconds-off";
  }

  let fiveHours;
  fiveHours = props.hours / 5;
  fiveHours = Math.floor(fiveHours);

  let fiveHoursStyle = `
        div.hours-container span:nth-child(-n+${fiveHours}){
            background-color: red;
        }
    `;

  let singleHour;
  singleHour = props.hours / 5;
  singleHour = singleHour.toFixed(2) - Math.floor(singleHour);
  singleHour = singleHour.toFixed(2) * 5;
  singleHour = Math.floor(singleHour);

  let singleHourStyle = `
        div.single-hour-container span:nth-child(-n+${singleHour}){
            background-color: red;
        }
    `;

  let fiveMinutes;
  fiveMinutes = props.minutes / 5;
  fiveMinutes = Math.floor(fiveMinutes);

  let fiveMinutesStyle = `
        div.five-minute-container span:nth-child(-n+${fiveMinutes}){
            background-color: yellow;
        }
    `;

  let singleMinute;
  singleMinute = props.minutes / 5;
  singleMinute = singleMinute.toFixed(2) - Math.floor(singleMinute);
  singleMinute = singleMinute.toFixed(2) * 5;
  singleMinute = Math.floor(singleMinute);

  let singleMinuteStyle = `
        div.single-minute-container span:nth-child(-n+${singleMinute}){
            background-color: yellow;
        }
    `;

  return (
    <div className="berlin">
      <style>
        {fiveHoursStyle}
        {singleHourStyle}
        {fiveMinutesStyle}
        {singleMinuteStyle}
      </style>
      <div className={`seconds ${lightSeconds}`}>
        <span></span>
      </div>
      <div className={`hours-container`}>
        <span className={`hours`}></span>
        <span className={`hours`}></span>
        <span className={`hours`}></span>
        <span className={`hours`}></span>
      </div>
      <div className={`single-hour-container`}>
        <span className={`hour`}></span>
        <span className={`hour`}></span>
        <span className={`hour`}></span>
        <span className={`hour`}></span>
      </div>
      <div className={`five-minute-container`}>
        <span className={`five-minute`}></span>
        <span className={`five-minute`}></span>
        <span className={`five-minute`}>15</span>
        <span className={`five-minute`}></span>
        <span className={`five-minute`}></span>
        <span className={`five-minute`}>30</span>
        <span className={`five-minute`}></span>
        <span className={`five-minute`}></span>
        <span className={`five-minute`}>45</span>
        <span className={`five-minute`}></span>
        <span className={`five-minute`}></span>
      </div>
      <div className={`single-minute-container`}>
        <span className={`minute`}></span>
        <span className={`minute`}></span>
        <span className={`minute`}></span>
        <span className={`minute`}></span>
      </div>
    </div>
  );
};

export default BerlinClock;
