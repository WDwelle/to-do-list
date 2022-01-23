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

  const toggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setTodos(updatedTodos);
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
              <input onChange={(event) => {
                toggleComplete(i);
              }} checked={todo.complete}  type="checkbox"/>
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
