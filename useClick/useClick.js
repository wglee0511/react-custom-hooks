import React, { useEffect, useRef } from "react";

const useClick = (handleClick) => {
  if (typeof handleClick !== "function") {
    return;
  }
  const element = useRef();
  console.log(element);
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", handleClick);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return element;
};

const App = () => {
  const sayHello = () => console.log("Hello World!");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hello </h1>
    </div>
  );
};

export default App;
