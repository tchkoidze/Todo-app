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
          background: props.markCompleted
            ? "url('./src/assets/images/icon-check.svg') no-repeat  center,  linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"
            : null,
        }}
        onClick={() => {
          props.markCompleted
            ? props.setMarkCompleted(false)
            : props.setMarkCompleted(true);
        }}
      ></label>
      <input
        type="text"
        id="create"
        className={props.mode ? "create-light" : "create-dark"}
        placeholder="Create a new todo…"
        style={{
          border: "none",
          fontFamily: "Josefin Sans",

          outline: "none",
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            props.setTodo([
              ...props.todo,
              {
                text: event.target.value,
                done: props.markCompleted,
                id: Date.now(),
              },
            ]);
            props.setMarkCompleted(false);

            console.log(props.todo);
            event.target.value = "";
          }
        }}
      />
    </div>
  );
}

export default CreateToDo;

/*onKeyDown={(event) => {
          if (event.key === "Enter") {
          }
        }}*/
