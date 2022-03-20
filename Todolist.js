import React from 'react'

function Todolist({todos,deleteHandler}) {
  return (
    <div >{
        todos.map((todo,index)=>
            
            <div key={index} className='navbar navbar-light bg-light'>
                   
                     <h4 className='todo-container1 '>{todo}&nbsp;&nbsp;         
                      <button className='btn ' id='btn2' onClick={()=>deleteHandler(index)}>delete</button></h4>
                      
            
                </div>
              
              
        )
        
        } </div>
  )
}

export default Todolist