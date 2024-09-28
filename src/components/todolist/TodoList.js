import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, handleComplete, handleEdit, handleDelete, handleRestore }) {
  return (
    <div className="task-container">
      <h2>Pending Tasks</h2>
      <ul className="todo-list">
        {todos
          .filter((todo) => !todo.completed && !todo.deleted)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleComplete={handleComplete}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
      </ul>

      <h2>Completed Tasks</h2>
      <ul className="todo-list">
        {todos
          .filter((todo) => todo.completed && !todo.deleted)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          ))}
      </ul>

      <h2>Deleted Tasks</h2>
      <ul className="todo-list">
        {todos
          .filter((todo) => todo.deleted)
          .map((todo) => (
            <li key={todo.id} className="todo-item deleted">
              {todo.title} - {todo.category} - Due: {todo.dueDate}
              <div>
                <button onClick={() => handleRestore(todo.id)} className="restore-btn">
                  Restore
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TodoList;
