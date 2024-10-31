import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
const InputForm = () => {
  const [taskName, setTaskName] = useState("");

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("Tasks");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskName("");
  };

  const addTodo = (taskName) => {
    if (taskName === "") {
      alert("Enter the task name to add a task");
    } else {
      setTodos((todos) => {
        return [...todos, { id: uuidv4(), task: taskName, completed: false }];
      });
    }
  };

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo, index) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };
  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };
  const clearTodo = () => {
    const todoList = [];
    localStorage.setItem("Tasks", JSON.stringify(todoList));
    setTodos(todoList);
  };

  return (
    <>
      <div className="flex justify-between mt-12 px-1 lg:px-0">
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            placeholder="add task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="border border-blue-600 rounded-lg px-1 py-2 w-2/3 lg:w-full "
          />
          <button
            className="lg:ml-8 ml-2 rounded-xl bg-blue-200 px-3 py-2"
            onClick={() => {
              addTodo(taskName);
            }}
          >
            add
          </button>
        </form>
        <button
          onClick={clearTodo}
          className="border border-red-600 bg-red-100 font-bold rounded-lg px-3 py-2 "
        >
          Clear!
        </button>
      </div>

      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </>
  );
};

export default InputForm;
