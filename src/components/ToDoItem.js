import React from 'react'

const ToDoItem = ({ todo, onToggleToDo, moveToCompleted }) => {
  const { id, text, completed } = todo;


  const handleToggle = () => {
    onToggleToDo(todo.id);
  };

  const handleMoveToCompleted =  () => {
    moveToCompleted(todo.id);
  };

  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <input
      type= 'checkbox'
      checked= {todo.completed}
      onChange= {handleToggle}
      />
      <span className={todo.completed ? 'completed' : '' }>{todo.test}</span>
      {!todo.complted && (
        <button onclick ={handleMoveToCompleted}> Mark Completed </button>
      )}
    </div>
  );
};

export default ToDoItem;