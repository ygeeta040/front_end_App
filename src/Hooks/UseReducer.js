import React, {useReducer} from 'react'

const initial=0
const reducer=(state, action)=>{
if(action.type==="INCREMENT"){
    return (state + 1)
}
if(action.type==="DECREMENT"){
    return (state - 1)
}

}

const UseReducer = () => {
    // const [IncDec, setIncDec]=useState(0); 
    const [Incval, setIncval]= useReducer(reducer, initial)
  return (
    <>
    <h1>{Incval}</h1>
    <button onClick={()=>setIncval({type: "INCREMENT"})}> Incrment </button><br/>
    <button onClick={()=>setIncval({type: "DECREMENT"})}> Decrement</button>
    
    </>
  )
}

export default UseReducer;