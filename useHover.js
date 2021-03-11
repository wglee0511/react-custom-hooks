import React, { useEffect, useRef } from "react";

const useHover = (handleHover) => {
  if (typeof handleHover !== "function") {
    return;
  }
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", handleHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", handleHover);
      }
    };
  }, [element]);

  return element;
};
const App = () => {
  const sayHello = () => console.log("Hello World!");
  const element = useHover(sayHello);
  return (
    <div className="App">
      <h1 ref={element}>Hello </h1>
    </div>
  );
};
