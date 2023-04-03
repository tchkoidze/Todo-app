import "./createtodo.css";

function CreateToDo(props) {
  return (
    <div className={`create-todo-box ${props.mode ? null : "dark-box"} `}>
      <label
        className={props.mode ? "circle" : "circle-dark"}
        htmlFor="create"
        style={{
          display: "block",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
        }}
      ></label>
      <input
        type="text"
        id="create"
        className={props.mode ? "create-light" : "create-dark"}
        placeholder="Create a new todo…"
        value={"Currently typing"}
        style={{
          border: "none",
          fontFamily: "Josefin Sans",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "12px",
          letterSpacing: "-0.166667px",
          outline: "none",
        }}
      />
    </div>
  );
}

export default CreateToDo;
