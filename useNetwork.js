import React, { useEffect, useState } from "react";

const useNetwork = (onChange) => {
  const [state, setState] = useState(navigator.onLine);

  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setState(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return state;
};

const App = () => {
  const handleNetWorkChange = (online) => {
    console.log(online ? "We just went to online" : "Disconneted");
  };
  const online = useNetwork(handleNetWorkChange);
  return (
    <div className="App">
      <h1>{online ? "Online" : "Offline"} </h1>
    </div>
  );
};

export default App;
