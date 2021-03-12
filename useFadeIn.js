import React, { useEffect, useRef } from "react";

const useFadeIn = (duration = 1) => {
  if (typeof duration !== "number") {
    return;
  }
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s`;
      current.style.opacity = 1;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const elementForH1 = useFadeIn();
  return (
    <div className="App">
      <h1 {...elementForH1}>Hello </h1>
    </div>
  );
};

export default App;
