import React, { useRef } from "react";

const useFullscreen = (callBack) => {
  const element = useRef();

  const exit = () => {
    document.exitFullscreen();
    callBack(false);
  };

  const makeFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      callBack(true);
    }
  };

  return { element, makeFull, exit };
};

const App = () => {
  const checkConsole = (isFull) => {
    console.log(isFull ? "Full" : "Small");
  };
  const { element, makeFull, exit } = useFullscreen(checkConsole);
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://img.etoday.co.kr/pto_db/2021/01/600/20210129123901_1575729_1200_785.jpg" />
        <button onClick={exit}>Exit</button>
      </div>
      <button onClick={makeFull}>Full</button>
    </div>
  );
};

export default App;
