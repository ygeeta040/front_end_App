import React, { useState, useEffect } from 'react'



const Chats = () => {
const [Count, setCount] = useState(0)

useEffect(()=>{

if(Count >= 1){
    document.title= `chats (${Count})`
}else{
    document.title= `chats`
}

    
})

  return (
    <div>
        <h1>{Count}</h1>
        <button style={{backgroundColor:'lightseagreen' }} onClick={()=>setCount(Count + 1)} >Click ME</button>
    </div>
  )
}

export default Chats;