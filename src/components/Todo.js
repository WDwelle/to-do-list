const Todo = (props) => {
    const todoClasses =[];

    if (props.todo.complete) {
        todoClasses.push("line-through");
    }
    return(
        <div>
            <span className={todoClasses.join(" ")}>{props.todo.text}</span>
            <input onChange={(event) => {
                props.toggleComplete(props.i);
            }} checked={props.todo.complete}  type="checkbox"/>
            <button onClick={(event) => {
                props.handleTodoDelete(props.i);
            }}
            style={{marginLeft: "10px"}}
            >Delete</button>
        </div>
    )
}

export default Todo;