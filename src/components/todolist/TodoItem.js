import React from 'react';

function TodoItem({ todo, handleComplete, handleEdit, handleDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div>
        {todo.title} - {todo.category} - Due: {todo.dueDate}
      </div>
      <div>
        <button onClick={() => handleComplete(todo.id)} className="complete-btn">
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        {!todo.deleted && (
          <>
            <button onClick={() => handleEdit(todo)} className="edit-btn">
              Edit
            </button>
            <button onClick={() => handleDelete(todo.id)} className="delete-btn">
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
