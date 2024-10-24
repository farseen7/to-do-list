// src/components/TodoItem.js

import React, { useState } from 'react';

const TodoItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  // Handle toggling edit mode
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // Handle input change
  const handleChange = (e) => {
    setEditText(e.target.value);
  };

  // Handle saving the edited task
  const handleSave = () => {
    if (editText.trim() === '') return; // Prevent empty tasks
    updateTask(task.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={handleChange}
            className="edit-input"
          />
          <button onClick={handleSave} className="save-button">Save</button>
          <button onClick={handleEditToggle} className="cancel-button">Cancel</button>
        </>
      ) : (
        <>
          <span className="task-text">{task.text}</span>
          <button onClick={handleEditToggle} className="edit-button">Edit</button>
          <button onClick={() => deleteTask(task.id)} className="delete-button">Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
