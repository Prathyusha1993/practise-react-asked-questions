import React, {useState} from 'react'

const TodoAppComp = () => {
    const [todos, setTodos] = useState([]); 
    const [todo, setTodo] = useState('');
    const [editInput, setEditInput] = useState(null);
    const [editIndex, setEditIndex] = useState('');

    const handleSubmitTodo = (e) => {
        e.preventDefault();
        if(todo.trim() === ''){
            return;
        }
        setTodos([...todos, todo]);
        setTodo('');
    };

    const handleDeleteTodo = (index) => {
        setTodos(todos.filter((todo, i) => i !== index));
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        if(editInput.trim() === ''){
            return;
        }
        setTodos(todos.map((todo, i) => i === editIndex ? editInput : todo));
        setEditIndex(null);
        setEditInput('');
    }

    const  handleCancel = () => {
        setEditIndex(null);
        setEditInput('');
    }

    const handleEditTodo = (index) => {
        setEditIndex(index);
        setEditInput(todos[index]);
    }
  return (
    <div>
        <h4>TodoAppComp</h4>
        <form onSubmit={handleSubmitTodo} style={{display:'flex', border: 'none'}}>
            <input type='text' placeholder='Enter Your Task' value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button style={{marginLeft:'8px', width:'120px'}} type='submit'>Add Task</button>
        </form>
        <ul>
            {todos.map((todo, index )=> (
                <li key={index}>
                    {editIndex === index ? (
                        <form onSubmit={(e) => handleEditSubmit(e, index)}>
                            <input type='text' placeholder='Edit Your Task' value={editInput} onChange={(e) => setEditInput(e.target.value)} />
                            <button type='submit'>Update</button>
                            <button type='button' onClick={() => handleCancel(null)}>Cancel</button>
                        </form>
                    ) : (
                        <>
                        <span>{todo}</span>
                        <button onClick={() => handleEditTodo(index)}>Edit</button>
                        <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                        </>
                    )}
                
                </li>
            ))}
        </ul>
    </div>

  )
}

export default TodoAppComp;