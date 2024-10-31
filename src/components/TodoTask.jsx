import React from "react";

const TodoTask = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="mt-2 bg-blue-50 h-12 flex w-full px-3  lg:mx-0">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => toggleTodo(todo.id, e.target.checked)}
      />
      <div className="w-full flex justify-between py-2 mx-2">
        {!todo.completed ? (
          <label className="text-lg">{todo.task}</label>
        ) : (
          <label className="text-lg line-through opacity-50">{todo.task}</label>
        )}
        <button
          className="border-red-900 border rounded-xl text-red-400 ml-4  px-2"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
      <br />
    </div>
  );
};

export default TodoTask;
