import { useState } from "react";
import "./App.css";
import Header from "./header";
import CreateToDo from "./createtodo";

function App() {
  const [mode, setMode] = useState(true);

  console.log(mode);

  return (
    <div className={`App ${mode ? "light" : "dark"} `}>
      <Header mode={mode} setMode={setMode}></Header>
      <CreateToDo mode={mode} setMode={setMode}></CreateToDo>
    </div>
  );
}

export default App;
