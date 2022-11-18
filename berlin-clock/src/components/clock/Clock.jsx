import React, { useState, useEffect } from "react";
import BerlinClock from "./BerlinClock";

const Clock = () => {
  const [timeHour, setTimeHour] = useState(new Date().getHours());
  const [timeMinutes, setTimeMinutes] = useState(new Date().getMinutes());
  const [timeSeconds, setTimeSeconds] = useState(new Date().getSeconds());

  const passTime = () => {
    setTimeHour(new Date().getHours());
    setTimeMinutes(new Date().getMinutes());
    setTimeSeconds(new Date().getSeconds());
  };

  useEffect(() => {
    const timerId = setInterval(passTime, 1000);

    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="clock">
      <span>
        {timeHour.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        :
        {timeMinutes.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        :
        {timeSeconds.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </span>
      <BerlinClock seconds={timeSeconds} minutes={timeMinutes} hours={timeHour} />
    </div>
  );
};

export default Clock;
