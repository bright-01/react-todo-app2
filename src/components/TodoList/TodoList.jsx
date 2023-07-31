import React, { useState } from 'react';
import AddTodo from "../AddTodo/AddTodo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '123', text: '장보기', status: 'active' },
    { id: '124', text: '공부하기', status: 'active' },
  ]);
    const [value, setValue] = useState('');

  const handleAddButton = () => {

      if(value.trim() === '') return;

      setTodos((prevState)=>{

          const index = prevState.length +1;

          return [...prevState, {id:index, text: value, status: 'active'}]


      })

      setValue('');
  }

  const handleOnChangeValue = (e) => setValue(e.target.value);


  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
        <input type="text" value={value} onChange={handleOnChangeValue}/><button onClick={handleAddButton}>add</button>
        <AddTodo/>
    </section>
  );
}
