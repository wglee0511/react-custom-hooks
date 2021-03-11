import { useState } from "react";


export const useInput = (initValue) => {
    const [name, setName] = useState(initValue);
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
    return { name, handleNameChange };
  };