import { FaTimes } from  'react-icons/fa'
const Todo = ({todo , onDelete,onToggle}) => {
    return (
        <div className={`task ${todo.reminder ? 'reminder' : ''}`} onDoubleClick = {() => onToggle(todo.id)}>
         <h3>{todo.text} <FaTimes style = {{color: 'red', cursor:'pointer'}} onClick = {() => onDelete(todo.id)} /></h3>
         <p>{todo.day}</p>
        </div>
    )
}

export default Todo
