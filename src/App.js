
import './App.css';
import { useReducer, useState } from 'react';




function reducer(state, Action) {
  switch (Action.type) {

    case 'increment': {
      const hasError = state.count >= 5
      const newCount = state.count + 1
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? 'Maximum count reached' : null
      }
    }

    case 'decrement': {
      const hasError = state.count <= 0
      const newCount = state.count - 1
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? 'Minimum count reached' : null
      }
    }

    default:
      return state
  }
}


const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>Count: {state.count}</p>
      {state.error && <p className='text-red-400 text-xl font-bold'>{state.error}</p>}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  )
}
export default App;
