"use client"
import { useState } from "react"

export default function Create(params) {
  
  const [todo, setTodo] = useState("")
  return(
    <>
      <h2>Create a todo here:</h2>
      <div>
        <label>Todo:</label>
        <input value={todo} 
        onChange={(e) => {
          setTodo(e.target.value)
          console.log(todo)  
        }} />
      </div>
      {"todo: " + todo}
    </>
  )
}