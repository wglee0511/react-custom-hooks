import React from "react";
import {render} from "react-dom";
import { useInput } from "./useInput";



const App = () => {
    const { name, handleNameChange } = useInput("");
    return (
      <div className="App">
        <h1>Hello {name}</h1>
        <input placeholder="name" value={name} onChange={handleNameChange} />
      </div>
    );
  };
  
render(<App /> , document.querySelector("#react-root")));

  