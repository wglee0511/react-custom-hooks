import React, { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handleLeave = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);
};
const App = () => {
  const onBefore = () => console.log("Pleas don't leave");
  useBeforeLeave(onBefore);
  return (
    <div className="App">
      <h1>Hello </h1>
    </div>
  );
};

export default App;
