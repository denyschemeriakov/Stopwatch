import React, { useState, useEffect } from 'react';
import {
  Subject, map, bufferCount, filter,
} from 'rxjs';

const Stopwatch: React.FC = () => {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);
  const [intervalId, setIntervalId] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);

  const calculateTimer = (time: number): Array<number | string> => {
    const hours: number = Math.floor(time / 3600);
    const minutes: number = Math.floor((time - (hours * 3600)) / 60);
    const seconds: number = time - (hours * 3600) - (minutes * 60);

    const hoursFormat = hours < 10 ? `0${hours}` : hours;
    const minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
    const secondsFormat = seconds < 10 ? `0${seconds}` : seconds;

    return [
      hoursFormat,
      minutesFormat,
      secondsFormat,
    ];
  };

  const [waitSubject] = useState<Subject<boolean>>(new Subject());

  const handleWaitClick = () => {
    const clickCount = 2;
    const clickTimespan = 300;

    waitSubject.pipe(
      map(() => new Date().getTime()),
      bufferCount(clickCount, 1),
      filter((timestamps) => {
        return timestamps[0] > new Date().getTime() - clickTimespan;
      }),
    ).subscribe(() => {
      clearInterval(intervalId);
      setRunning(!running);
    });
  };

  const emitWaitEvent = () => {
    waitSubject.next(true);
  };

  useEffect(() => {
    const timeArray: Array<number | string> = calculateTimer(timeInSeconds);

    handleWaitClick();

    setTimerArray(timeArray);
  }, [timeInSeconds]);

  const handleStartStopButton = () => {
    if (!running) {
      const interval: any = setInterval(() => {
        setTimeInSeconds((previousState: number) => previousState + 1);
      }, 1000);

      setIntervalId(interval);
    } else {
      clearInterval(intervalId);
      setTimeInSeconds(0);
    }

    setRunning(!running);
  };

  const handleResetButton = () => {
    if (running) {
      clearInterval(intervalId);
      setTimeInSeconds(0);
      const interval: any = setInterval(() => {
        setTimeInSeconds((previousState: number) => previousState + 1);
      }, 1000);

      setIntervalId(interval);
    }
  };

  return (
    <>
      <section className="d-flex justify-content-center display-3">
        <p>{timerArray[0]}</p>
        <span>:</span>
        <p>{timerArray[1]}</p>
        <span>:</span>
        <p>{timerArray[2]}</p>
      </section>

      <div className="d-flex justify-content-center">
        <button
          type="button"
          onClick={handleStartStopButton}
          className="btn btn-outline-primary"
        >
          Start/Stop
        </button>
        <button
          type="button"
          onClick={emitWaitEvent}
          className="btn btn-outline-primary mx-2"
        >
          Wait
        </button>
        <button
          type="button"
          onClick={handleResetButton}
          className="btn btn-outline-primary"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Stopwatch;
