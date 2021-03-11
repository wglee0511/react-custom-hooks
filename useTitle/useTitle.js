import React, { useState, useEffect } from "react";

const useTitle = (initValue) => {
  const [title, setTitle] = useState(initValue);
  const htmlTitle = document.querySelector("title");

  const changeTitle = () => {
    htmlTitle.innerText = title;
  };

  useEffect(changeTitle, [title]);

  return setTitle;
};

const App = () => {
  const htmlTitleBrowser = useTitle("Loading...");
  setTimeout(() => htmlTitleBrowser("My page"), 3000);
  return (
    <div className="App">
      <h1>Hello </h1>
    </div>
  );
};

export default App;
