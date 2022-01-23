import React, {useState} from "react";
import './App.css';
import Todo from "./components/Todo";

function App() {

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  //===DELETE===
  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });
    setTodos(filteredTodos);
  }

  //===ADD TO ARRAY===
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

  //TOGGLE CHECKBOX===
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
      {todos.map((todo, i) => {
          return (
            <Todo key={i} i={i} todo={todo} 
            toggleComplete = {toggleComplete} 
            handleTodoDelete = {handleTodoDelete}
            />
          );
        })}
    </div>
  );
}

export default App;
