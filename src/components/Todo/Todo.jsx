import { useState } from "react"
import style from "./Todo.module.css"

const Todo = ({item, todos, setTodos, i}) => {
  
  const [data, setData] = useState({
    name: item.name  ,
    completed: item.completed
  })
const [edit, setEdit] = useState(false)
const handleDelete = () => {
   setTodos(todos.filter((todo , index) => {
        return index !== i
   }))
}

  return (
    <div className={style.container} id="completed">
      <input type="text" value={data.name}  onChange={(e) => {
       setData((prev) => {
        return {...prev, name: e.target.value}
       })
      }}
      readOnly = {!edit}
      className = {edit ? style.editable : undefined}
      />

      <button onClick={() => setEdit(!edit)}>{edit ? "Done" : "EDIT"}</button>
      <button onClick={handleDelete}>DELETE</button>
      
      <div className={item.completed ? style.completed : undefined }></div>
    </div>
  )
}

export default Todo
