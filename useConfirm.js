import React from "react";

const useConfirm = (message, callBack) => {
  if (typeof callBack !== "function") {
    return;
  }
  const confirmForEvent = () => {
    if (confirm(message)) {
      callBack();
    }
  };
  return confirmForEvent;
};
const App = () => {
  const handleDelete = () => console.log("Completed");
  const confirmButtonClick = useConfirm("Really?", handleDelete);
  return (
    <div className="App">
      <h1>Hello </h1>
      <button onClick={confirmButtonClick}>Delete Data</button>
    </div>
  );
};

export default App;
