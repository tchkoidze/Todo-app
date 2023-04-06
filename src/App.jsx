import { useState } from "react";
import "./App.css";
import Header from "./header";
import CreateToDo from "./createtodo";
import ToDoList from "./todoList";

function App() {
  const [mode, setMode] = useState(true);
  const [todo, setTodo] = useState([]);
  const [completed, setCompleted] = useState(false);

  console.log(mode);
  console.log(todo);

  return (
    <div className={`App ${mode ? "light" : "dark"} `}>
      <Header mode={mode} setMode={setMode}></Header>
      <CreateToDo
        mode={mode}
        todo={todo}
        markCompleted={completed}
        setMode={setMode}
        setTodo={setTodo}
        setMarkCompleted={setCompleted}
      ></CreateToDo>
      <ToDoList
        mode={mode}
        todo={todo}
        setMode={setMode}
        setTodo={setTodo}
      ></ToDoList>
    </div>
  );
}

export default App;
