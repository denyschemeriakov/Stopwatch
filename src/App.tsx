import React, { useState, useEffect } from 'react';
import { Subject } from 'rxjs';
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const App: React.FC = () => {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);
  const [intervalId, setIntervalId] = useState<number>(0);

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

  const waitSubject = new Subject();

  const handleWaitClick = () => {
    // eslint-disable-next-line no-debugger
    debugger;

    waitSubject.subscribe((result) => {
      // eslint-disable-next-line no-debugger
      debugger;
      // eslint-disable-next-line no-console
      console.log(result);
    });
  };

  const emitWaitEvent = () => {
    // eslint-disable-next-line no-debugger
    debugger;
    waitSubject.next(true);
  };

  handleWaitClick();

  useEffect(() => {
    const timeArray: Array<number | string> = calculateTimer(timeInSeconds);

    handleWaitClick();

    setTimerArray(timeArray);
  }, []);

  const handlePlayButton = () => {
    const interval: any = setInterval(() => {
      setTimeInSeconds((previousState: number) => previousState + 1);
    }, 1000);

    setIntervalId(interval);
  };

  // const handleStopButton = () => {
  //   clearInterval(intervalId);
  // };

  const handleResetButton = () => {
    clearInterval(intervalId);
    setTimeInSeconds(0);
  };

  return (
    <div className="w-25 mx-auto mt-5">
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
          onClick={handlePlayButton}
          className="btn btn-outline-primary"
        >
          Start
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
    </div>
  );
};

export default App;
