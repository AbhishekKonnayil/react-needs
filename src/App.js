import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount(count - 1)
  }
  const increment = () => {
    setCount(count + 1)
  }
  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
