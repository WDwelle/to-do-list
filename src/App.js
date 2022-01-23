import React, {useState} from "react";
import './App.css';

function App() {

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });
    setTodos(filteredTodos);
  }
  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if (newTodo.length === 0){
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    //===setTodos and adds newTodo too array===
    setTodos([...todos, todoItem])
    setNewTodo("");
  }

  return (
    <div className="App">
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event)
      }}>
        <input onChange={(event) => {
          setNewTodo(event.target.value);
        }} type="text" />
        <div>
          <button>Add</button>
        </div>
      </form>
      {
        todos.map((todo, i) => {
          return (
            <div key={i}>
              <span>{todo.text}</span>
              <input type="checkbox"/>
              <button onClick={(event) => {
                handleTodoDelete(i);
              }}
              style={{marginLeft: "10px"}}
              >Delete</button>
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
