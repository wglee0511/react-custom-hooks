import React from "react";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const protect = () => window.addEventListener("beforeunload", listener);
  const unProtect = () => window.removeEventListener("beforeunload", listener);

  return { protect, unProtect };
};
const App = () => {
  const { protect, unProtect } = usePreventLeave();
  return (
    <div className="App">
      <h1>Hello </h1>
      <button onClick={protect}>protect</button>
      <button onClick={unProtect}>unProtect</button>
    </div>
  );
};

export default App;
