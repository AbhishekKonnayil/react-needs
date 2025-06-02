import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('blue')

  const decrement = () => {
    setCount(previousCount => previousCount - 1)
  }
  const increment = () => {
    setCount(previousCount => previousCount + 1)
    setTheme('red')
  }
  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
