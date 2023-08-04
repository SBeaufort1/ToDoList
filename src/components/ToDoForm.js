import React, { useState } from 'react'

// creating the base form of our toDoList

const ToDoForm = ({onAddToDo}) => {
  const [todoText, setTodoText] =useState('');

  const handleInputChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoText.trim() !== '') {
      onAddToDo({
        id: Date.now(),
        text: todoText.trim(),
        completed: false
      });
      setTodoText('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input 
      type = "text"
      value = {todoText}
      onChange = {handleInputChange}
      placeHolder = 'New Task'
      />

      <button type = 'submit'>
        Add to list
      </button>
      
    </form>
  );
};

export default ToDoForm;