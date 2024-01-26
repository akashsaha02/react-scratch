import { useEffect, useState } from 'react'
import { TodoProvider } from './context'
import './App.css'
import { TodoForm, TodoItem } from './components'

function App() {
  // state to mange the todos
  const [todos, setTodos] = useState([])
  // add todo function
  const addTodo = (todo) => {
    // taking all the previous todos and the new todo object with a id with the current time
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }
  // update todo function
  const updatedTodo = (id, todo) => {
    // if the id matches with any of the previous todo then update todo else remain the same content as before
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }
  // delete todo function
  const deleteTodo = (id) => {
    // filter the todo without the id getting from the props
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  // is complete function
  const toggleComplete = (id) => {
    // map through all the todos if the id matches with the previous todo then just change to false else remain the same
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }
  // Store the todos in local storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    // when todos have some sort of length then only update the todo
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.getItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }}>
      <div className="bg-white min-h-screen py-8">
        <div className="w-full bg-cyan-900 max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
