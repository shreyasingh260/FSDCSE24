// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

function MyState() {
  const [counter, setCount] = useState(10)
  const [color, setColor] = useState('red')

  function decrement() {
    setCount(counter - 5)
  }

  function increment() {
    setCount(counter + 10)
  }

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>

      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: color,
          marginTop: '20px',
          border: '1px solid black'
        }}
      ></div>

      <div>
        <button onClick={() => setColor('red')}>Red</button>
      </div>
      <div>
        <button onClick={() => setColor('blue')}>Blue</button>
      </div>
      <div>
        <button onClick={() => setColor('green')}>Green</button>
      </div>
    </div>
  )
}

export default MyState