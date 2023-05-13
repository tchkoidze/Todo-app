import { useState, useRef } from "react";
import "./App.css";
import Header from "./header";
import CreateToDo from "./createtodo";
import ToDoList from "./todoList";
import axios from "axios";

function App() {
  const [mode, setMode] = useState(true);
  const [todo, setTodo] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [clicked, setClicked] = useState("All");
  const [allToDo, setAllToDo] = useState([]);

  {
    /*const createTodo = async () => {
    try {
      const response = await axios.post(
        "https://todolist-api-production.up.railway.app/api/todo/add",
        {
          done: false,
          todo: "make differenceto my life boy",
        }
      );
      const data = await response.data;
      console.log(data);
    } catch (error) {}
  };
  createTodo();

  const getRequestTodo = async () => {
    try {
      const response = await axios.get(
        "https://todolist-api-production.up.railway.app/api/todo"
      );
      const data = await response.data;
      console.log(data);
      //setQuote(data);
    } catch (error) {
      console.error(error.message);
    }
  };
  getRequestTodo();
  
  const deleteTodo = async (id) => {
    axios.delete(
      `https://todolist-api-production.up.railway.app/api/delete/${id}`
    );
  };
*/
  }
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
