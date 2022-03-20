import React from 'react'
import Todolist from './Todolist'

function App() {
  const [task,setTask]=React.useState("")
  const [todos,setTodos]=React.useState([])
  const changeHandler=e=>{
    setTask(e.target.value);
  }
  const submitHandler=e=>{
    e.preventDefault()
    const newTodos=[...todos,task]
    setTodos(newTodos)
    setTask("")
  }
  const deleteHandler=(indexNumber)=>{
   const newtodos=todos.filter((todo,index)=>index!==indexNumber)
   setTodos(newtodos)
  }
  return (
    <div className='todo-container container f3'>
      <center>
          
          <form onSubmit={submitHandler} className="todo-form">
             <h1 className='h1'>
          Todo list 
        </h1>
       
        <input className='input' placeholder='Enter a Todo...' type="text" value={task} onChange={changeHandler}/>&nbsp;&nbsp;
        <input type="submit" value="add" className='btn' id='btn1' />  
        
      </form>

 
      
      <Todolist todos={todos} deleteHandler={deleteHandler}/>
      </center>
      
    </div>
  )
}

export default App