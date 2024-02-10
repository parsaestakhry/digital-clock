import { useEffect, useState } from "react";

export const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const padZero = (number) => {
    return (number < 10 ? "0" : "") + number;
  };

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(
      seconds
    )} ${meridiem}`;
  };

  return (
    <>
      <div className="clock-container">
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </>
  );
};
