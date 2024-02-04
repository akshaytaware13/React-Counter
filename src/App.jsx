import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log("Value Incresed", counter);
  };

  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
    console.log("Value Decreased", counter);
  };

  return (
    <>
      <h2>React Counter++</h2>
      <div className="container">
        <h3>Counter Value : {counter} </h3>
        <button onClick={addValue}>Increase Value</button>
        <button onClick={removeValue}>Decrease Value</button>
      </div>
    </>
  );
}

export default App;
