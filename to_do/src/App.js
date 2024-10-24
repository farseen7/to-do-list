// src/App.js

import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Handle adding a new task
  const handleAddTask = () => {
    if (newTask.trim() === '') return; // Prevent adding empty tasks
    const newTaskObj = {
      id: Date.now(),
      text: newTask.trim(),
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask(''); // Clear the input field
  };

  // Handle updating a task
  const updateTask = (id, updatedText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: updatedText } : task
    );
    setTasks(updatedTasks);
  };

  // Handle deleting a task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Handle pressing Enter key to add task
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="App">
      <h1>React To-Do List</h1>
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new task..."
        />
        <button onClick={handleAddTask} className="add-button">Add Task</button>
      </div>
      <TodoList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
