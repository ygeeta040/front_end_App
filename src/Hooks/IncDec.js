import React, { useState } from 'react'


const IncDec = () => {

const [IncDec, setIncDec]=useState(0);

  return (
    <>
    <h1>{IncDec}</h1>
    <button onClick={()=>setIncDec(IncDec + 1)}> Incrment </button><br/>
    <button onClick={()=>setIncDec(IncDec - 1)}> Decrement</button>
    </>
  )
}

export default IncDec;