import React from "react";
import TodoTask from "./TodoTask";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  if (todos.length === 0) {
    return <h1 className="mt-4 ml-2 lg:ml-0">Add Tasks to see</h1>;
  }
  // console.log(todos);

  return (
    <>
      <h2 className="mt-4 ml-2 lg:ml-0">Tasks:</h2>
      {todos.map((todo, index) => (
        <TodoTask
          todo={todo}
          key={index}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </>
  );
};

export default TodoList;
