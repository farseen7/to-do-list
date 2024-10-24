import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, updateTask, deleteTask }) => {
  if (tasks.length === 0) {
    return <p className="no-tasks">No tasks available. Add a task!</p>;
  }

  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TodoList;