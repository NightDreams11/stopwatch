import './App.css';
import DisplayComponent from './Components/DisplayComponent/DisplayComponent';
import React, { useState } from 'react';
import BtnComponent from './Components/DisplayComponent/BtnComponent';

function App() {

  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  }

  const stop = () => {
    clearInterval(interv)
    setStatus(2);
  }

  const reset = () => {
    clearInterval(interv)
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 })
  }

  const resume = () => {
    start();
  }

  let updateMs = time.ms;
  let updateS = time.s;
  let updateM = time.m;
  let updateH = time.h;

  const run = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    updateMs++;
    return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH });
  }

  return (
    <div>
      <div>
        <div>
          <DisplayComponent time={time}></DisplayComponent>
          <BtnComponent start={start} stop={stop} reset={reset} resume={resume} status={status}></BtnComponent>
        </div>
      </div>
    </div>
  );
}

export default App;
