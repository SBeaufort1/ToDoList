import React, { useState } from 'react'
import ToDoForm from '../components/ToDoForm'
import ToDoItem from '../components/ToDoItem'
import CompletedList from './CompletedList';

const ToDoList = () => {
    //see a list of all tasks
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);
    const [showCompleted, setShowCompleted] = useState (false);

    // adding new tasks to existing list of tasks
    const handleAddTodo = (newTodo) => {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };
    //view/switch between tasks
    const handleToggleTodo = (todoId) => {
        setTodos((prevTodos) => prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo));
    };

    // method to move completed tasks to our completed task page
const handleMoveToCompleted = (todoId) => {
    const completedTodo = todos.find((todo) => todo.id === 
    todoId);
    if (completedTodo){
        setCompletedTodos((prevCompletedTodos) => [
            ...prevCompletedTodos, completedTodo
        ]);
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
    }
}; 

  return (
    <div className='todo-list'>
        <h1>To Do List</h1>
        <ToDoForm onAddToDo={handleAddTodo} />
        <div className='todos'>
            {todos.map((todo) => (
                <ToDoItem
                key={todo.id}
                todo={todo}
                onToggleToDo={handleToggleTodo}
                moveTocompleted = {handleMoveToCompleted}
                />
            ))}
        </div>
        <button onClick = {() => setShowCompleted (!setShowCompleted)}> 
           Completed Tasks
        </button>
        {showCompleted && <CompletedList completedTodos = {completedTodos} />}
    </div>
  );
};

export default ToDoList;