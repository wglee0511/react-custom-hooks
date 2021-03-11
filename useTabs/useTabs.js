import React, { useState } from "react";

//content is data from API.

const contents = [
  {
    tab: "section1",
    content: "im the content of the section 1"
  },
  {
    tab: "section2",
    content: "im the content of the section 2"
  }
];

const useTabs = (initValue, contents) => {
  const [currentIndex, setChangeIndex] = useState(initValue);

  return {
    currentItem: contents[currentIndex],
    changeItem: setChangeIndex
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, contents);
  return (
    <div className="App">
      <h1>Hello </h1>
      {contents.map((content, index) => {
        return <button onClick={() => changeItem(index)}>{content.tab}</button>;
      })}
      <span>{currentItem.content}</span>
    </div>
  );
};

export default App;
