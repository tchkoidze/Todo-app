import { useState, useRef } from "react";
import "./App.css";
import Header from "./header";
import CreateToDo from "./createtodo";
import ToDoList from "./todoList";

function App() {
  const [mode, setMode] = useState(true);
  const [todo, setTodo] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [clicked, setClicked] = useState("All");
  const [allToDo, setAllToDo] = useState([]);

  const actives = todo.filter((z) => !z.done);
  const complete = todo.filter((m) => m.done);
  const newArray =
    clicked == "All"
      ? todo
      : clicked == "Active"
      ? actives
      : clicked == "Completed"
      ? complete
      : undefined;

  console.log(newArray);

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
        todo={newArray}
        allToDo={todo}
        clicked={clicked}
        setMode={setMode}
        setTodo={setTodo}
        setClicked={setClicked}
        setAllToDo={setTodo}
      ></ToDoList>
    </div>
  );
}

export default App;
