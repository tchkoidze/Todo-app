import "./todoList.css";

function ToDoList(props) {
  //const items = props.todo;
  const keys = 0;

  return (
    <div
      className={`todo-list-container ${
        props.mode ? "todo-list-container-light" : "todo-list-container-dark"
      }`}
    >
      <ul
        className={props.mode ? "list-light" : "list-dark"}
        style={{ listStyle: "none", borderRadius: "5px" }}
      >
        {props.todo.map((item, index) => {
          return (
            <li
              className={`list-item ${
                props.mode ? "list-item-light" : "list-item-dark"
              }`}
              style={{
                color: props.mode
                  ? item.done
                    ? "#D1D2DA"
                    : null
                  : item.done
                  ? "#4D5067"
                  : null,
              }}
              key={item.id}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  className={`completed-checker ${
                    props.mode
                      ? "completed-checker-light"
                      : "completed-checker-dark"
                  }`}
                  style={{
                    background: item.done
                      ? "url('./src/assets/images/icon-check.svg') no-repeat  center, linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"
                      : null,
                  }}
                  onClick={() => {
                    const checkComplitness = [...props.todo].map((y) => {
                      if (y.id === item.id) {
                        return {
                          ...y,
                          done: !y.done,
                        };
                      } else {
                        return y;
                      }
                    });
                    props.setTodo(checkComplitness);
                  }}
                ></div>{" "}
                <p className="todo-txt">{item.text}</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 18 18"
                onClick={() => {
                  const newnTodoLst = [...props.todo].filter(
                    (x) => x.id !== item.id
                  );
                  props.setTodo(newnTodoLst);
                }}
              >
                <path
                  fill="#494C6B"
                  fillRule="evenodd"
                  d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                />
              </svg>
            </li>
          );
        })}
        <div className="todo-list-info" style={{ display: "flex" }}>
          <p
            className={
              props.mode ? "list-info-btns-light" : "list-info-btns-dark"
            }
          >
            {" "}
            <span>{props.todo.length}</span> items left
          </p>
          <div
            className={`list-info-desktop ${
              props.mode ? "list-info-mobile-light" : "list-info-mobile-dark"
            }`}
          >
            <p
              className={`list-filter ${
                props.mode ? "list-filter-light" : "list-filter-dark"
              }`}
              onClick={(e) => (e.target.style.color = "blue")}
            >
              All
            </p>
            <p
              className={`list-filter ${
                props.mode ? "list-filter-light" : "list-filter-dark"
              }`}
            >
              Active
            </p>
            <p
              className={`list-filter ${
                props.mode ? "list-filter-light" : "list-filter-dark"
              }`}
            >
              Completed
            </p>
          </div>
          <p
            className={
              props.mode ? "list-info-btns-light" : "list-info-btns-dark"
            }
            onClick={() => {
              const complitedList = [...props.todo].filter((z) => !z.done);
              props.setTodo(complitedList);
            }}
          >
            Clear Completed
          </p>
        </div>
      </ul>
      <div
        className={`list-info-mobile ${
          props.mode ? "list-info-mobile-light" : "list-info-mobile-dark"
        }`}
      >
        <p
          className={`list-filter ${
            props.mode ? "list-filter-light" : "list-filter-dark"
          }`}
        >
          All
        </p>
        <p
          className={`list-filter ${
            props.mode ? "list-filter-light" : "list-filter-dark"
          }`}
        >
          Active
        </p>
        <p
          className={`list-filter ${
            props.mode ? "list-filter-light" : "list-filter-dark"
          }`}
        >
          Completed
        </p>
      </div>
    </div>
  );
}

export default ToDoList;

/*const listItems = props.todo.map((item) => {
    <li>item</li>;
  });*/
