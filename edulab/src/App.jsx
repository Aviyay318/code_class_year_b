import { useState } from 'react'
import './App.css'
import ToDoList from "./components/ToDoList.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello</h1>
      <ToDoList />
    </>
  )
}

export default App
