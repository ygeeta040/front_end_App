import React, { useState } from 'react'
import './FormOne.css';
const FormTree = () => {

    const [name, setName]=useState("")
    const [fullname, setFullName]=useState("")

    const inputEvent =(event)=>{
        console.log(event.target.value)
        setName(event.target.value)
    }

    const onSubmits=(event)=>{
        event.preventDefault();
        setFullName(name);
    }

  return (
    <>
     <form onSubmit={onSubmits}>
    <header className='header'>
       
        <div>
            <h1>Hello {fullname}</h1>
            <input type="text" placeholder='Enter your name...' 
            onChange={inputEvent} value={name}/>
           
            <br/>
            
            

            <button type="submit">CLICK ME😊</button>
        </div>
        
    </header>
    </form>
    </>
  )
}

export default FormTree;