import { useState, useEffect, useMemo } from "react";
import "./Timer.css";

function Timer() {
  const targetDate = useMemo(() => new Date("2024-04-01T00:00:00Z"), []);

  const calculateTimeLeft = (targetDate) => {
    const now = new Date();
    const timeDifference = targetDate - now;
    const totalSeconds = Math.max(0, Math.floor(timeDifference / 1000));
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return {
      totalSeconds,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.total <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
      {timeLeft.totalSeconds > 0 ? (
        <>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">{`${timeLeft.days}`}</h2>
            <h3 className="text-2xl">Days</h3>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">{`${timeLeft.hours}`}</h2>
            <h3 className="text-2xl">Hours</h3>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">{`${timeLeft.minutes}`}</h2>
            <h3 className="text-2xl">Minutes</h3>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">{`${timeLeft.seconds}`}</h2>
            <h3 className="text-2xl">Seconds</h3>
          </div>
        </>
      ) : (
        <h3>¡The wait has ended!</h3>
      )}
    </div>
  );
}

export default Timer;
