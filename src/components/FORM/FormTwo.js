import React, { useState } from 'react'

const FormTwo = () => {

    const [item1, setItem1]=useState("")
    const [item2, setItem2]=useState("")
    const [names, setNames]=useState("")
    const [fullnames, setFullNames]=useState("")

const inputItems1=(event)=>{
console.log(event.target.value)
setItem1(event.target.value);
}
const inputItems2=(event)=>{
    console.log(event.target.value)
    setItem2(event.target.value)
    }

const onSubmmits=()=>{
    setFullNames(item2);
    setNames(item1);
    
}

return (
    <>
    <header className='header'>
        <div>
            <h1>{names}</h1>
            <h1>{fullnames}</h1>
            <input type="text" 
            placeholder="enter your first name" 
            onChange={inputItems1}
            value={item1}
            />
            <input type="text" 
            placeholder="enter your last name" 
            onChange={inputItems2}
            value={item2}/>
            
            <button onClick={onSubmmits}>CLICK ME😊</button>


            
        </div>
    </header>
    </>

  )
}

export default FormTwo;