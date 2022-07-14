import React, { useState } from 'react'
import './FormOne.css';
const FormOne = () => {

    const [name, setName]=useState("")
    const [fullname, setFullName]=useState("")

    const inputEvent =(event)=>{
        console.log(event.target.value)
        setName(event.target.value)
    }

    const onSubmmit=()=>{
        setFullName(name);
    }

  return (
    <>
    <header className='header'>
        <div>
            <h1>Hello {fullname}</h1>
            <input type="text" placeholder='Enter your name...' 
            onChange={inputEvent} value={name}/>
           
            <br/>
            
            

            <button onClick={onSubmmit}>CLICK ME😊</button>
        </div>
    </header>
    </>
  )
}

export default FormOne;