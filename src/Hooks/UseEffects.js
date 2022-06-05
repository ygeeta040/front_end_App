import React, { useState, useEffect } from 'react'


const UseEffects = () => {



    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title=`Chats (${count})`
    })
    
  return (
    <div>
        <h1>{count}</h1>
        <button style={{backgroundColor:'lightskyblue'}} onClick={()=>setCount(count + 1)}>Clik me😀</button>
    </div>
  )
}

export default UseEffects;