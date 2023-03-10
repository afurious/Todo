import { useState, useEffect } from "react"
import style from "./todoForm.module.css"


const TodoFrom = ({setTodos, todos}) => {

  const [text, setText] = useState("")
     function add(e){
      e.preventDefault()
      
    setTodos((prev) => {
         return [...prev, {name: text, completed: false}]
    })
    
     }

     useEffect(() => {
          localStorage.setItem("todos", JSON.stringify(todos))
     }, [todos])
  return (
    <div className={style.container}>
      <form>
        <input type="text" placeholder="Add todo"  onChange={(e) => {setText(e.target.value)}}/>
        <button onClick={add}>+</button>
      </form>
    </div>
  )
}

export default TodoFrom
