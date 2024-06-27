import React, {useMemo, useState} from 'react'

const MemoizationEx = () => { 
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);
    const calculation = useMemo(() => expensiveCalculation(count), [count])

    const handleAddTodo = () => {
        setTodo((t) => [...todo, 'New Todo'])
    }

  return (
    <div>
        <h4>React Memoization Ex</h4>
        <div>
        {todo.map((todo,index) => {
            return <p key={index}>{todo}</p>
        })}
        <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        <div>
            Count: {count}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h2>Expensive Calculation</h2>
            {calculation}
        </div>
    </div>
  )
}

const expensiveCalculation = (num) => {
    console.log('calaulating....');
    for(let i=0; i< 1000000000; i++){
        num =+ 1;
    }
    return num;
}

export default MemoizationEx;