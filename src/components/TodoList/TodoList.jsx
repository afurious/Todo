import Todo from "../Todo/Todo"
import style from "./TodoList.module.css"
import { v4 as uuidv4 } from 'uuid';

const TodoList = ({todos, setTodos}) => {
  const handleComplete = (i) => {
    let updated = todos.map((item, index) => {
      if (index === i ){
        item.completed =!item.completed
      }
      return item
    })
    setTodos(updated)
  }
  return (
    <div className={style.container}>
     {
      todos.map((item , i) => {
      return (
         <div onDoubleClick={() => {handleComplete(i)}}>
          <Todo item={item} todos= {todos} setTodos = {setTodos} i = {i} key ={uuidv4()}/>
          </div>
        )
      })
     }
    </div>
  )
}

export default TodoList
