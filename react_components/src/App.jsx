import "./App.css";
import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => {
    if (counter < 1) return;
    setCounter(counter - 1);
  };
  const reset = () => setCounter(0);
  return (
    <div>
      <h1>{counter}</h1>
      <Button handler={increment} text="Increment" />
      <Button handler={decrement} text="Decrement" />
      <Button handler={reset} text="Reset" />
    </div>
  );
}

export default App;
