import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';
import "./app.css"


function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))
  }, [todos])

  function addToDo(title) {
    setTodos((currentToDos) => {
      return [
        ...currentToDos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleToDo(id, completed) {
    setTodos(currentToDos => {
      return currentToDos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentToDos => {
      return currentToDos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/signin" element={<SignInPage />} />
          <Route path="/" element={<div>
            <NewTodoForm onSubmit={addToDo} />
            <h1 className='header'>To-Do List</h1>
            <TodoList todos={todos} toggleTodo={toggleToDo} deleteTodo={deleteTodo} />
          </div>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
