import React, { useState } from 'react'

export const Counter = () => {

  const [counter, setCounter] = useState(0)

  const increment = (number:number = 1): void => {
    setCounter(counter + number)
  }

  return (
    <div className="mt-5">
        Counter
        <h3>counter: useState</h3>
        <span> contador: {counter}</span>
        <br/>
        <button onClick={()=> increment()}>+1</button>
        <button onClick={() => increment(2)}>+2</button>
        <button onClick={() => setCounter(0)}>reset</button>
        </div>
  )
}
