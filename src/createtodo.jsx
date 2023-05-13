import "./createtodo.css";
import axios from "axios";

function CreateToDo(props) {
  const addTodo = async () => {
    console.log(999);
    try {
      const response = await axios.post(
        "https://todolist-api-production.up.railway.app/api/todo/add",
        {
          done: props.markCompleted,
          todo: event.target.value,
        }
      );
      const data = await response.data;
      props.setTodo([...props.todo, data]);

      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

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
            {
              /*props.setTodo([
              ...props.todo,
              {
                text: event.target.value,
                done: props.markCompleted,
                id: Date.now(),
              },
            ]);*/
            }
            console.log(77);
            addTodo();
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
