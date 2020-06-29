import React from 'react';

import './App.css';

function App() {
  const [todo, setTodo] = React.useState([]);
  const [inputValue, setInputVale] = React.useState('');
  const [currentId, setCurrentId] = React.useState('');
  const addItems = (event) => {
    event.preventDefault();
    let data = { id: Math.random().toString(), task: inputValue };
    setTodo([...todo, data]);
    setInputVale('');
  };

  const deleteItem = (id) => {
    const oldTodos = [...todo];
    let newTodos = oldTodos.filter((elem) => elem.id !== id);
    setTodo(newTodos);
  };

  const editItem = (id) => {
    setCurrentId(id);
  };

  return (
    <div className='App'>
      <div className='input-container'>
        <form onSubmit={addItems}>
          <input
            required
            onChange={(event) => setInputVale(event.target.value)}
            type='text'
            value={inputValue}
            placeholder='Enter Text'
          ></input>
          <button type='submit'>Add Task</button>
        </form>
      </div>
      {todo.map((elem) => {
        return (
          <div key={elem.id} className='task-container'>
            <p
              onBlur={() => editItem('')}
              style={{ backgroundColor: currentId === elem.id ? 'yellow' : '' }}
              contentEditable={currentId === elem.id}
            >
              {elem.task}
            </p>
            <button onClick={() => editItem(elem.id)}>Edit</button>
            <button onClick={() => deleteItem(elem.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
