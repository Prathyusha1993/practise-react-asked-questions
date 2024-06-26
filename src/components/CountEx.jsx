import React, { useEffect, useState } from 'react'

const CountEx = () => {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         setCount(prevCount => prevCount + 1);
    //     }, 1000);
    //     return () => clearInterval(id);
    // });

    // useEffect(() => {
    //     if(count === 3) {
    //         clearInterval(id);
    //     }
    // }, [count]);
  return (
    <div>
        <h4>CountEx</h4>
        <button onClick={e => setCount(count + 1)}>Increment</button>
        <button onClick={e => setCount(count - 1)}>Decrement</button>
        {/* <h1>{count}</h1> */}
        {count % 2 === 0 ? 'even' : 'odd'}
    </div>
  )
}

export default CountEx;