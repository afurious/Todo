import { useState } from "react";
import TodoFrom from "./components/TodoForm/TodoFrom";
import TodoList from "./components/TodoList/TodoList";

function App() {
  let todosFromStorage = JSON.parse(localStorage.getItem("todos")) || [];
  console.log(" :");
  const [todos, setTodos] = useState(todosFromStorage);
  console.log(todos.length);

  return (
    <div className="container">
      <header>
        <h1>
          <span>Todo</span>App
        </h1>
        <h3>Da-Furious</h3>
      </header>
      <TodoFrom setTodos={setTodos} todos={todos} />
      {todos.length < 1 && (
        <p style={{ color: "white", marginTop: "20px", fontSize: "24px" }}>
          Please start adding todos
        </p>
      )}
      <TodoList todos={todos} setTodos={setTodos} />
      <div>
        <p style={{ color: "red", fontSize: "25px" }}>
          Total task: {todos.length}
        </p>
        <p style={{ color: "white" }}>
          Complete: {todos.filter((item) => item.completed).length}
        </p>
      </div>
    </div>
  );
}

export default App;
