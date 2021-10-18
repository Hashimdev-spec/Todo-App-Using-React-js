import Header from './components/heaader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Addtodo from './components/Addtodo';
import Addtodos from './components/Addtodos';
import Footer from './footer';
function App() {

   const [showAddtodo, setshowAddtodo] = useState(false);

     const [todos, setTodos] = useState ([{
      id:1,
      text:'Doctors Appointment 👨‍⚕️😷',
      day: "Yesterday",
      reminder:true,
  },
  {
      id:2,
      text:'Meeting at School🤝',
      day: "2 days ago",
      reminder:false,
  },
  {
      id:3,
      text:'Take a Ride 🚗',
      day: "Everyday",
      reminder:true,
  },
  {
      id:4,
      text:`📞 Call 'Mom' `,
      day: "Today",
      reminder:true,
  }
 
])
   
// DELETE TODOS
  const DeleteTodo = (id) =>{
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  
  // ADD TODO

  const ADDtodo = (todo) =>{
    const id  = Math.floor(Math.random() * 10000) +1
    const newTodo = {id, ...todo}
    setTodos([...todos, newTodo])
  }

// Toggle Reminder

const ToggleReminder = (id) =>{
  setTodos(todos.map((todo) => todo.id === id ? {...todo, reminder :!todo.reminder } : todo))
}

  return (
      <div className = "App">
    <Header onAdd = {() => setshowAddtodo(!showAddtodo)}/>
    {showAddtodo && <Addtodos onAdd = {ADDtodo} />}
   {todos.length > 0 ? <Addtodo todos = {todos} onDelete = {DeleteTodo} onToggle={ToggleReminder} />: 'No more todos to show 😞'}
   <Footer/>
    </div>
  );
}
   

export default App;
