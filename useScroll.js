import React, { useEffect, useState } from "react";

const useScroll = () => {
  const [coordination, setCoordination] = useState({
    x: 0,
    y: 0
  });

  const onScroll = () => {
    setCoordination({
      x: window.scrollX,
      y: window.scrollY
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return coordination;
};

const App = () => {
  const coordination = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1
        style={{
          position: "fixed",
          color: coordination.y > 100 ? "green" : "blue"
        }}
      >
        Hello
      </h1>
    </div>
  );
};

export default App;
