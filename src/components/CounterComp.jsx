import React, {useState} from 'react'

const CounterComp = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h4>Counter App <h3>{count}</h3></h4>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button style={{marginLeft:'8px'}} onClick={() => setCount(count - 1)}>Decrement</button>
        <button style={{marginLeft:'8px'}} onClick={() => setCount(0)}>Reset</button>
        <button style={{marginLeft:'8px'}} onClick={() => setCount(count * 2)}>Double</button>
    </div>
  )
}

export default CounterComp;