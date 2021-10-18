import {useState} from 'react'
import {Button} from '@material-ui/core'
const Addtodos = ( {onAdd}) => {

    const [text,setText] = useState('')
    const [day,setDay ] = useState('')
    const [reminder,setReminder] = useState(false)
  
const onSubmit = (e) =>{
  e.preventDefault();
 if(!text) {
   alert('please add some todos');
   return
 }
  onAdd({text,day,reminder})
  setText('')
  setDay('')
  setReminder(false)

}
 
    return (
      
      <div className='container'>
      <div className='Addtodotext'>
      <h1>HI 👋</h1>
      
      <p> Thanks for trying out Lingr 😎, <br/> <br/>  Start Organizing Your Life ,You can click the 'Focus mode ' at the top to Hide the Form. <br/> <br/> Happy Organizing😎✔ </p>
     </div>
        <form className='add-form' onSubmit={onSubmit}>
       
       <input type= 'text' className='form-control' placeholder='Write your Todo Here...' value={text} onChange={(e) => setText(e.target.value)}/>
      
      
       
       <input type= 'text' className='form-control' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)}/>

      <div className="form-control form-control-check">
            <label>Reminder me</label>
            <input type ='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

       <Button type='submit' style={{width:'100%', backgroundColor:'salmon'}} variant='contained'>Add Todo</Button>
      </form>
     
      </div>
    )
}

export default Addtodos

